// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nhan Kiet To - Staff AI & Data Engineer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Staff AI & Data Engineer at Sportsbet. Architecting production-scale MCP ecosystems, real-time data pipelines, and autonomous agent systems. Technical leadership in AI/ML infrastructure.'
        },
        { name: 'author', content: 'Nhan Kiet To' },
        { name: 'keywords', content: 'Staff Engineer, AI Architect, Data Engineering, MCP, Model Context Protocol, AWS, Kafka, Python, Machine Learning, Multi-Agent Systems, Technical Leadership, Real-time Pipelines' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nhankiet.github.io/' },
        { property: 'og:title', content: 'Nhan Kiet To - Staff AI & Data Engineer' },
        {
          property: 'og:description',
          content: 'Staff AI & Data Engineer architecting production-scale MCP ecosystems and autonomous agent systems at Sportsbet.'
        },
        { property: 'og:site_name', content: 'Nhan Kiet To - Staff Engineer Portfolio' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://nhankiet.github.io/' },
        { name: 'twitter:title', content: 'Nhan Kiet To - Staff AI & Data Engineer' },
        {
          name: 'twitter:description',
          content: 'Staff AI & Data Engineer architecting production-scale MCP ecosystems and autonomous agent systems.'
        },

        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        { rel: 'canonical', href: 'https://nhankiet.github.io/' }
      ]
    }
  },
  nitro: {
    preset: 'github_pages'
  },
  devServer: {
    port: 4000
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  colorMode: {
    classSuffix: ''
  },
  // extends: '@nuxt-themes/docus',
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  content: {
    documentDriven: false,
    sources: {
      content: {
        driver: 'fs',
        base: 'contents'
      }
    }
  },
  compatibilityDate: '2024-07-03',
})