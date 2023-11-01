<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <footer>
    <nav>
      <ul>
        <li><NuxtLink to="/">Trang chủ</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/product">Sản phẩm</NuxtLink></li>
      </ul>
    </nav>
  </footer>
</template>
