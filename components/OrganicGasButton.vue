<template>
  <Button
    ref="elementRef"
    v-bind="$attrs"
    class="relative overflow-hidden group/gas-btn bg-green-600 hover:bg-green-700 text-white border-none transition-all duration-300"
    @mousemove="handleMouseMove"
    @mouseenter="isHovered = true"
    @mouseleave="resetHover"
  >
    <!-- Content Slot -->
    <span class="relative z-20 flex items-center gap-2">
      <slot />
    </span>

    <!-- Interactive Button Glow (Tighter than Hero) -->
    <div
      class="absolute inset-0 pointer-events-none opacity-0 group-hover/gas-btn:opacity-100 transition-opacity duration-300 overflow-hidden"
    >
      <!-- Tight spotlight at mouse -->
      <div
        class="absolute w-[120px] h-[120px] blur-xl bg-green-400/40 rounded-full"
        :style="{
          left: `${mouseX}px`,
          top: `${mouseY}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'plus-lighter'
        }"
      />

      <!-- Subtle internal shimmer -->
      <div 
        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/gas-btn:translate-x-full transition-transform duration-1000 ease-in-out"
      />
    </div>

    <!-- Base Shadow/Glow -->
    <div class="absolute inset-0 bg-black/5 mix-blend-overlay -z-10" />
  </Button>
</template>

<script setup lang="ts">
import { useMouseSpotlight } from '~/composables/useMouseSpotlight';

const { elementRef, mouseX, mouseY, isHovered, handleMouseMove, resetHover } = useMouseSpotlight();
</script>
