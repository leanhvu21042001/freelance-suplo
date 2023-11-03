<script setup lang="ts">
const categories = ref([
  {
    text: "Xu hướng thu đông",
    count: 7,
  },
  {
    text: "Ngày hội thời trang",
    count: 7,
  },
  {
    text: "Thời trang gió mùa",
    count: 7,
  },
]);
</script>

<template>
  <section id="blog-categories" class="mb-4">
    <h3 class="title fs-5 fw-bold text-uppercase border-bottom pb-2">
      DANH MỤC TIN TỨC
    </h3>
    <article
      class="category-item"
      v-for="category in categories"
      :key="category.text"
    >
      <ul class="list-group">
        <li class="list-group-item border-0 p-0 py-1">
          <a
            class="text-black text-decoration-none d-flex justify-content-between"
            href="#"
          >
            <span>{{ category.text }}</span>
            <span>({{ category.count }})</span>
          </a>
        </li>
      </ul>
    </article>
  </section>
</template>

<style lang="scss" scoped>
#blog-categories {
  font-size: 14px;
}
</style>
