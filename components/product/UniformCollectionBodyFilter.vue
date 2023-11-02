<script setup lang="ts">
const optionsFilter = ref({
  ["Thương hiệu"]: ["Khác", "Bangladesh", "Martens", "Fashion", "Sara"],
  ["Loại"]: ["Khác", "Áo khoác", "Áo sơ mi kiểu nữ", "Áo kiểu nữ"],
  ["Khoảng giá"]: [
    "Tất cả",
    "Nhỏ hơn 500,000₫",
    "Từ 500,000₫ - 1,000,000₫",
    "Từ 1,000,000₫ - 1,500,000₫",
    "Từ 1,500,000₫ - 2,000,000₫",
    "Từ 2,000,000₫ - 2,500,000₫",
    "Lớn hơn 2,500,000₫",
  ],
  ["Chất liệu"]: ["Cotton", "Len", "Lông cừu", "Kaki"],
  ["Kích cỡ"]: ["XS", "S", "M", "L", "XL ", "XXL"],
  [" Kích cỡ"]: ["Basic", "Slimfit", "Cổ tàu ", "Thể thao"],
  ["Màu sắc"]: ["Hồng", "Vàng", "Xanh", "Đỏ", "Tím", "Đen", "Xanh lá cây"],
});

const featuredProducts = ref({
  "Sản phẩm": [
    {
      img: "/img/product-featured_product_1.jpg",
      title: "Áo khoác da Faux Shearling Jacket",
      currentPrice: "1,750,000₫",
      oldPrice: "3,400,000₫",
    },
    {
      img: "/img/product-featured_product_1.jpg",
      title: "Áo khoác da Faux Shearling Jacket",
      currentPrice: "1,750,000₫",
      oldPrice: "3,400,000₫",
    },
    {
      img: "/img/product-featured_product_1.jpg",
      title: "Áo khoác da Faux Shearling Jacket",
      currentPrice: "1,750,000₫",
      oldPrice: "3,400,000₫",
    },
  ],
});
</script>

<template>
  <div id="filter" class="row">
    <div
      class="col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 accordion-card mb-5"
    >
      <div class="accordion-title">
        <h5 class="text-left text-white text-uppercase m-0">Tìm theo</h5>
      </div>

      <div class="accordion" id="accordion-uniform-filter">
        <div
          class="accordion-item"
          v-for="(items, title, index) in optionsFilter"
          :key="title"
        >
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#accordion-uniform-filter-${index}`"
              aria-expanded="false"
              :aria-controls="`accordion-uniform-filter-${index}`"
            >
              {{ title }}
            </button>
          </h2>
          <div
            :id="`accordion-uniform-filter-${index}`"
            class="accordion-collapse collapse"
            data-bs-parent="#accordion-uniform-filter"
          >
            <div class="accordion-body">
              <ul class="m-0 p-0">
                <li class="m-0 mb-3 p-0" v-for="text in items" :key="text">
                  <label class="m-0 p-0">
                    <input class="mx-1" type="checkbox" :value="text" />
                    <span class="mx-1">{{ text }}</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 accordion-card mb-5"
    >
      <div class="accordion-title">
        <h5 class="text-left text-white text-uppercase m-0">
          Sản phẩm nỗi bật
        </h5>
      </div>

      <div class="accordion" id="accordion-featured-product">
        <div
          class="accordion-item"
          v-for="(items, title, index) in featuredProducts"
          :key="title"
        >
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#accordion-featured-product-${index}`"
              aria-expanded="false"
              :aria-controls="`accordion-featured-product-${index}`"
            >
              {{ title }}
            </button>
          </h2>
          <div
            :id="`accordion-featured-product-${index}`"
            class="accordion-collapse collapse"
            data-bs-parent="#accordion-featured-product"
          >
            <div class="accordion-body">
              <ul class="m-0 p-0">
                <li
                  class="m-0 mb-3 p-0"
                  v-for="product in items"
                  :key="product.title"
                >
                  <div class="row">
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                      <div class="image d-flex justify-content-center">
                        <img
                          :src="product.img"
                          class="img-fluid"
                          alt="product image"
                        />
                      </div>
                    </div>
                    <div
                      class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                      style="font-size: 14px"
                    >
                      <div class="fw-bold text-center title">
                        {{ product.title }}
                      </div>
                      <div
                        class="d-flex flex-row flex-wrap gap-2 text-center price"
                      >
                        <span
                          class="fw-bold current-price"
                          style="color: #d30000"
                        >
                          {{ product.currentPrice }}
                        </span>
                        <span class="fw-bold old-price" style="color: #999"
                          ><s>{{ product.oldPrice }}</s></span
                        >
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#filter {
  .accordion-button {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .accordion-button::after {
    transition: all 0.5s;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-plus' viewBox='0 0 16 16'%3E%3Cpath d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'/%3E%3C/svg%3E");
  }

  .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-dash' viewBox='0 0 16 16'%3E%3Cpath d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/%3E%3C/svg%3E");
  }

  .accordion-title {
    font-size: 18px;
    font-weight: 700;

    padding: 10px 15px;
    background: #000000;
    border: 1px solid #000000;
    border-bottom: 0px;
  }

  .accordion-body {
    ul li {
      list-style: none;

      label {
        cursor: pointer;
        font-size: 14px;

        input {
          width: 16px;
          height: 16px;
          background: none;
          border: 1px solid #dedede;
          display: inline-block;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
