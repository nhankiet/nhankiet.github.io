<template>
  <div class="min-h-screen bg-background font-sans antialiased">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>
