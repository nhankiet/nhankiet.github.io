<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Dark-only site: ensure the `dark` class is always on <html> for Tailwind dark: variants
useHead({
  htmlAttrs: { class: 'dark' }
});
</script>
