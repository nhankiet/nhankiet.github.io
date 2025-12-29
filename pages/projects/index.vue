<template>
  <div class="container py-10">
    <div class="mb-8">
      <h1 class="text-3xl font-bold tracking-tight">Projects</h1>
      <p class="text-muted-foreground">Showcase of my work.</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card 
        v-for="project in projects" 
        :key="project._path"
        class="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] border-[3px] border-white/10 bg-card hover:border-green-500/30 flex flex-col h-full"
      >
        <!-- Subtle Matrix Background Glow -->
        <div class="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/[0.03] transition-colors duration-500" />
        
        <CardHeader>
           <CardTitle class="leading-normal text-green-500/90 transition-colors duration-300 text-[1.55rem] font-bold">{{ project.title }}</CardTitle>
        </CardHeader>
        
        <CardContent class="flex-grow">
          <p class="text-muted-foreground group-hover:text-foreground transition-colors duration-300 line-clamp-3 text-lg leading-relaxed">{{ project.description }}</p>
        </CardContent>
        
        <CardFooter class="pt-0 pb-10 flex justify-center">
            <Button variant="default" as-child class="rounded-full px-10 py-3 h-auto text-sm font-bold bg-green-600 text-white hover:animate-google-gas transition-all duration-700 border-none relative overflow-hidden group/btn shadow-[0_0_25px_rgba(22,163,74,0.3)]">
              <NuxtLink :to="project._path">
                <span class="relative z-10 tracking-tight">View Project</span>
                <!-- Gas Swirl Layer -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(22,163,74,0.4)_0%,rgba(16,185,129,0.15)_40%,transparent_70%)] opacity-70 group-hover/btn:animate-gas-swirl pointer-events-none" />
                <div class="absolute inset-0 bg-green-700/60 mix-blend-overlay" />
              </NuxtLink>
            </Button>
        </CardFooter>
      </Card>
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
