// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          id: "theme-link",
          rel: "stylesheet",
          href: "/themes/bootstrap4-dark-blue/theme.css",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue", "@nuxtjs/color-mode", "@pinia/nuxt"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {},
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  colorMode: {
    classSuffix: "",
  },
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true },
});
