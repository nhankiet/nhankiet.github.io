<template>
  <nav v-if="links && links.length > 0" class="mb-12 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group">
    <div class="flex items-center gap-3 mb-8">
      <div class="flex-shrink-0 flex items-center justify-center p-1.5 rounded-lg bg-green-500/10 text-green-500 ring-1 ring-green-500/20">
        <Icon name="ph:book-open-duotone" class="w-5 h-5" />
      </div>
      <h3 class="text-xs font-bold tracking-[0.25em] text-foreground uppercase leading-none mt-px">In This Post</h3>
    </div>
    
    <ul class="space-y-4">
      <li v-for="link in links" :key="link.id" class="flex flex-col">
        <a 
          :href="`#${link.id}`" 
          class="text-base font-semibold text-muted-foreground/80 hover:text-green-400 transition-all duration-300 flex items-center gap-3 group/item border-l-2 border-transparent hover:border-green-500/50 pl-4 py-1 no-underline"
          @click.prevent="scrollTo(link.id)"
        >
          <div class="flex items-center justify-center min-w-[2.2rem] h-7 rounded bg-green-500/10 text-green-400 group-hover/item:text-green-500 group-hover/item:bg-green-500/20 transition-all border border-green-500/20 font-mono text-xs shadow-[0_0_10px_rgba(34,197,94,0.1)]">
            0{{ links.indexOf(link) + 1 }}
          </div>
          <span class="tracking-tight text-lg leading-none">{{ link.text }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface TocLink {
  id: string
  text: string
  children?: TocLink[]
}

defineProps<{
  links: TocLink[]
}>()

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100 // Adjust for fixed header
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}
</script>
