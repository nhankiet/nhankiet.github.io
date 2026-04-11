<template>
  <header class="sticky top-0 z-40 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
    <div class="container flex h-16 items-center">
      <div class="mr-4 hidden md:flex items-baseline">
        <NuxtLink to="/" class="mr-10 flex items-center space-x-2 group">
          <span class="hidden font-black text-xl sm:inline-block text-white group-hover:text-green-500 transition-colors tracking-tighter whitespace-nowrap">~nhankiet</span>
        </NuxtLink>
        <nav class="flex items-center gap-8 text-[15px] font-bold tracking-tight mt-1">
          <NuxtLink to="/blog" class="transition-colors hover:text-white text-white/50" active-class="text-white">
            Blog
          </NuxtLink>
          <NuxtLink to="/projects" class="transition-colors hover:text-white text-white/50" active-class="text-white">
            Projects
          </NuxtLink>
          <NuxtLink to="/resume" class="transition-colors hover:text-white text-white/50" active-class="text-white">
            About Me
          </NuxtLink>
        </nav>
      </div>
      <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div class="w-full flex-1 md:w-auto md:flex-none">
        </div>
        <nav class="flex items-center gap-2">
           <Button variant="ghost" size="icon" as-child class="text-white/40 hover:text-white transition-colors">
              <a href="https://github.com/nhankiet" target="_blank" aria-label="github">
                <Icon name="ph:github-logo-duotone" class="w-6 h-6" />
              </a>
           </Button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
