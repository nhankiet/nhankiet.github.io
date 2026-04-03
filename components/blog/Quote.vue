<template>
  <figure class="my-32 flex flex-row items-stretch px-4 md:px-0 max-w-4xl mx-auto pointer-events-none select-none relative group">
    <!-- The Heraldic Pen Column (Quill Pen + Ink Mark) -->
    <div class="flex flex-col items-center flex-shrink-0 mr-10 md:mr-16 pt-1">
      <!-- 1. The Quill SVG (Positioned and Angled) -->
      <div class="text-green-500/70 group-hover:text-green-500 transition-all duration-1000 mb-2 transform -rotate-[35deg] translate-x-1 origin-bottom">
        <svg class="w-16 h-16 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)] filter grayscale-[0.2] group-hover:grayscale-0" viewBox="0 0 100 100" fill="currentColor">
          <!-- Main Rachis (Stem) -->
          <path d="M48,95 L52,95 L52,70 C52,60 55,40 50,10 C45,40 48,60 48,70 L48,95 Z" opacity="0.8" />
          <!-- Detailed Plume (Vane) -->
          <path d="M50,10 C35,30 30,55 35,75 C38,85 45,90 50,90 C55,90 62,85 65,75 C70,55 65,30 50,10 Z M52,82 C55,75 58,60 55,45 C52,35 48,35 45,45 C42,60 45,75 48,82 L50,85 L52,82 Z" />
          <!-- Plume Notches (Organic details) -->
          <path d="M38,40 L32,35 Q30,38 34,42 Z M62,55 L68,52 Q70,55 64,58 Z M42,25 L38,20 Q36,22 40,27 Z" />
          <!-- Nib (Pen point) -->
          <path d="M49,95 L51,95 L50,100 Z" />
        </svg>
      </div>

      <!-- 2. The Mark SVG (Elegant Tapered Curve) -->
      <div class="w-10 flex-grow relative -mt-1 group-hover:opacity-100 transition-opacity duration-1000">
        <svg class="absolute inset-0 w-full h-full text-green-500/60 transition-all duration-1000 group-hover:text-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.15)]" viewBox="0 0 40 1000" preserveAspectRatio="none" fill="currentColor">
          <!-- Tapered S-Curve "Ink Stroke" -->
          <path d="M 20 0 
                   C 25 150, 35 350, 20 500 
                   C 5 650, 15 850, 20 1000 
                   L 18 1000 
                   C 13 850, 3 650, 18 500 
                   C 33 350, 23 150, 18 0 
                   Z" />
        </svg>
      </div>

      <!-- Nib Point / Finishing Mark -->
      <div class="w-2.5 h-2.5 rotate-45 bg-green-500/40 mt-6 shadow-[0_0_10px_rgba(34,197,94,0.2)] group-hover:bg-green-500 group-hover:scale-125 transition-all duration-1000"></div>
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
