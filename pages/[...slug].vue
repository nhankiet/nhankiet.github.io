<template>
  <div class="container py-10 max-w-3xl">
    <div v-if="page">
      <!-- Minimalist Navigation -->
      <div class="mb-10 flex items-center justify-between animate-fade-in">
        <NuxtLink 
          v-if="collection === 'blog'" 
          to="/blog" 
          class="group flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-green-500 transition-all duration-300 uppercase tracking-widest"
        >
          <Icon name="heroicons:arrow-left" class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </NuxtLink>
        <NuxtLink 
          v-else-if="collection === 'projects'" 
          to="/projects" 
          class="group flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-green-500 transition-all duration-300 uppercase tracking-widest"
        >
          <Icon name="heroicons:arrow-left" class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </NuxtLink>
      </div>

      <article class="prose dark:prose-invert max-w-none text-lg">
        <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 font-display">{{ page.title }}</h1>
        <p class="text-xl text-muted-foreground/80 mb-8">{{ page.description }}</p>
        
        <!-- Dynamic Table of Contents (Blog only) -->
        <BlogTableOfContents v-if="collection === 'blog' && page.body?.toc?.links" :links="page.body.toc.links" />
        
        <ContentRenderer :value="page" />
      </article>
    </div>
    <div v-else>
      <h1 class="text-3xl font-bold">Document not found</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

// Nuxt Content v3: query the collection based on the route path prefix (e.g., 'blog')
const collection = route.path.split('/')[1] as any

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection(collection).path(route.path).first()
})
</script>

<script lang="ts">
export default defineNuxtComponent({
  async setup() {
    definePageMeta({
      validate: async (route) => {
        // Exclude listing pages that have their own index.vue
        const regex = /^\/(blog|projects|resume)$/
        return !regex.test(route.path)
      }
    })
  }
})
</script>

<style>
/* 
  Emergency Typography Restoration 
  Ensures that blog content remains readable and styled even if the prose plugin is behaving unexpectedly.
*/
.prose {
  @apply text-foreground font-sans leading-relaxed;
}

.prose h1 {
  @apply text-4xl font-extrabold tracking-tight lg:text-5xl mb-8 mt-12 font-display;
}

.prose h2 {
  @apply text-2xl font-bold tracking-tight mt-12 mb-6 border-b border-border pb-2 font-display;
}

.prose h3 {
  @apply text-xl font-bold tracking-tight mt-8 mb-4 font-display;
}

.prose p {
  @apply leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground/90;
}

.prose ul {
  @apply list-disc list-outside my-6 ml-6 space-y-2;
}

.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  @apply no-underline border-none;
}

/* Base link behavior */
.prose a {
  @apply no-underline transition-all duration-300;
}

.prose li {
  @apply pl-2;
}

.prose strong {
  @apply font-bold text-foreground;
}

.prose blockquote {
  @apply relative my-16 px-0;
  border: none;
  background: none;
}

.prose code {
  @apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-primary;
}

.prose pre {
  @apply mb-4 mt-6 overflow-x-auto rounded-xl border border-border bg-black/50 backdrop-blur-sm p-4 shadow-xl;
}

.prose pre code {
  @apply bg-transparent p-0 text-green-400 font-normal text-sm block;
}

.prose hr {
  @apply my-12 border-border;
}

/* Fix for the "Dead Links" in References */
.prose li :deep(a) {
  @apply text-primary/80 hover:text-primary transition-all no-underline;
}

/* 
  Bulletproof Reference Icons 
  Using CSS markers to bypass the Nuxt Content component parsing bug 
*/
.prose .references-list li {
  @apply relative pl-8 list-none;
}

.prose .references-list li::before {
  content: "";
  @apply absolute left-0 top-[0.6em] w-4 h-4 bg-green-500/30;
  mask: url("https://api.iconify.design/ph:link-bold.svg") no-repeat center;
  mask-size: contain;
  -webkit-mask: url("https://api.iconify.design/ph:link-bold.svg") no-repeat center;
  -webkit-mask-size: contain;
}
</style>
