# GitHub Actions Deployment

This portfolio uses GitHub Actions for automated deployment to GitHub Pages.

## Workflow Features

- ✅ **Automated Deployment**: Triggers on every push to `main` branch
- ✅ **Manual Trigger**: Can be triggered manually via `workflow_dispatch`
- ✅ **Vite+ Toolchain**: Uses [Vite+](https://viteplus.dev) (`setup-vp`) for builds
- ✅ **Dependency Caching**: Caches npm dependencies for fast builds
- ✅ **Cost Optimized**: Uses concurrency control to prevent redundant builds
- ✅ **Proper Permissions**: Minimal required permissions for security

## Build Process

1. Checkout code
2. Setup Vite+ via `voidzero-dev/setup-vp@v1`
3. Install dependencies (auto-detected by Vite+)
4. Generate static site with Nuxt
5. Upload artifact to GitHub Pages
6. Deploy to production

## Local Development

Local dev uses Deno via mise:

```bash
mise run dev      # Start dev server
mise run generate # Build static site
mise run deploy   # Generate + deploy to GH Pages
```

## Cost Efficiency

- **Caching Strategy**: Vite+ caches npm dependencies automatically
- **Concurrency Control**: Prevents multiple simultaneous deployments
- **Artifact Reuse**: Only builds once per commit
