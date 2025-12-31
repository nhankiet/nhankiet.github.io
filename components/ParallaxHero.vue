<template>
  <div class="relative w-full overflow-hidden">
    <!-- Fullscreen Parallax Hero -->
    <section 
      ref="heroSection"
      class="relative h-screen w-full flex items-center justify-center"
    >
      <!-- Parallax Background Image Layer -->
      <div 
        class="absolute inset-0 w-full h-full"
        :style="{
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out'
        }"
      >
        <!-- Image Container with Organic Gas Overlay -->
        <div class="relative w-full h-full">
          <!-- Background Image (Placeholder - you can swap this) -->
          <div 
            class="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/10"
            :style="coverImage ? `background-image: url(${coverImage}); background-size: cover; background-position: center;` : ''"
          />
          
          <!-- Organic Gas Overlay Engine -->
          <div class="absolute inset-0 pointer-events-none overflow-hidden">
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
          <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 opacity-20 blur-xl animate-pulse"></div>
          <h1 class="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            {{ name }}
          </h1>
        </div>
        
        <p class="mt-6 text-2xl md:text-3xl text-white/80 font-light tracking-wide animate-fade-in-up" style="animation-delay: 200ms;">
          {{ tagline }}
        </p>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div class="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div class="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>

    <!-- Content Slot (Appears after scroll) -->
    <div class="relative z-20 bg-black">
      <slot />
    </div>
  </div>
</template>

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

const heroSection = ref<HTMLElement | null>(null);
const parallaxOffset = ref(0);
const breathScale = ref(0);
const swirlRotation = ref(0);
const gasOffsetX = ref(0);
const gasOffsetY = ref(0);

let animationId: number;
let startTime = Date.now();

function handleScroll() {
  if (!heroSection.value) return;
  const scrollY = window.scrollY;
  // Parallax effect: move background slower than scroll (0.5x speed)
  parallaxOffset.value = scrollY * 0.5;
}

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
  window.addEventListener('scroll', handleScroll, { passive: true });
  updateAnimation();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  cancelAnimationFrame(animationId);
});
</script>
