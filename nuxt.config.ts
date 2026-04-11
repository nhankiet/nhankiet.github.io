import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Outfit:wght@100..900&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap' }
      ]
    }
  },
  
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'shadcn-nuxt',
    '@nuxt/content'
  ],

  // Nuxt 4 Directory Structure
  future: {
    compatibilityVersion: 4,
  },

  // shadcn-nuxt configuration
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },


  // Tailwind configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },

  // Route Rules
  routeRules: {
    '/': { prerender: true }
  },

  // Content v3
  content: {
    // Configured via content.config.ts
  },

  vite: {
    optimizeDeps: {
      include: [
        'clsx',
        'tailwind-merge',
        'radix-vue',
        'class-variance-authority'
      ]
    }
  },

  typescript: {
    tsConfig: {}
  },

  nitro: {
    typescript: {
      tsConfig: {}
    }
  }
});