<template>
  <div class="relative w-full overflow-hidden">
    <!-- Fullscreen Parallax Hero -->
    <section 
      ref="heroSection"
      class="relative h-screen w-full flex items-center justify-center"
    >
      <!-- Background Image Layer -->
      <div 
        class="absolute inset-0 w-full h-full"
      >
        <!-- Image Container with Organic Gas Overlay -->
        <!-- Image Container with Organic Gas Overlay -->
        <!-- Image Container with Organic Gas Overlay -->
        <div class="relative w-full h-full bg-black overflow-hidden">
          <!-- Background Image with Ultra-Slow Settle Zoom -->
          <div 
            class="absolute inset-0 bg-gradient-to-br from-green-900/60 via-black to-emerald-900/40"
            :class="[isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-130 blur-2xl']"
            :style="[
                coverImage ? `background-image: url(${coverImage}); background-size: cover; background-position: center; shadow: inset 0 0 150px black;` : '',
                { transition: 'all 6000ms cubic-bezier(0.2, 1, 0.2, 1)' }
            ]"
          />
          
          <!-- Tactical Split Reveal (5s Curtain) -->
          <div class="absolute inset-0 z-5 pointer-events-none flex">
            <!-- Left Panel -->
            <div 
              class="h-full bg-black transition-all"
              :style="{ width: isLoaded ? '0%' : '50%', transition: 'all 5000ms cubic-bezier(0.45, 0, 0.55, 1)' }"
            />
            <!-- Right Panel -->
            <div 
              class="h-full bg-black ml-auto transition-all"
              :style="{ width: isLoaded ? '0%' : '50%', transition: 'all 5000ms cubic-bezier(0.45, 0, 0.55, 1)' }"
            />
          </div>

          <!-- Organic Gas Overlay Engine -->
          <div 
            class="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-[3000ms] delay-500"
            :class="isLoaded ? 'opacity-100' : 'opacity-0'"
          >
            <!-- Blob 1: Multi-phase Breathing -->
            <div 
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_60%)] transition-transform duration-[4000ms] ease-in-out"
              :style="{
                transform: `translate(-50%, -50%) scale(${1 + breathScale}) rotate(${swirlRotation}deg) translate(${gasOffsetX}px, ${gasOffsetY}px)`
              }"
            />

            <!-- Blob 2: Counter-swirl Offset -->
            <div 
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_50%)] transition-transform duration-[6000ms] ease-linear"
              :style="{
                transform: `translate(-50%, -50%) scale(${1.1 - breathScale}) rotate(${-swirlRotation * 0.6}deg) translate(${-gasOffsetX * 1.2}px, ${-gasOffsetY * 0.5}px)`
              }"
            />
          </div>

          <!-- Dark Gradient Overlay for Text Readability -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
      </div>

      <!-- Hero Content (Fixed Position) -->
      <div class="relative z-10 text-center px-6 max-w-5xl">
        <div class="relative animate-fade-in-up">
          <!-- Sharper focused glow -->
          <div class="absolute -inset-2 rounded-full bg-green-500/30 blur-3xl animate-pulse"></div>
          
          <h1 
            class="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-white to-green-300 bg-[length:200%_auto] animate-prism-flow drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
          >
            {{ name }}
          </h1>
        </div>
        
        <p class="mt-6 text-2xl md:text-3xl text-white font-medium tracking-wide animate-fade-in-up drop-shadow-md" style="animation-delay: 200ms;">
          {{ tagline }}
        </p>

      </div>
    </section>

    <!-- Content Slot (Appears after scroll) -->
    <div class="relative z-20 bg-black">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@keyframes prism-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-prism-flow {
  animation: prism-flow 5s ease infinite;
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Props {
  name?: string;
  tagline?: string;
  coverImage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Nhan Kiet To',
  tagline: 'Staff AI & Data Engineer',
  coverImage: ''
});

const isLoaded = ref(false);
const heroSection = ref<HTMLElement | null>(null);
const breathScale = ref(0);
const swirlRotation = ref(0);
const gasOffsetX = ref(0);
const gasOffsetY = ref(0);

let animationId: number;
let startTime = Date.now();


function updateAnimation() {
  const now = Date.now();
  const elapsed = (now - startTime) / 1000;

  breathScale.value = (Math.sin(elapsed * 1.5) * 0.04) + (Math.sin(elapsed * 0.7) * 0.02);
  swirlRotation.value = elapsed * 8;
  gasOffsetX.value = Math.sin(elapsed * 0.6) * 20;
  gasOffsetY.value = Math.cos(elapsed * 0.5) * 15;

  animationId = requestAnimationFrame(updateAnimation);
}

onMounted(() => {
  updateAnimation();
  // Cinematic settle delay
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});
</script>
