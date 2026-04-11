<template>
  <Button
    ref="elementRef"
    v-bind="$attrs"
    class="relative overflow-hidden group/btn"
    @mousemove="handleMouseMove"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Content Slot -->
    <span class="relative z-10 flex items-center gap-2">
      <slot />
    </span>

    <!-- Idle Breathing Layer -->
    <div 
      class="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-40 group-hover/btn:opacity-20"
    >
       <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(22,163,74,0.3)_0%,transparent_70%)] animate-gas-swirl" />
    </div>

    <!-- Cursor Follow Spotlight (The Talos underlay) -->
    <div
      class="absolute inset-0 pointer-events-none transition-all duration-300 opacity-0 group-hover/btn:opacity-100"
      :style="{
        background: `radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(34,197,94,0.6), transparent 80%)`,
        mixBlendMode: 'plus-lighter'
      }"
    />

    <!-- Magnetic Glow Focus (Tight core focus) -->
    <div
      class="absolute inset-0 pointer-events-none transition-all duration-150 opacity-0 group-hover/btn:opacity-100"
      :style="{
        background: `radial-gradient(40px circle at ${mouseX}px ${mouseY}px, rgba(22,163,74,0.8), transparent 90%)`
      }"
    />

    <!-- Persistent Muted Base -->
    <div class="absolute inset-0 bg-green-600 group-hover/btn:bg-green-700 transition-colors duration-500 -z-10" />
    <div class="absolute inset-0 bg-green-900/40 mix-blend-overlay -z-10" />

  </Button>
</template>

<script setup lang="ts">
import { useMouseSpotlight } from '~/composables/useMouseSpotlight';

const { elementRef, mouseX, mouseY, isHovered, handleMouseMove } = useMouseSpotlight();
</script>

<style scoped>
/* Ensure smooth movement */
.group\/btn:hover div {
  transition: transform 0.1s ease-out, background 0.05s linear;
}
</style>
