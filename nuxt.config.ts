// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['~/styles/global.css'],
  vite: { plugins: [eslintPlugin()] },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || ''
    }
  }
});
