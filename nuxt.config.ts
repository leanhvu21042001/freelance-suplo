// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-swiper"],
  css: [
    "~/assets/scss/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});
