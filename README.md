# Workflow Status Badges

![Deploy](https://github.com/nhankiet/nhankiet.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![CI](https://github.com/nhankiet/nhankiet.github.io/workflows/CI%20-%20Lint%20%26%20Type%20Check/badge.svg)

# Nhan Kiet To - Portfolio

> Staff AI & Data Engineer at Sportsbet

## 🚀 Tech Stack

- **Framework**: Nuxt 3 (Vue 3 + TypeScript)
- **Runtime**: Deno (local dev) / Vite+ (CI/CD)
- **Styling**: Tailwind CSS + Shadcn UI
- **Content**: Nuxt Content (Markdown-based)
- **Deployment**: GitHub Pages (SSG)
- **CI/CD**: GitHub Actions + [Vite+](https://viteplus.dev)

## 🛠️ Development

```bash
# Install dependencies
mise run install

# Start dev server
mise run dev

# Generate static site
mise run generate

# Preview production build
mise run preview

# Deploy to GitHub Pages
mise run deploy
```

## 📦 Project Structure

```
.
├── .github/
│   └── workflows/          # CI/CD pipelines (Vite+)
├── components/             # Vue components
│   ├── ui/                # Shadcn UI components
│   ├── SpotlightCard.vue  # Custom card with hover effect
│   ├── SpotlightHero.vue  # Hero section with organic gas effect
│   └── OrganicGasButton.vue # Interactive button component
├── contents/              # Markdown content
│   ├── blog/             # Blog posts
│   └── projects/         # Project showcases
├── pages/                # Nuxt pages (routes)
└── public/               # Static assets
```
