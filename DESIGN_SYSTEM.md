# Design System — nhankiet.github.io

> The visual language for Nhan Kiet To's portfolio. Dark-first, green-accented, organic & alive.

---

## 1. Design Principles

| Principle | Description |
|-----------|-------------|
| **Dark-first** | Pure black (`#000`) background. No light mode variant currently active. |
| **Organic motion** | Elements breathe, swirl, and respond to cursor — never feel static. |
| **Emerald accent** | Green (`hsl(142, 70%, 50%)`) is the sole accent. Used sparingly for emphasis. |
| **Depth through glow** | No box-shadows for depth. Use radial gradients, blur, and `mix-blend-plus-lighter` instead. |
| **Cursor as energy** | The mouse cursor creates light — spotlight effects, filament connections, and glow reveals. |

---

## 2. Design Tokens

### 2.1 Colors

All colors use HSL CSS custom properties defined in [`assets/css/tailwind.css`](assets/css/tailwind.css).

```
Token                   HSL Value              Usage
──────────────────────  ─────────────────────  ──────────────────────────
--background            0 0% 0%                Page background (#000000)
--foreground            0 0% 100%              Primary text (#FFFFFF)
--card                  0 0% 2%                Card surfaces (#050505)
--card-foreground       0 0% 100%              Card text
--primary               142 70% 50%            Green accent (#22c55e)
--primary-foreground    144 100% 11%           Text on green (#033b15)
--secondary             0 0% 9%                Secondary surface
--muted                 0 0% 12%               Muted surface
--muted-foreground      0 0% 63%               Secondary text (#a1a1a1)
--border                0 0% 10%               Borders
--ring                  142 70% 50%            Focus rings (green)
--radius                0.75rem                Border radius base
```

### 2.2 Green Usage Guide

| Opacity | Tailwind Class | Use Case |
|---------|---------------|----------|
| `100%` | `text-green-500` | Headings, active states |
| `90%` | `text-green-500/90` | Card titles |
| `80%` | `text-green-400/90` | Sub-headings in cards |
| `60%` | `text-green-500/60` | Hover borders |
| `30%` | `border-green-500/30` | Card hover borders |
| `5-15%` | `rgba(34,197,94,0.08-0.15)` | Radial gradient backgrounds |
| `≤5%` | `bg-green-500/5` | Subtle hover backgrounds |

> **Rule**: Never use `bg-green-500` as a solid fill except on buttons. Green should always feel like light, not paint.

### 2.3 Typography

| Property | Value |
|----------|-------|
| **Font family** | `Inter` via `https://rsms.me/inter/inter.css` |
| **Fallback** | `sans-serif` |
| **Hero heading** | `text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter` |
| **Section heading** | `text-3xl font-bold tracking-tight` |
| **Card title** | `text-[1.55rem] font-bold` |
| **Sub-heading** | `text-2xl font-semibold tracking-tight` |
| **Body** | `text-lg leading-relaxed` |
| **Small/meta** | `text-sm` or `text-base font-mono text-white/50` |

### 2.4 Spacing & Layout

| Pattern | Value |
|---------|-------|
| **Container** | `container` (centered, `2rem` padding, max `1400px`) |
| **Page padding** | `py-10` |
| **Section gap** | `space-y-16` (between major sections) |
| **Card grid** | `grid gap-6 md:grid-cols-2 lg:grid-cols-3` |
| **Border radius** | `rounded-xl` (cards), `rounded-3xl` (hero), `rounded-full` (buttons) |

---

## 3. Component Inventory

### 3.1 Primitives (Shadcn UI)

These live in `components/ui/` and are generated via shadcn-nuxt. Do not hand-edit.

| Component | Path | Notes |
|-----------|------|-------|
| **Button** | `ui/button/Button.vue` | CVA variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`. Sizes: `default`, `sm`, `lg`, `icon`. |
| **Card** | `ui/card/Card.vue` + 5 sub-components | `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardTitle`, `CardDescription` |
| **Breadcrumb** | `ui/breadcrumb/index.ts` | Full set: `Breadcrumb`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbList`, `BreadcrumbPage`, `BreadcrumbSeparator` |

### 3.2 Interactive Components (Custom)

#### `SpotlightCard.vue`
Wraps any Card with cursor-following green spotlight effects.

```
Features:
├── Cursor-follow radial gradient (600px outer, 200px inner)
├── Border glow via mask-composite trick
└── All effects hidden at rest, revealed on hover (`group-hover:opacity-100`)

Usage: <SpotlightCard class="..."><CardHeader>...</CardHeader></SpotlightCard>
```

#### `SpotlightHero.vue`
Full-width container with organic gas background and mouse-magnetic filament.

```
Features:
├── Dual breathing radial blobs (counter-rotating)
├── Mouse-magnetic filament (angle + length calculated from cursor)
├── Cursor pulse glow
└── requestAnimationFrame-driven animation loop

Usage: Wrap content inside as a slot. Used for section backgrounds.
```

#### `ParallaxHero.vue`
Full-screen hero with scroll parallax and organic gas overlay.

```
Features:
├── Full viewport height (`h-screen`)
├── Parallax background (0.5x scroll speed)
├── Organic gas overlay (same dual-blob engine as SpotlightHero)
├── Gradient overlay for text readability
├── Scroll indicator (animated bounce)
└── Content slot appears below the fold

Props:
├── name: string     (default: "Nhan Kiet To")
├── tagline: string  (default: "Staff AI & Data Engineer")
└── coverImage: string (optional background image URL)
```

#### `OrganicGasButton.vue`
Green CTA button with cursor-following glow and shimmer.

```
Features:
├── Base: bg-green-600 hover:bg-green-700
├── Cursor-follow spotlight (120px blur)
├── Internal shimmer sweep on hover
└── Inherits all Button props via v-bind="$attrs"

Usage: <OrganicGasButton class="rounded-full px-10 py-3">CTA Text</OrganicGasButton>
```

#### `MagneticButton.vue`
Green button with idle breathing animation and tight cursor-core focus.

```
Features:
├── Idle swirl animation (gas-swirl keyframe, always visible)
├── Cursor-follow spotlight (100px outer, 40px core)
├── mix-blend-plus-lighter for additive glow
└── Persistent green base with overlay

Note: More "alive" than OrganicGasButton due to idle animation.
```

### 3.3 Layout Components

#### `AppHeader.vue`
Sticky navigation bar.

```
Features:
├── Sticky top, z-40
├── bg-black/60 backdrop-blur-xl (glassmorphism)
├── Navigation links: Home, Blog, Projects, Resume
├── GitHub icon link (Lucide)
└── Mobile-responsive (hidden nav on small screens)

Border: border-white/5 (barely visible)
```

#### `default.vue` (Layout)
Root layout wrapper.

```
Structure:
├── <AppHeader />
└── <main class="flex-1"><slot /></main>

Background: bg-background (--background: pure black)
Font: font-sans antialiased
```

---

## 4. Animation System

### 4.1 Keyframes (defined in `tailwind.config.ts`)

| Name | Duration | Use Case |
|------|----------|----------|
| `fade-in-up` | `0.8s ease-out` | Page entry animations, staggered with `animation-delay` |
| `fade-in` | `1s ease-out` | Subtle scale-up entry |
| `wobble` | `3s ease-in-out infinite` | Idle micro-motion |
| `shimmer` | `3s linear infinite` | Background shimmer sweeps |
| `pulse-gentle` | `2s ease-in-out infinite` | Soft opacity + scale pulse |
| `google-gas` | `8s ease-in-out infinite` | Complex box-shadow swirl (green tones) |
| `gas-swirl` | `10s linear infinite` | 360° rotation + scale oscillation |

### 4.2 Programmatic Animations (requestAnimationFrame)

Used in `SpotlightHero` and `ParallaxHero`:

```js
breathScale   = sin(t * 1.5) * 0.04 + sin(t * 0.7) * 0.02   // Dual-frequency breathing
swirlRotation = t * 8                                          // Slow constant rotation (8°/s)
gasOffsetX    = sin(t * 0.6) * 20                              // Horizontal drift (20px)
gasOffsetY    = cos(t * 0.5) * 15                              // Vertical drift (15px)
```

### 4.3 Transition Conventions

| Context | Duration | Easing |
|---------|----------|--------|
| **Color/opacity** | `300ms` or `500ms` | Default ease |
| **Card hover** | `500ms` | `transition-all` |
| **Gas blob movement** | `4000ms` / `6000ms` | `ease-in-out` / `linear` |
| **Cursor spotlight** | `100ms-200ms` | `ease-out` |
| **Stagger delay** | `100ms-200ms` increments | Via `animation-delay` inline style |

---

## 5. Interactive Patterns

### 5.1 Cursor Spotlight (Cards)

Every interactive card should use `SpotlightCard` which provides:
1. **Outer glow** — 600px radial gradient at 8% opacity
2. **Inner focus** — 200px radial gradient at 18% opacity
3. **Border highlight** — 120px radial on the border via `mask-composite: exclude`

### 5.2 Cursor Filament (Heroes)

The hero components track `mouseX`/`mouseY` relative to the container and calculate:
- `filamentAngle` — `atan2(dy, dx)` pointing from center to cursor
- `filamentLength` — Normalized distance from center

### 5.3 Organic Gas Engine

The "breathing" background uses two counter-rotating radial gradient blobs:
- **Blob 1**: `rgba(34,197,94,0.08-0.12)`, 140% size, breathes + rotates clockwise + drifts
- **Blob 2**: `rgba(16,185,129,0.05-0.08)`, 120% size, counter-breathes + rotates CCW

---

## 6. Page Templates

### Home (`pages/index.vue`)
```
<ParallaxHero>
  <section>  <!-- Recent Work grid -->
    <SpotlightCard> × N
    <Coming Soon dashed card>
  </section>
</ParallaxHero>
```

### Listing Pages (`pages/blog/index.vue`, `pages/projects/index.vue`)
```
<div container>
  <h1 + description>
  <grid>
    <SpotlightCard> × N  (with OrganicGasButton CTAs)
  </grid>
</div>
```

### Content Pages (`pages/[...slug].vue`)
```
<div container max-w-3xl>
  <Breadcrumb>
  <article class="prose dark:prose-invert">
    <ContentRenderer>
  </article>
</div>
```

### Resume (`pages/resume.vue`)
```
<div container max-w-4xl>
  <header + CTAs>
  <section> Professional Summary
  <section> Work Experience (SpotlightCards with timeline)
  <section> Education (grid of SpotlightCards)
  <section> Technical Ecosystem (4-col icon grid)
</div>
```

---

## 7. Icon System

- **Library**: `lucide-vue-next`
- **Registration**: Global via `plugins/lucide.client.ts` (70+ icons registered)
- **Usage**: Direct import `import { Github, Rocket } from 'lucide-vue-next'`
- **Sizing**: `w-4 h-4` (inline), `w-5 h-5` (nav), `w-10 h-10` (decorative)
- **Color**: Inherits `text-*` from parent, typically `text-green-500/50` or `text-white/40`

---

## 8. Content System

- **Engine**: Nuxt Content v2 (`@nuxt/content`)
- **Source directory**: `contents/` (not default `content/`)
- **Content types**: Blog posts, Project showcases
- **Frontmatter**: `title`, `description`, `date`
- **Rendering**: `<ContentDoc>` + `<ContentRenderer>` with custom `.prose` styles

---

## 9. Do's and Don'ts

### ✅ Do
- Use `SpotlightCard` for any clickable card surface
- Use `OrganicGasButton` for primary CTAs
- Use `text-green-500/90` for card titles, never plain `text-green-500`
- Use `border-white/5` or `border-white/10` for subtle dividers
- Stagger entry animations with `animation-delay: Nms`
- Use `font-mono text-white/50` for dates and metadata

### ❌ Don't
- Use solid green backgrounds (except buttons)
- Use `box-shadow` for depth — use radial gradients instead
- Add new colors outside the green/white/black palette
- Use opacity above `0.15` for background radial gradients
- Skip `SpotlightCard` wrapper for interactive cards
- Hard-code pixel values for responsive layouts — use Tailwind breakpoints
