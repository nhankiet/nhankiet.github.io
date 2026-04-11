/**
 * Composable for shared formatting utilities.
 *
 * Extracts duplicated formatting logic into a single source of truth.
 */

const dateTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const datePartFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: '2-digit',
});

/**
 * Formats a date string/Date into `"HH:mm DD Mon YY"` format.
 *
 * @param dateString - ISO date string, Date object, or undefined
 * @returns Formatted string like `"14:30 20 Nov 24"`, or empty string if input is falsy
 *
 * @example
 * ```ts
 * formatDate('2025-03-20T10:00:00Z') // => "10:00 20 Mar 25"
 * formatDate(undefined)               // => ""
 * ```
 */
export function formatDate(dateString: string | Date | undefined): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  const time = dateTimeFormatter.format(date);
  const datePart = datePartFormatter.format(date).replace(',', '');
  return `${time} ${datePart}`;
}

/**
 * Calculates estimated reading time from a Nuxt Content v3 document body.
 *
 * Recursively traverses the AST node tree to extract text, then divides
 * by 225 WPM (average adult reading speed).
 *
 * @param body - The Nuxt Content v3 `body` object (expects `body.value` to be the AST root)
 * @returns Estimated minutes, minimum 1
 *
 * @example
 * ```ts
 * calculateReadingTime(article.body) // => 9
 * ```
 */
export function calculateReadingTime(body: { value?: unknown } | undefined | null): number {
  if (!body?.value) return 0;

  const WPM = 225;

  function extractText(node: unknown): string {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractText).join(' ');
    if (node && typeof node === 'object') {
      const obj = node as Record<string, unknown>;
      if (obj.children) return extractText(obj.children);
      if (obj.value) return String(obj.value);
    }
    return '';
  }

  const contentText = extractText(body.value);
  const words = contentText.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / WPM);

  return Math.max(1, minutes);
}
