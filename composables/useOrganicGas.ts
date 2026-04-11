import { ref, onMounted, onUnmounted, type Ref } from 'vue';

/**
 * Composable for the dual-blob "organic gas" breathing animation.
 *
 * Drives four reactive values via `requestAnimationFrame`:
 * - `breathScale`: dual-frequency sinusoidal scale offset (±0.06)
 * - `swirlRotation`: constant angular drift (8°/s)
 * - `gasOffsetX`: horizontal wander (±20px)
 * - `gasOffsetY`: vertical wander (±15px)
 *
 * Automatically starts on mount and stops on unmount.
 *
 * @example
 * ```vue
 * <script setup>
 * const { breathScale, swirlRotation, gasOffsetX, gasOffsetY } = useOrganicGas();
 * </script>
 * <template>
 *   <div :style="{ transform: `scale(${1 + breathScale}) rotate(${swirlRotation}deg) translate(${gasOffsetX}px, ${gasOffsetY}px)` }" />
 * </template>
 * ```
 */
export function useOrganicGas(): {
  breathScale: Ref<number>;
  swirlRotation: Ref<number>;
  gasOffsetX: Ref<number>;
  gasOffsetY: Ref<number>;
} {
  const breathScale = ref(0);
  const swirlRotation = ref(0);
  const gasOffsetX = ref(0);
  const gasOffsetY = ref(0);

  let animationId = 0;
  const startTime = Date.now();

  function tick(): void {
    const elapsed = (Date.now() - startTime) / 1000;

    breathScale.value = Math.sin(elapsed * 1.5) * 0.04 + Math.sin(elapsed * 0.7) * 0.02;
    swirlRotation.value = elapsed * 8;
    gasOffsetX.value = Math.sin(elapsed * 0.6) * 20;
    gasOffsetY.value = Math.cos(elapsed * 0.5) * 15;

    animationId = requestAnimationFrame(tick);
  }

  onMounted(() => {
    tick();
  });

  onUnmounted(() => {
    cancelAnimationFrame(animationId);
  });

  return { breathScale, swirlRotation, gasOffsetX, gasOffsetY };
}
