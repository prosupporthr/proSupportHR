// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@scalar/nuxt',
    'nuxt-file-storage'
  ],

  nitro: {
    experimental: {
      openAPI: false,
    },
  },

  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    HOST: process.env.HOST,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    public: {
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    }
  },

  compatibilityDate: '2025-04-21',
  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        }
      }
    }
  },
  fileStorage: {
    mount: '/home/daniel/Documents/chasescroll/HR-app/server/public/uploads',
  }
})