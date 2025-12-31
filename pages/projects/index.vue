<template>
  <div class="container py-10">
    <div class="mb-8">
      <h1 class="text-3xl font-bold tracking-tight">Projects</h1>
      <p class="text-muted-foreground">Showcase of my work.</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <SpotlightCard 
        v-for="project in projects" 
        :key="project._path"
        class="flex flex-col h-full"
      >
        <CardHeader>
           <CardTitle class="leading-normal text-green-500/90 transition-colors duration-300 text-[1.55rem] font-bold">{{ project.title }}</CardTitle>
        </CardHeader>
        
        <CardContent class="flex-grow">
          <p class="text-muted-foreground group-hover:text-foreground transition-colors duration-300 line-clamp-3 text-lg leading-relaxed">{{ project.description }}</p>
        </CardContent>
        
        <CardFooter class="pt-0 pb-10 flex justify-center">
            <OrganicGasButton as-child class="rounded-full px-10 py-3 h-auto text-sm font-bold shadow-[0_0_25px_rgba(22,163,74,0.3)]">
              <NuxtLink :to="project._path">
                <span class="tracking-tight">View Project</span>
              </NuxtLink>
            </OrganicGasButton>
        </CardFooter>
      </SpotlightCard>
    </div>
  </div>
</template>

<script setup lang="ts">


const { data: projects } = await useAsyncData('projects', () => queryContent('/projects').sort({ date: -1 }).find())

const formatDate = (dateString: string | Date | undefined) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  
  const time = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date)

  const datePart = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: '2-digit'
  }).format(date).replace(',', '')

  return `${time} ${datePart}`
}

definePageMeta({
  layout: 'default'
})
</script>
