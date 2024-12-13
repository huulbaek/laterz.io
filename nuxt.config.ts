export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  build: {
    transpile: ['@heroicons/vue'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  },

  compatibilityDate: '2024-12-13',
})