<script setup lang="ts">
const props = defineProps(["title"]);
const route = useRoute();
</script>

<template>
  <div
    id="head-sorter"
    class="d-flex justify-content-between align-items-center section-head"
  >
    <h2 class="text-uppercase fw-bold fs-4">{{ title }}</h2>

    <div class="d-flex justify-content-between align-items-center sort-by">
      <label for="sort-by" class="w-50">Sắp xếp</label>
      <select class="form-select rounded-0" id="sort-by" aria-label="Sắp xếp">
        <option value="manual">Tùy chọn</option>
        <option value="best-selling">Sản phẩm bán chạy</option>
        <option value="title-ascending">Theo bảng chữ cái từ A-Z</option>
        <option value="title-descending">Theo bảng chữ cái từ Z-A</option>
        <option value="price-ascending">Giá từ thấp tới cao</option>
        <option value="price-descending">Giá từ cao tới thấp</option>
        <option value="created-descending">Mới nhất</option>
        <option value="created-ascending">Cũ nhất</option>
      </select>
    </div>
  </div>
</template>
