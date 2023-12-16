// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: '/pokedex/',
    head: {
      link: [
        {
          id: "theme-link",
          rel: "stylesheet",
          // href: "/pokedex/themes/bootstrap4-dark-blue/theme.css",
          href: "/pokedex/themes/main.css"
        },
      ],
      script: [
        { src: 'https://unpkg.com/pokeapi-js-wrapper/dist/index.js' } // load script in your static folder
      ]
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
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
  typescript: {
    typeCheck: true
  },
  css: ["~/assets/scss/main.scss"],
  devtools: { enabled: true },
});
