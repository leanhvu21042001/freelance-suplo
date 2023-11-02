<script setup lang="ts">
const props = defineProps(["title"]);
const route = useRoute();
</script>

<template>
  <div id="breadcrumb">
    <div class="parallax">
      <div class="parallax-overlay"></div>
      <div class="container py-5">
        <div class="parallax-text">
          <div class="fs-4 text-uppercase fw-bold text-white parallax-title">
            {{ title }}
          </div>

          <div class="text-white breadcrumb-links">
            <NuxtLink
              class="rounded-0 text-decoration-none text-white parallax-link"
              to="/"
              >Trang chủ</NuxtLink
            >
            /
            <NuxtLink
              class="rounded-0 text-decoration-none text-white parallax-link"
              :to="route.path"
              >{{ title }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#breadcrumb {
  .parallax {
    background-image: url("~/assets/img/breadcrumb_bg.png");
    height: 350px;
    padding: 30px 0;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    display: grid;
    place-content: center;

    &-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
    }

    .parallax-text {
      position: relative;
      z-index: 2;
      text-align: center;

      .parallax-title {
      }

      .parallax-link {
        font-size: 14px;

        &:hover {
          color: yellowgreen;
        }
      }
    }
  }
}
</style>
