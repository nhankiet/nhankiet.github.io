<template>
  <div
    ref="cardRef"
    class="group relative overflow-hidden rounded-xl border-[3px] border-white/10 bg-card transition-all duration-500 hover:border-green-500/30 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)]"
    @mousemove="handleMouseMove"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Idle Swirl Layer (Removed as requested) -->


    <!-- Cursor Follow Layer (The "Talos" spotlight) -->
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      :style="{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(34,197,94,0.08), transparent 40%)`
      }"
    />

    <!-- Magnetic Glow Focus (Tight core focus) -->
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      :style="{
        background: `radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(34,197,94,0.18), transparent 70%)`
      }"
    />

    <!-- Border Glow (Talos-style edge highlight) -->
    <div
      class="absolute -inset-[3px] pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 border-[3px] border-transparent"
      :style="{
        background: `radial-gradient(120px circle at ${mouseX}px ${mouseY}px, rgba(22,163,74,0.6), transparent 100%)`,
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude'
      }"
    />

    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cardRef = ref<HTMLElement | null>(null);
const mouseX = ref(0);
const mouseY = ref(0);
const isHovered = ref(false);

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return;
  const rect = cardRef.value.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
}
</script>

<style scoped>
/* Webkit mask composite for the border glow trick */
</style>
