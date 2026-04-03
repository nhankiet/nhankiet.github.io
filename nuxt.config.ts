import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
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
    prefix: 'Ui',
    componentDir: './components/ui'
  },

  // Color mode configuration
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },

  // Tailwind configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
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
        'lucide-vue-next',
        'clsx',
        'tailwind-merge',
        'radix-vue',
        'class-variance-authority'
      ]
    }
  }
});