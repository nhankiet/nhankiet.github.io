---
description: Version Pinning Rules for Package Management & Tooling
---
# Versioning Rules
- NEVER use "latest", "*", or loosely pinned versions (like "^" or "~") for package managers, libraries, or tools configurations (e.g., in `package.json`, `mise.toml`, `deno.json`).
- You MUST ALWAYS pin the exact numerical version (e.g., `1.2.3`). 
- When adding a dependency or tool, retrieve the precise current version at the time of the prompt request and explicitly set it.
