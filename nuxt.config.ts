// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from 'tailwindcss/colors'

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts", 
    "@nuxt/icon", 
    "@nuxt/image",
    "@nuxt/ui",
  ],
  css: [
    "assets/styles/main.css",
    "assets/styles/components.css"
  ],
  srcDir: "app/",
  ui: {
    theme: {
      colors: [
        'primary',
        'high-accent',
        'low-accent',
        'secondary',
        'neutral'
      ]
    }
  }

});
