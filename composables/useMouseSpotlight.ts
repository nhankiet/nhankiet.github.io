import { ref, type Ref } from 'vue';

/**
 * Composable for cursor-relative coordinate tracking on a DOM element.
 *
 * Returns reactive `mouseX`/`mouseY` positions relative to the element's
 * bounding rect, plus an `isHovered` state. Handles both raw HTMLElement
 * refs and Vue component refs (reads `$el` if present).
 *
 * @example
 * ```vue
 * <script setup>
 * const { elementRef, mouseX, mouseY, isHovered, handleMouseMove, resetHover } = useMouseSpotlight();
 * </script>
 * <template>
 *   <div ref="elementRef" @mousemove="handleMouseMove" @mouseenter="isHovered = true" @mouseleave="resetHover">
 *     <div :style="{ background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ...)` }" />
 *   </div>
 * </template>
 * ```
 */
export function useMouseSpotlight(): {
  elementRef: Ref<HTMLElement | null>;
  mouseX: Ref<number>;
  mouseY: Ref<number>;
  isHovered: Ref<boolean>;
  handleMouseMove: (e: MouseEvent) => void;
  resetHover: () => void;
} {
  const elementRef = ref<HTMLElement | null>(null);
  const mouseX = ref(0);
  const mouseY = ref(0);
  const isHovered = ref(false);

  function resolveElement(): HTMLElement | null {
    const raw = elementRef.value;
    if (!raw) return null;
    // Vue component refs expose $el; raw HTMLElement refs do not
    const el = (raw as any).$el ?? raw;
    return el instanceof HTMLElement ? el : null;
  }

  function handleMouseMove(e: MouseEvent): void {
    const el = resolveElement();
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.value = e.clientX - rect.left;
    mouseY.value = e.clientY - rect.top;
  }

  function resetHover(): void {
    isHovered.value = false;
  }

  return { elementRef, mouseX, mouseY, isHovered, handleMouseMove, resetHover };
}
