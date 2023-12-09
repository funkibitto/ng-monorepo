// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  storybook: {
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006,
  },

  modules: ['@nuxtjs/tailwindcss',  '@storybook-vue/nuxt-storybook'],
})
