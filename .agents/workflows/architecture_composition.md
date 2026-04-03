---
description: The Arsenal vs. Battlefield Architecture (Functional Composition)
---

# Architecture Composition Rules (Stateless Arsenal vs. Stateful Battlefield)

### 1. **The Arsenal (libs/, components/ui/) - Stateless Lego Blocks**
- All components and utilities in these folders MUST be **Stateless and Side-Effect Free**.
- Use **Props and Parameters** for all dynamic behavior.
- Provide **Sensible Defaults** for every parameter to ensure 'Plug-and-Play' usability.
- **Unit Test Focus:** These are the primary targets for 100% unit test coverage. Since they are stateless, tests should be trivial and idempotent.

### 2. **The Battlefield (pages/, layouts/, server/) - Action & Pipeline**
- This is where the Arsenal is **Assembled**.
- **State Injection:** Data fetching (Nuxt `useFetch`), global state (Pinia), and event orchestration live ONLY here.
- **Side Effects:** Routing, logging, and external API calls are handled here, then passed down into the Arsenal as data/callbacks.

### 3. **Stateless Core Principle**
- NEVER bake a global context or a specific data-fetch into a 'Lib' component. 
- If a component needs a user name, pass `name: string` as a prop. Do not call authentication logic inside the component.

### 4. **Reasoning (Staff Engineering Level)**
- This separation ensures a clean **Atomic Test Surface**. 
- It allows for **Rapid Prototyping** (swapping blocks on the battlefield) without modifying the arsenal.
- It mirrors high-performance **Backend Data Pipelines** (Pure Functions assembled into a Task Graph).
