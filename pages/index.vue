<template>
  <ParallaxHero
    name="Nhan Kiet To"
    tagline="Staff AI & Data Engineer"
    cover-image="/images/hero-bg.png"
  >
    <div class="container py-10 space-y-16">

    <!-- Recent Projects -->
    <section class="space-y-8 animate-fade-in-up" style="animation-delay: 200ms;">
      <div class="flex justify-between items-end border-b border-white/5 pb-4">
        <div>
          <h2 class="text-3xl font-bold tracking-tight">Recent Work</h2>
          <p class="text-muted-foreground mt-1">Selected highlights from my latest projects.</p>
        </div>
        <Button variant="ghost" class="group" as-child>
          <NuxtLink to="/projects" class="flex items-center gap-2">
            View all 
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </NuxtLink>
        </Button>
      </div>
      
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SpotlightCard v-for="project in recentProjects" :key="project._path" class="flex flex-col h-full">
          <CardHeader>
            <CardTitle class="text-[1.55rem] font-bold text-green-500/90 transition-colors duration-300">{{ project.title }}</CardTitle>
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

        <!-- Coming Soon Card -->
        <div class="relative group rounded-xl border-dashed border-[3px] border-white/10 flex flex-col items-center justify-center p-6 text-center hover:border-green-500/60 hover:bg-green-500/5 transition-all duration-500 cursor-pointer h-full">
           <div class="mb-4 rounded-full bg-green-500/5 p-4 transition-colors">
             <Rocket class="w-10 h-10 text-green-500/50 group-hover:text-green-400" />
           </div>
           <h3 class="font-bold text-xl text-green-500/80 transition-colors">Coming Soon</h3>
           <p class="text-base text-white/40 mt-2">More exciting projects in the works.</p>
        </div>
      </div>
    </section>
    </div>
  </ParallaxHero>
</template>

<script setup lang="ts">
import { Briefcase, FileText, Rocket } from 'lucide-vue-next'

const { data: recentProjects } = await useAsyncData('recent-projects', () => 
  queryContent('/projects')
    .sort({ date: -1 })
    .limit(2)
    .find()
)
</script>
