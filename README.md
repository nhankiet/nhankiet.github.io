# Workflow Status Badges

![Deploy](https://github.com/nhankiet/nhankiet.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![CI](https://github.com/nhankiet/nhankiet.github.io/workflows/CI%20-%20Lint%20%26%20Type%20Check/badge.svg)

# Nhan Kiet To - Portfolio

> Staff AI & Data Engineer at Sportsbet

## 🚀 Tech Stack

- **Framework**: Nuxt 3 (Vue 3 + TypeScript)
- **Runtime**: Deno
- **Styling**: Tailwind CSS + Shadcn UI
- **Content**: Nuxt Content (Markdown-based)
- **Deployment**: GitHub Pages (SSG)
- **CI/CD**: GitHub Actions

## 🛠️ Development

```bash
# Start dev server
deno task dev

# Generate static site
deno task generate

# Preview production build
deno task preview

# Deploy to GitHub Pages
deno task deploy
```

## 📦 Project Structure

```
.
├── .github/
│   └── workflows/          # CI/CD pipelines
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

## 🎨 Design Philosophy

- **Dark Mode Only**: Pure black (#000000) background
- **Accent Color**: Muted green (#22c55e)
- **Typography**: Inter font family
- **Interactions**: Talos.dev-inspired spotlight effects
- **Aesthetic**: Apple Dark + Linear hybrid

## 🔧 CI/CD Pipeline

### Workflows

1. **Deploy** (`deploy.yml`)
   - Triggers on push to `main`
   - Builds and deploys to GitHub Pages
   - Uses dependency caching for speed

2. **CI** (`ci.yml`)
   - Runs on PRs and pushes
   - Type checking with TypeScript
   - Build validation

3. **Dependency Review** (`dependency-review.yml`)
   - Automated security scanning
   - Fails on high-severity vulnerabilities
   - Comments on PRs with findings

### Cost Optimization

- **Caching**: Deno + node_modules cached
- **Concurrency**: Prevents redundant builds
- **Estimated Usage**: ~30-60 min/month (1.5-3% of free tier)

## 📄 License

MIT © Nhan Kiet To

---

**Live Site**: [nhankiet.github.io](https://nhankiet.github.io)
