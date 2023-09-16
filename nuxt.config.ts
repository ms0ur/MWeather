// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@nuxtjs/device",
    "nuxt-lucide-icons",
    '@nuxtjs/i18n',
    "@pinia/nuxt",
    'nuxt-mongoose',
    "@nuxtjs/color-mode"
  ],
  mongoose: {
    uri: 'mongodb://localhost:27017/mweather',
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})