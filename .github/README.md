# GitHub Actions Deployment

This portfolio uses GitHub Actions for automated deployment to GitHub Pages.

## Workflow Features

- ✅ **Automated Deployment**: Triggers on every push to `main` branch
- ✅ **Manual Trigger**: Can be triggered manually via `workflow_dispatch`
- ✅ **Dependency Caching**: Caches Deno and node_modules to reduce build times
- ✅ **Cost Optimized**: Uses concurrency control to prevent redundant builds
- ✅ **Proper Permissions**: Minimal required permissions for security

## Build Process

1. Checkout code
2. Setup Deno runtime
3. Restore cached dependencies (if available)
4. Install dependencies
5. Generate static site with Nuxt
6. Upload artifact to GitHub Pages
7. Deploy to production

## Cost Efficiency

- **Caching Strategy**: Reduces build time from ~3-5 minutes to ~1-2 minutes after first run
- **Concurrency Control**: Prevents multiple simultaneous deployments
- **Artifact Reuse**: Only builds once per commit

## Manual Deployment

You can still deploy manually using:

```bash
deno task deploy
```

This uses `gh-pages` CLI for local deployment.
