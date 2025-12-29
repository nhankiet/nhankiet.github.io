<template>
  <header class="sticky top-0 z-40 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
    <div class="container flex h-14 items-center">
      <div class="mr-4 hidden md:flex">
        <NuxtLink to="/" class="mr-6 flex items-center space-x-2 group">
          <span class="hidden font-bold sm:inline-block text-white group-hover:text-green-500 transition-colors">Home</span>
        </NuxtLink>
        <nav class="flex items-center gap-6 text-sm font-medium">
          <NuxtLink to="/blog" class="transition-colors hover:text-white text-white/40" active-class="text-white">
            Blog
          </NuxtLink>
          <NuxtLink to="/projects" class="transition-colors hover:text-white text-white/40" active-class="text-white">
            Projects
          </NuxtLink>
          <NuxtLink to="/resume" class="transition-colors hover:text-white text-white/40" active-class="text-white">
            Resume
          </NuxtLink>
        </nav>
      </div>
      <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div class="w-full flex-1 md:w-auto md:flex-none">
        </div>
        <nav class="flex items-center gap-2">
           <Button variant="ghost" size="icon" as-child class="text-white/40 hover:text-white">
              <a href="https://github.com/nhankiet" target="_blank" aria-label="Github"><Github class="w-5 h-5" /></a>
           </Button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Github } from 'lucide-vue-next'
</script>
