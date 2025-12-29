<template>
  <div class="container py-10 space-y-16">
    <!-- Hero Section -->
    <section class="flex flex-col items-center text-center space-y-6 py-20 animate-fade-in-up">
      <div class="relative">
         <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 opacity-20 blur-xl animate-pulse"></div>
         <h1 class="relative text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Building Digital <br class="hidden sm:block" />
          <span class="text-green-500">Experiences</span>
        </h1>
      </div>
      
      <p class="text-xl text-muted-foreground max-w-[700px] md:text-2xl leading-relaxed">
        Senior AI & Data Engineer at <span class="text-white font-semibold">Sportsbet</span>. Architecting <span class="text-white font-semibold">MCP</span> ecosystems, <span class="text-white font-semibold">Real-time Pipelines</span>, and <span class="text-white font-semibold">Autonomous Agents</span>.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 mt-8">
        <Button size="lg" class="h-12 px-10 text-lg rounded-full bg-green-600 hover:animate-google-gas text-white transition-all duration-700 border-none gap-2 relative overflow-hidden group/btn shadow-[0_0_20px_rgba(22,163,74,0.3)]" as-child>
          <NuxtLink to="/projects">
            <span class="relative z-10 flex items-center gap-2 font-bold tracking-tight"><Briefcase class="w-5 h-5" /> View Projects</span>
            <!-- Gas Swirl Layer -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(22,163,74,0.5)_0%,rgba(16,185,129,0.2)_40%,transparent_70%)] opacity-70 group-hover/btn:animate-gas-swirl pointer-events-none" />
            <div class="absolute inset-0 bg-green-700/60 mix-blend-overlay" />
          </NuxtLink>
        </Button>
        <Button size="lg" class="h-12 px-10 text-lg rounded-full bg-green-600 hover:animate-google-gas text-white transition-all duration-700 border-none gap-2 relative overflow-hidden group/btn shadow-[0_0_20px_rgba(22,163,74,0.3)]" as-child>
          <NuxtLink to="/resume">
             <span class="relative z-10 flex items-center gap-2 font-bold tracking-tight"><FileText class="w-5 h-5" /> View Resume</span>
             <!-- Gas Swirl Layer -->
             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(22,163,74,0.5)_0%,rgba(16,185,129,0.2)_40%,transparent_70%)] opacity-70 group-hover/btn:animate-gas-swirl pointer-events-none" />
             <div class="absolute inset-0 bg-green-700/60 mix-blend-overlay" />
          </NuxtLink>
        </Button>
      </div>
    </section>

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
        <Card v-for="project in recentProjects" :key="project._path" class="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] border-[3px] border-white/10 bg-card hover:border-green-500/30 flex flex-col h-full">
           <!-- Subtle Matrix Background Glow -->
           <div class="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/[0.03] transition-colors duration-500" />
          
          <CardHeader>
            <CardTitle class="text-[1.55rem] font-bold text-green-500/90 transition-colors duration-300">{{ project.title }}</CardTitle>
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
