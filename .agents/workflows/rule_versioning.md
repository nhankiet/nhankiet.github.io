---
description: Version Pinning Rules for Package Management & Tooling
---
# Hybrid Versioning Rules

### 1. **Core Infrastructure & Host Tools (STRICT)**
- **Mise Tools (`mise.toml`):** Use exact numerical versions (e.g., `24.14.1`). No `^` or `~`.
- **Core App Frameworks (`package.json`):** Nuxt, Vue, and Tailwind MUST be strictly pinned (e.g., `nuxt: "4.4.0"`).

### 2. **Utility & Support Libraries (RELAXED)**
- **Peripheral Modules:** Smaller libraries, icons, shadcn, and UI utilities are permitted to use the `^` or `~` prefix (e.g., `radix-vue: "^1.9.17"`).
- **Security & Bugfixes:** This allows minor updates while maintaining the same major project architecture.

### 3. **The "Latest" Constraint**
- NEVER use the "latest" keyword or "*" as a primary version identifier. Always start with a baseline version number.

