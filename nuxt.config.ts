// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }]
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