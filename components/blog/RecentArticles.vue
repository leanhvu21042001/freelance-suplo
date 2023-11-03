<script setup lang="ts">
const articles = ref([
  {
    img: "/img/blog_1.jpg",
    title: "Mạnh mẽ đầy nam tính với thiết kế mới nhất...",
    date: "07/04/17",
  },
  {
    img: "/img/blog_2.jpg",
    title: "Cực chất với bộ sưu tập mùa hè của Armani",
    date: "07/04/17",
  },
  {
    img: "/img/blog_3.jpg",
    title: "Mạnh mẽ với trang phục nam mùa hè của Santiago",
    date: "07/04/17",
  },
  {
    img: "/img/blog_4.jpg",
    title: "Chuẩn mực vest nam",
    date: "07/04/17",
  },
  {
    img: "/img/blog_5.jpg",
    title: "Khỏe khoắn với trang phục nam mùa hè của H&M",
    date: "07/04/17",
  },
  {
    img: "/img/blog_6.jpg",
  },
  {
    img: "/img/blog_5.jpg",
  },
]);
</script>

<template>
  <section id="recent-articles" class="mb-4">
    <h3 class="title fs-5 fw-bold text-uppercase border-bottom pb-2">
      BÀI VIẾT GẦN ĐÂY
    </h3>

    <article
      :class="`row ${
        !article.title && !article.date ? 'my-4' : 'mb-2'
      } blog-item`"
      v-for="article in articles"
      :key="article.title"
    >
      <img
        v-show="!article.title && !article.date"
        :src="article.img"
        :alt="article.title"
        class="blog-image img-fluid"
      />

      <div v-show="article.title && article.date" class="col-5">
        <img
          :src="article.img"
          :alt="article.title"
          class="blog-image img-fluid"
        />
      </div>

      <div v-show="article.title && article.date" class="col-7">
        <div class="fw-bold title">
          {{ article.title }}
        </div>
        <div class="d-flex gap-4 mt-2 overview">
          <div class="date">
            <font-awesome-icon icon="calendar-days" />
            <span>{{ " " }} {{ article.date }}</span>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
#recent-articles {
  font-size: 14px;
}
</style>
