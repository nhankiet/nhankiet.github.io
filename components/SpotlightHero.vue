<template>
  <div
    ref="heroRef"
    class="relative overflow-hidden rounded-3xl border border-white/5 bg-black transition-all duration-700"
    @mousemove="handleMouseMove"
    @mouseenter="isHovered = true"
    @mouseleave="resetMouse"
  >
    <!-- ORGANIC GAS BACKGROUND ENGINE -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Blob 1: Multi-phase Breathing -->
      <div 
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,transparent_60%)] transition-transform duration-[4000ms] ease-in-out"
        :style="{
          transform: `translate(-50%, -50%) scale(${1 + breathScale}) rotate(${swirlRotation}deg) translate(${gasOffsetX}px, ${gasOffsetY}px)`
        }"
      />

      <!-- Blob 2: Counter-swirl Offset -->
      <div 
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_50%)] transition-transform duration-[6000ms] ease-linear"
        :style="{
          transform: `translate(-50%, -50%) scale(${1.1 - breathScale}) rotate(${-swirlRotation * 0.6}deg) translate(${-gasOffsetX * 1.2}px, ${-gasOffsetY * 0.5}px)`
        }"
      />

      <!-- MOUSE MAGNETIC FILAMENT (The "Fun" part) -->
      <div
        class="absolute inset-0 opacity-0 transition-opacity duration-1000"
        :class="isHovered ? 'opacity-100' : 'opacity-0'"
      >
        <!-- The Connection Line/Light -->
        <div
          class="absolute origin-center w-[300px] h-[100px] blur-[80px] bg-green-400/20 rounded-full mix-blend-plus-lighter"
          :style="{
            left: `${centerX}px`,
            top: `${centerY}px`,
            transform: `translate(-50%, -50%) rotate(${filamentAngle}deg) scaleX(${filamentLength})`,
            transition: 'transform 0.1s ease-out'
          }"
        />
        
        <!-- Subtle Pulse at Mouse -->
        <div
          class="absolute w-[150px] h-[150px] blur-[60px] bg-green-300/10 rounded-full"
          :style="{
            left: `${mouseX}px`,
            top: `${mouseY}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.2s ease-out'
          }"
        />
      </div>

      <!-- Ambient Static Glow -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.04),transparent_40%)]" />
    </div>

    <!-- Content slot with relative Z to stay above gas -->
    <div class="relative z-10 w-full h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const heroRef = ref<HTMLElement | null>(null);
const mouseX = ref(0);
const mouseY = ref(0);
const centerX = ref(0);
const centerY = ref(0);
const isHovered = ref(false);

const breathScale = ref(0);
const swirlRotation = ref(0);
const gasOffsetX = ref(0);
const gasOffsetY = ref(0);
const filamentAngle = ref(0);
const filamentLength = ref(0);

let animationId: number;
let startTime = Date.now();

function handleMouseMove(e: MouseEvent) {
  if (!heroRef.value) return;
  const rect = heroRef.value.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
  centerX.value = rect.width / 2;
  centerY.value = rect.height / 2;

  const dx = mouseX.value - centerX.value;
  const dy = mouseY.value - centerY.value;
  filamentAngle.value = Math.atan2(dy, dx) * (180 / Math.PI);
  filamentLength.value = Math.sqrt(dx * dx + dy * dy) / 100; // Normalized for banner scale
}

function resetMouse() {
  isHovered.value = false;
  // Slowly shrink filament
  filamentLength.value = 0;
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
  updateAnimation();
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});
</script>
