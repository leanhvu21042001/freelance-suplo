<template>
  <div id="home-blog">
    <div class="container py-5">
      <div class="section-head">
        <h2 class="text-uppercase text-center fw-bold fs-4">TIN TỨC</h2>
      </div>

      <div class="section-body mt-4">
        <Swiper
          :slides-per-view="4"
          :navigation="true"
          :spaceBetween="30"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :breakpoints="{
            '1': {
              slidesPerView: 1,
            },
            '320': {
              slidesPerView: 1,
            },
            '640': {
              slidesPerView: 2,
            },
            '768': {
              slidesPerView: 2,
            },
            '1024': {
              slidesPerView: 4,
            },
            '1440': {
              slidesPerView: 4,
            },
          }"
          class="blog-swiper"
        >
          <SwiperSlide
            ><div class="blog-item">
              <img
                src="~/assets/img/blog_1.jpg"
                alt="blog-image"
                class="blog-image img-fluid"
              />

              <div class="title fw-bold mt-1">
                Mạnh mẽ đầy nam tính với thiết kế mới nhất của D&G
              </div>
              <div class="d-flex justify-content-between mt-1 overview">
                <div class="date">
                  <font-awesome-icon icon="calendar-days" /> 07/04/17
                </div>
                <div class="author">
                  <font-awesome-icon icon="user" /> Suplo Fashion
                </div>
                <div class="comment">
                  <font-awesome-icon icon="comment-dots" /> 0
                </div>
              </div>
              <div class="mt-1 description">
                Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu
                thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng
                ...
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide
            ><div class="blog-item">
              <img
                src="~/assets/img/blog_2.jpg"
                alt="blog-image"
                class="blog-image img-fluid"
              />
              <div class="title fw-bold mt-1">
                Mạnh mẽ đầy nam tính với thiết kế mới nhất của D&G
              </div>
              <div class="d-flex justify-content-between mt-1 overview">
                <div class="date">
                  <font-awesome-icon icon="calendar-days" /> 07/04/17
                </div>
                <div class="author">
                  <font-awesome-icon icon="user" /> Suplo Fashion
                </div>
                <div class="comment">
                  <font-awesome-icon icon="comment-dots" /> 0
                </div>
              </div>
              <div class="mt-1 description">
                Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu
                thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng
                ...
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide
            ><div class="blog-item">
              <img
                src="~/assets/img/blog_3.jpg"
                alt="blog-image"
                class="blog-image img-fluid"
              />
              <div class="title fw-bold mt-1">
                Mạnh mẽ đầy nam tính với thiết kế mới nhất của D&G
              </div>
              <div class="d-flex justify-content-between mt-1 overview">
                <div class="date">
                  <font-awesome-icon icon="calendar-days" /> 07/04/17
                </div>
                <div class="author">
                  <font-awesome-icon icon="user" /> Suplo Fashion
                </div>
                <div class="comment">
                  <font-awesome-icon icon="comment-dots" /> 0
                </div>
              </div>
              <div class="mt-1 description">
                Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu
                thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng
                ...
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide
            ><div class="blog-item">
              <img
                src="~/assets/img/blog_4.jpg"
                alt="blog-image"
                class="blog-image img-fluid"
              />
              <div class="title fw-bold mt-1">
                Mạnh mẽ đầy nam tính với thiết kế mới nhất của D&G
              </div>
              <div class="d-flex justify-content-between mt-1 overview">
                <div class="date">
                  <font-awesome-icon icon="calendar-days" /> 07/04/17
                </div>
                <div class="author">
                  <font-awesome-icon icon="user" /> Suplo Fashion
                </div>
                <div class="comment">
                  <font-awesome-icon icon="comment-dots" /> 0
                </div>
              </div>
              <div class="mt-1 description">
                Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu
                thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng
                ...
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide
            ><div class="blog-item">
              <img
                src="~/assets/img/blog_5.jpg"
                alt="blog-image"
                class="blog-image img-fluid"
              />
              <div class="title fw-bold mt-1">
                Mạnh mẽ đầy nam tính với thiết kế mới nhất của D&G
              </div>
              <div class="d-flex justify-content-between mt-1 overview">
                <div class="date">
                  <font-awesome-icon icon="calendar-days" /> 07/04/17
                </div>
                <div class="author">
                  <font-awesome-icon icon="user" /> Suplo Fashion
                </div>
                <div class="comment">
                  <font-awesome-icon icon="comment-dots" /> 0
                </div>
              </div>
              <div class="mt-1 description">
                Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu
                thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng
                ...
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide
            ><div class="blog-item">
              <img
                src="~/assets/img/blog_6.jpg"
                alt="blog-image"
                class="blog-image img-fluid"
              />
              <div class="title fw-bold mt-1">
                Mạnh mẽ đầy nam tính với thiết kế mới nhất của D&G
              </div>
              <div class="d-flex justify-content-between mt-1 overview">
                <div class="date">
                  <font-awesome-icon icon="calendar-days" /> 07/04/17
                </div>
                <div class="author">
                  <font-awesome-icon icon="user" /> Suplo Fashion
                </div>
                <div class="comment">
                  <font-awesome-icon icon="comment-dots" /> 0
                </div>
              </div>
              <div class="mt-1 description">
                Rolex và Patek Philippe đều được những nhà sưu tập đồng hồ yêu
                thíchHàng đã qua tay thì dùng ít dùng nhiều ắt sẽ mất giá, đồng
                ...
              </div>
            </div></SwiperSlide
          >

          <SwiperControls />
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#home-blog {
  .section-head {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
      margin: auto;
      width: 100px;
      height: 1px;
      background-color: #cccccc;
      display: inline-block;
    }
  }

  .section-body {
    /* swiper swiper-initialized swiper-horizontal blog-swiper */
    .swiper.swiper-initialized.blog-swiper {
      .swiper-button-prev {
        &::after {
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
        }

        background-color: #000;
        opacity: 0.5;
      }
      .swiper-button-next {
        &::after {
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
        }
        background-color: #000;
        opacity: 0.5;
      }
    }

    .blog-item {
      position: relative;
      overflow: hidden;
      font-size: 14px;

      .description {
        text-align: justify;
      }

      .blog-image {
        width: 100%;
        transition: all 0.5s ease;
      }

      &:hover {
        cursor: pointer;

        .blog-name {
          opacity: 1;
          transform: translateX(-50%) scale(1);
          transition: all 0.5s ease;
        }
        .blog-image {
          transition: all 0.5s ease;
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
