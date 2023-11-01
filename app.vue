<script setup lang="ts">
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

// useHead({
//   title: "FREELANCE - SUPLO",
//   meta: [{ name: "description", content: "Create a freelance page." }],
// });

// useSeoMeta({
//   title: "FREELANCE - SUPLO",
//   ogTitle: "FREELANCE - SUPLO",
//   description: "This is my amazing site, let me tell you all about it.",
//   ogDescription: "This is my amazing site, let me tell you all about it.",
//   ogImage:
//     "https://theme.hstatic.net/1000012173/1001017200/14/favicon.png?v=264",
//   twitterCard: "summary_large_image",
// });
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
