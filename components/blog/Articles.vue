<script setup lang="ts">
const articles = ref([
  {
    img: "/img/blog_1.jpg",
    title: "MẠNH MẼ ĐẦY NAM TÍNH VỚI THIẾT KẾ MỚI NHẤT CỦA D&G",
    date: "07/04/17",
    author: "Suplo Fashion",
    comment: 0,
    desc: "Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng hồ cũng vậy. Nhưng vẫn có những thương hiệu đồng hồ giữ giá lâu nằm ngoài quy tắc này, không những vậy, nếu bạn biết cách mua thì giá trị của đồng hồ không giảm mà còn tă...",
    tag: ["2017", "Thời trang ", "Đồng hồ"],
  },
  {
    img: "/img/blog_2.jpg",
    title: "CỰC CHẤT VỚI BỘ SƯU TẬP MÙA HÈ CỦA ARMANI",
    date: "07/04/17",
    author: " Suplo Fashion",
    comment: 1,
    desc: "Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng hồ cũng vậy. Nhưng vẫn có những thương hiệu đồng hồ giữ giá lâu nằm ngoài quy tắc này, không những vậy, nếu bạn biết cách mua thì giá trị của đồng hồ không giảm mà còn tă...",
    tag: [],
  },
  {
    img: "/img/blog_3.jpg",
    title: "MẠNH MẼ VỚI TRANG PHỤC NAM MÙA HÈ CỦA SANTIAGO",
    date: "07/04/17",
    author: " Suplo Fashion",
    comment: 1,
    desc: "Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng hồ cũng vậy. Nhưng vẫn có những thương hiệu đồng hồ giữ giá lâu nằm ngoài quy tắc này, không những vậy, nếu bạn biết cách mua thì giá trị của đồng hồ không giảm mà còn tă...",
    tag: [],
  },
  {
    img: "/img/blog_4.jpg",
    title: "CHUẨN MỰC VEST NAM",
    date: "07/04/17",
    author: " Suplo Fashion",
    comment: 1,
    desc: "Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng hồ cũng vậy. Nhưng vẫn có những thương hiệu đồng hồ giữ giá lâu nằm ngoài quy tắc này, không những vậy, nếu bạn biết cách mua thì giá trị của đồng hồ không giảm mà còn tă...",
    tag: ["2017", "Thời trang ", "Đồng hồ"],
  },
  {
    img: "/img/blog_5.jpg",
    title: "KHỎE KHOẮN VỚI TRANG PHỤC NAM MÙA HÈ CỦA H&M",
    date: "07/04/17",
    author: " Suplo Fashion",
    comment: 1,
    desc: "Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng hồ cũng vậy. Nhưng vẫn có những thương hiệu đồng hồ giữ giá lâu nằm ngoài quy tắc này, không những vậy, nếu bạn biết cách mua thì giá trị của đồng hồ không giảm mà còn tă...",
    tag: [],
  },
  {
    img: "/img/blog_6.jpg",
    title: '4 "CẶP ĐÔI" TRANG PHỤC CHO CHÀNG PHONG CÁCH NGÀY HÈ',
    date: "07/04/17",
    author: " Suplo Fashion",
    comment: 1,
    desc: "Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng hồ cũng vậy. Nhưng vẫn có những thương hiệu đồng hồ giữ giá lâu nằm ngoài quy tắc này, không những vậy, nếu bạn biết cách mua thì giá trị của đồng hồ không giảm mà còn tă...",
    tag: ["2017", "Thời trang ", "Đồng hồ"],
  },
]);
</script>

<template>
  <section id="blog-articles">
    <article
      class="row mb-4 blog-item"
      v-for="article in articles"
      :key="article.title"
    >
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div class="d-flex justify-content-center">
          <img
            :src="article.img"
            :alt="article.title"
            class="blog-image w-100 img-fluid mb-2"
          />
        </div>
      </div>

      <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 w-sm-30 m-auto">
        <div class="fw-bold fs-6 title">
          {{ article.title }}
        </div>
        <div class="d-flex gap-4 mt-2 overview">
          <div class="date">
            <font-awesome-icon icon="calendar-days" />
            <span>{{ " " }} {{ article.date }}</span>
          </div>
          <div class="author">
            <font-awesome-icon icon="user" />
            <span>{{ " " }}{{ article.author }}</span>
          </div>
          <div class="comment">
            <font-awesome-icon icon="comment-dots" />
            {{ " " }}{{ article.comment }}
          </div>
        </div>
        <div class="mt-2 description">
          {{ article.desc }}
        </div>

        <div
          class="mt-2 d-flex align-items-center gap-1 tag"
          v-if="article.tag.length"
        >
          <font-awesome-icon icon="tag" />
          <span class="ms-1 me-2" v-for="text in article.tag" :key="text"
            >{{ " " }}{{ text }}</span
          >
        </div>

        <div class="d-flex align-items-center gap-1 mt-2 view-more">
          <span>Xem thêm</span>
          <font-awesome-icon style="font-size: 16px" icon="arrow-right-long" />
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
#blog-articles {
  font-size: 14px;
}
</style>
