<template>
  <figure class="my-32 flex flex-row items-stretch px-4 md:px-0 max-w-4xl mx-auto pointer-events-none select-none relative group">
    <!-- The Heraldic Pen Column (Quill Pen Transfixing an Escroll) -->
    <div class="flex flex-col items-center flex-shrink-0 mr-10 md:mr-16 pt-1">
      <div class="text-green-500/60 group-hover:text-green-500 transition-colors duration-1000 mb-4 transform -rotate-[40deg] -translate-x-2">
        <!-- Optimized Heraldic Quill SVG (High-Fidelity) -->
        <svg class="w-14 h-14 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]" viewBox="0 0 100 100" fill="currentColor">
          <!-- The Plume (Feather) -->
          <path d="M85,15 C75,5 55,5 40,20 C30,30 25,45 28,60 C30,70 35,75 45,78 C55,80 70,75 80,65 C90,55 95,35 85,15 Z M45,65 C40,55 42,40 48,30 C55,20 65,15 75,18 C80,20 82,25 80,35 C75,45 65,55 55,60 C50,62 48,60 45,65 Z" />
          <!-- The Nib/Stem -->
          <path d="M28,60 L5,95 L15,95 L32,65 Z" />
        </svg>
      </div>
      <div class="w-2 flex-grow bg-green-500/60 shadow-[0_0_15px_rgba(34,197,94,0.1)] rounded-full"></div>
      <div class="w-1.5 h-1.5 rotate-45 bg-green-500/30 mt-4 shadow-[0_0_8px_rgba(34,197,94,0.1)]"></div>
    </div>

    <!-- The Content Area -->
    <div class="flex flex-col flex-grow justify-center py-2">
      <blockquote class="font-antique italic text-2xl md:text-[2.2rem] leading-[2.2] text-foreground/95 tracking-tight text-left !font-antique !italic border-none bg-transparent p-0 pb-4">
        <slot />
      </blockquote>
      
      <!-- Signature Docked Bottom-Right -->
      <figcaption v-if="author" class="mt-14 self-end flex items-center gap-6">
        <div class="h-px w-12 bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
        <cite class="text-[11px] uppercase tracking-[0.6em] font-bold text-green-500/80 not-italic whitespace-nowrap drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]">
          {{ author }}
        </cite>
      </figcaption>
    </div>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  author?: string
}>()
</script>

<style scoped>
.font-antique {
  font-family: var(--font-antique) !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

blockquote {
  filter: drop-shadow(0 0 1px rgba(255,255,255,0.05));
}
</style>
