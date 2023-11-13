<script setup lang="ts">
const title = "Khuyến mãi";
</script>

<template>
  <div id="sale-of-page-content">
    <BaseBreadcrumb :title="title" />

    <div class="container py-5">
      <div class="row">
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 order-xs-1 order-sm-1 order-md-1 order-lg-2 order-xl-2 mb-5"
        >
          <ProductUniformHeadSorter :title="title" />
          <ProductUniformCollectionBody />
        </div>

        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 order-xs-1 order-sm-1 order-md-1 order-lg-1 order-xl-1"
        >
          <ProductUniformCollectionBodyFilter />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* #product-page-content {
} */
</style>
