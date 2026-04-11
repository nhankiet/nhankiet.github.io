<template>
  <div class="container py-10">
    <div class="mb-8">
      <h1 class="text-3xl font-bold tracking-tight">Blog</h1>
      <p class="text-muted-foreground">Thoughts, tutorials, and insights.</p>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <SpotlightCard 
        v-for="article in articles" 
        :key="article.path"
        class="flex flex-col h-full overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
      >
        <!-- Featured Image -->
        <div v-if="article.image" class="aspect-video w-full overflow-hidden border-b border-border/50">
          <img 
            :src="article.image" 
            :alt="article.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <CardHeader class="space-y-4">
          <div class="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            <div class="flex items-center gap-1.5">
              <Icon name="heroicons:calendar-days" class="w-3.5 h-3.5" />
              <span>{{ formatDate(article.date) }}</span>
            </div>
            <span class="w-1 h-1 rounded-full bg-border"></span>
            <div class="flex items-center gap-1.5">
              <Icon name="heroicons:clock" class="w-3.5 h-3.5" />
              <span>{{ calculateReadingTime(article.body) }} min read</span>
            </div>
          </div>
          <CardTitle class="leading-tight text-foreground transition-colors duration-300 text-xl font-bold">
            <NuxtLink :to="article.path" class="hover:text-primary transition-colors">
              {{ article.title }}
            </NuxtLink>
          </CardTitle>
        </CardHeader>
        
        <CardContent class="flex-grow">
          <p class="text-muted-foreground group-hover:text-foreground transition-colors duration-300 line-clamp-3 text-sm leading-relaxed">
            {{ article.description }}
          </p>
        </CardContent>
        
        <CardFooter class="pt-2 pb-6 flex justify-start px-6">
          <NuxtLink :to="article.path" class="text-xs font-bold text-primary hover:underline flex items-center gap-1 group/link">
            Read article 
            <Icon name="heroicons:arrow-right" class="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
          </NuxtLink>
        </CardFooter>
      </SpotlightCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate, calculateReadingTime } from '~/composables/useFormatting';

const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').order('date', 'DESC').all())

definePageMeta({
  layout: 'default'
})
</script>
