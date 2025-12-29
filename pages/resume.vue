<template>
  <div class="container py-10 max-w-4xl">
    <!-- Header -->

    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 px-4 animation-fade-in-up">
      <div>
        <h1 class="text-4xl font-bold tracking-tight text-white">Nhan Kiet To</h1>
        <p class="text-xl text-muted-foreground mt-1 font-medium">Senior AI & Data Engineer @ Sportsbet</p>
      </div>
      <div class="flex gap-2">
        <Button variant="outline" size="sm" class="border-white/10 hover:bg-white/5 text-white/70">
          <Download class="w-4 h-4 mr-2" />
          Download PDF
        </Button>
        <Button size="sm" class="bg-green-600 hover:animate-google-gas text-white transition-all duration-700 border-none relative overflow-hidden group/btn px-6 py-2 shadow-[0_0_15px_rgba(22,163,74,0.3)]">
           <NuxtLink to="mailto:hi@nhanto.me" class="relative z-10 flex items-center gap-2 font-bold">
             <Send class="w-4 h-4" />
             Contact Me
           </NuxtLink>
           <!-- Gas Swirl Layer -->
           <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(22,163,74,0.5)_0%,rgba(16,185,129,0.2)_40%,transparent_70%)] opacity-70 group-hover/btn:animate-gas-swirl pointer-events-none" />
           <div class="absolute inset-0 bg-green-700/60 mix-blend-overlay" />
        </Button>
      </div>
    </div>

    <div class="space-y-12 animation-fade-in-up" style="animation-delay: 100ms;">
      <!-- About -->
      <section class="space-y-3 px-4">
        <h2 class="text-2xl font-semibold tracking-tight border-b border-white/5 pb-2 text-white/90">Professional Summary</h2>
        <p class="text-muted-foreground leading-relaxed">
          Pioneering AI Engineer and Data Engineer with a track record of driving enterprise-wide AI adoption and architecting large-scale data systems. 
          Currently leading the development and adoption of Model Context Protocol (MCP) to bridge the gap between AI models and internal enterprise systems. 
          Expert in building high-performance real-time data pipelines (Kafka/Flink) and event-driven architectures. 
          Valedictorian with a Master of IT from UniMelb, combining deep learning foundations with modern full-stack and cloud-native engineering.
        </p>
      </section>

      <!-- Experience -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold tracking-tight border-b border-white/5 pb-2 ml-4 text-white/90 mr-4">Work Experience</h2>
        
        <div class="space-y-6">
          <!-- Multi-Role Card for Sportsbet -->
          <Card class="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.1)] border-[3px] border-white/10 bg-card/50 hover:border-green-500/20 mx-4">
             <div class="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/[0.02] transition-colors duration-500" />
             
            <CardHeader>
              <div class="flex justify-between items-start">
                <div>
                  <CardTitle class="text-[1.55rem] font-bold text-green-500/90">Sportsbet</CardTitle>
                  <CardDescription class="text-lg mt-1 font-mono text-white/50">Senior AI & Data Engineer • 03/2025 - Present</CardDescription>
                </div>
                <span class="text-xs font-mono bg-white/5 border border-white/10 text-white/60 px-2 py-1 rounded">Full-time</span>
              </div>
            </CardHeader>
            <CardContent class="space-y-8">
              <!-- Role 1 -->
              <div class="relative pl-4 border-l border-green-500/30">
                <div class="absolute w-2 h-2 bg-green-500 rounded-full -left-[4.5px] top-2 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="text-xl font-bold text-green-400/90">Senior AI Engineer</h4>
                    <p class="text-base font-mono text-white/50">03/2025 - Present</p>
                  </div>
                </div>
                <ul class="list-disc list-inside space-y-2 text-muted-foreground text-sm group-hover:text-white/80 transition-colors">
                  <li>Cut AI operation costs by $120k+ per annum by developing an internal MCP Atlassian server.</li>
                  <li>Pioneered the development and adoption of Model Context Protocol (MCP) for AI models (GitHub, Slack, Glean, Atlassian).</li>
                </ul>
              </div>

              <!-- Role 2 -->
              <div class="relative pl-4 border-l border-white/10">
                <div class="absolute w-2 h-2 bg-white/20 rounded-full -left-[4.5px] top-2" />
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="text-xl font-bold text-green-400/90">Data Engineer</h4>
                    <p class="text-base font-mono text-white/50">04/2024 - 03/2025</p>
                  </div>
                </div>
                <ul class="list-disc list-inside space-y-2 text-muted-foreground text-sm group-hover:text-white/80 transition-colors">
                  <li>Managed 2 data warehouses (5TB+, 330M files) with PII as source-of-truth master data.</li>
                  <li>Designed and developed 4 real-time Kappa data pipelines (Kafka -> Flink -> Tealium, Braze, Salesforce).</li>
                  <li>Built 2 integrated data platforms as a foundation for future use cases, increasing engineering velocity.</li>
                  <li>Mentored 5 engineers in modern Python and AWS Serverless practices.</li>
                </ul>
              </div>

              <!-- Role 3 -->
              <div class="relative pl-4 border-l border-white/10">
                <div class="absolute w-2 h-2 bg-white/20 rounded-full -left-[4.5px] top-2" />
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="text-xl font-bold text-green-400/90">Junior Data Engineer</h4>
                    <p class="text-base font-mono text-white/50">12/2021 - 04/2024</p>
                  </div>
                </div>
                <ul class="list-disc list-inside space-y-2 text-muted-foreground text-sm group-hover:text-white/80 transition-colors">
                  <li>Built 9 batch event-driven pipelines for 800+ marketing campaigns.</li>
                  <li>Reduced DynamoDB ingestion time by 75% via asynchronous operations.</li>
                  <li>Cut S3 storage costs by 85% using S3 Glacier lifecycle policies.</li>
                  <li>Migrated 18 CI/CD pipelines from Jenkins to GitHub Actions, cutting deploy times by 55%.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <!-- Intellificial -->
          <Card class="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.1)] border-[3px] border-white/10 bg-card/50 hover:border-green-500/20 mx-4">
             <div class="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/[0.02] transition-colors duration-500" />
            <CardHeader>
              <div class="flex justify-between items-start">
                <div>
                  <CardTitle class="text-[1.55rem] font-bold text-green-400">Intellificial</CardTitle>
                  <CardDescription class="text-lg mt-1 font-mono text-white/50">Robotic Process Engineer Intern • 11/2020 - 03/2021</CardDescription>
                </div>
                <span class="text-xs font-mono bg-white/5 border border-white/10 text-white/60 px-2 py-1 rounded">Internship</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul class="list-disc list-inside space-y-2 text-muted-foreground text-sm group-hover:text-white/80 transition-colors">
                <li>Reduced internal process time by 40% with 3 RPA bots (Automation Anywhere, UiPath).</li>
                <li>Increased invoice recognition accuracy by 7% using EasyOCR.</li>
              </ul>
            </CardContent>
          </Card>

          <!-- TMA Solutions -->
          <Card class="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.1)] border-[3px] border-white/10 bg-card/50 hover:border-green-500/20 mx-4">
             <div class="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/[0.02] transition-colors duration-500" />
            <CardHeader>
              <div class="flex justify-between items-start">
                <div>
                  <CardTitle class="text-[1.55rem] font-bold text-green-400">TMA Solutions</CardTitle>
                  <CardDescription class="text-lg mt-1 font-mono text-white/50">Machine Learning Intern • 09/2017 - 06/2018</CardDescription>
                </div>
                <span class="text-xs font-mono bg-white/5 border border-white/10 text-white/60 px-2 py-1 rounded">Internship</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul class="list-disc list-inside space-y-2 text-muted-foreground text-sm group-hover:text-white/80 transition-colors">
                <li>Led a team of 6 to develop a machine learning-powered recommender system.</li>
                <li>Utilized PySpark, scikit-learn, and spaCy for training and data transformation.</li>
                <li>Achieved 73% accuracy through fine-tuning model parameters.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Education -->
       <section class="space-y-6 px-4">
        <h2 class="text-2xl font-semibold tracking-tight border-b border-white/5 pb-2 text-white/90">Education</h2>
        
        <div class="grid gap-6 md:grid-cols-2">
            <Card class="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.1)] border-[3px] border-white/10 bg-card/50 hover:border-green-500/20">
              <div class="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/[0.02] transition-colors duration-500" />
              <CardHeader>
                  <CardTitle class="text-[1.55rem] font-bold text-green-400">Master of Information Technology</CardTitle>
                  <CardDescription class="text-lg font-mono text-white/50">University of Melbourne • 2019 - 2021</CardDescription>
              </CardHeader>
              <CardContent>
                  <p class="text-base text-muted-foreground">Major in AI • Awarded School of Engineering and Foundation Scholarships ($30k total)</p>
              </CardContent>
            </Card>

            <Card class="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.1)] border-[3px] border-white/10 bg-card/50 hover:border-green-500/20">
              <div class="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/[0.02] transition-colors duration-500" />
              <CardHeader>
                  <CardTitle class="text-[1.55rem] font-bold text-green-400">Bachelor of Computing & Info Sciences</CardTitle>
                  <CardDescription class="text-lg font-mono text-white/50">AUT (New Zealand) • 2014 - 2018</CardDescription>
              </CardHeader>
               <CardContent>
                  <p class="text-base text-muted-foreground"><span class="text-green-500 font-semibold">Valedictorian</span> • Summa Cum Laude • GPA: 3.82/4.0</p>
              </CardContent>
            </Card>
        </div>
      </section>

      <!-- Skills -->
      <section class="space-y-6 px-4">
        <h2 class="text-2xl font-semibold tracking-tight border-b border-white/5 pb-2 text-white/90">Technical Ecosystem</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
           <div class="space-y-3">
             <h3 class="font-medium text-green-500/90 flex items-center gap-2">
               <Bot class="w-4 h-4" /> AI & Agents
             </h3>
             <ul class="text-sm text-muted-foreground space-y-2">
               <li class="flex items-center gap-2">Model Context Protocol (MCP)</li>
               <li class="flex items-center gap-2">Multi-Agent Systems</li>
               <li class="flex items-center gap-2">RAG & BedRock</li>
               <li class="flex items-center gap-2">PyTorch & TensorFlow</li>
             </ul>
           </div>
           <div class="space-y-3">
             <h3 class="font-medium text-green-500/90 flex items-center gap-2">
               <Database class="w-4 h-4" /> Data Engineering
             </h3>
             <ul class="text-sm text-muted-foreground space-y-2">
               <li class="flex items-center gap-2">Kafka / Flink / MSK</li>
               <li class="flex items-center gap-2">Spark / Glue / Airflow</li>
               <li class="flex items-center gap-2">Aurora / RDS / DynamoDB</li>
               <li class="flex items-center gap-2">Snowflake / Data Lake</li>
             </ul>
           </div>
           <div class="space-y-3">
             <h3 class="font-medium text-green-500/90 flex items-center gap-2">
               <Cloud class="w-4 h-4" /> AWS Cloud
             </h3>
             <ul class="text-sm text-muted-foreground space-y-2">
               <li class="flex items-center gap-2">Lambda / Fargate / ECS</li>
               <li class="flex items-center gap-2">CDK / CloudFormation</li>
               <li class="flex items-center gap-2">S3 Glacier / SQS / SNS</li>
               <li class="flex items-center gap-2">CloudWatch / Grafana</li>
             </ul>
           </div>
           <div class="space-y-3">
             <h3 class="font-medium text-green-500/90 flex items-center gap-2">
               <Code class="w-4 h-4" /> Development
             </h3>
             <ul class="text-sm text-muted-foreground space-y-2">
               <li class="flex items-center gap-2">Python / TypeScript</li>
               <li class="flex items-center gap-2">Node.js / FastAPI</li>
               <li class="flex items-center gap-2">Git / GitHub Actions</li>
               <li class="flex items-center gap-2">Docker / Serverless</li>
             </ul>
           </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Download, Send, Bot, Database, Cloud, Code } from 'lucide-vue-next'

definePageMeta({
  title: 'Resume'
})
</script>
