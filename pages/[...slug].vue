<template>
  <div class="container py-10 max-w-3xl">
    <ContentDoc v-slot="{ doc }">
      <div class="mb-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <NuxtLink to="/">Home</NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
             <!-- Determine parent based on path -->
            <BreadcrumbLink as-child v-if="$route.path.startsWith('/blog')">
              <NuxtLink to="/blog">Blog</NuxtLink>
            </BreadcrumbLink>
            <BreadcrumbLink as-child v-else-if="$route.path.startsWith('/projects')">
              <NuxtLink to="/projects">Projects</NuxtLink>
            </BreadcrumbLink>
            <BreadcrumbLink as-child v-else>
               <NuxtLink :to="'/' + $route.path.split('/')[1]">{{ $route.path.split('/')[1] }}</NuxtLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{{ doc.title }}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

      <article class="prose dark:prose-invert max-w-none">
        <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{{ doc.title }}</h1>
        <p class="text-xl text-muted-foreground mb-8">{{ doc.description }}</p>
        <hr class="my-8" />
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
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
/* Basic typography styles if prose plugin is missing */
.prose h2 {
  @apply text-2xl font-semibold tracking-tight mt-10 mb-4;
}
.prose h3 {
  @apply text-xl font-semibold tracking-tight mt-8 mb-4;
}
.prose p {
  @apply leading-7 [&:not(:first-child)]:mt-6;
}
.prose ul {
  @apply list-disc list-inside my-6 ml-6;
}
.prose li {
  @apply mt-2;
}
.prose code {
  @apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold;
}
.prose pre {
  @apply mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4;
}
.prose pre code {
  @apply bg-transparent p-0 text-white font-normal;
}
</style>
