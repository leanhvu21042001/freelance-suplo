<template>
  <div id="home-collection">
    <div class="container py-5">
      <div class="section-head">
        <h2 class="text-uppercase text-center fw-bold fs-4">Bộ sưu tập</h2>
      </div>

      <div class="section-body mt-4">
        <Swiper
          :slides-per-view="4"
          :navigation="true"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :breakpoints="{
            '1': {
              slidesPerView: 1,
            },
            '320': {
              slidesPerView: 1,
            },
            '640': {
              slidesPerView: 3,
            },
            '768': {
              slidesPerView: 3,
            },
            '1024': {
              slidesPerView: 4,
            },
          }"
          class="collection-swiper"
        >
          <SwiperSlide
            ><div class="collection-item">
              <img
                src="~/assets/img/collection_4.png"
                alt="collection-image"
                class="collection-image img-fluid"
              />
              <div class="collection-name text-center">
                <p class="fs-6 fw-bold text-uppercase my-0">Áo khoác da</p>
                <p class="fs-6">(12 sản phẩm)</p>
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide
            ><div class="collection-item">
              <img
                src="~/assets/img/collection_1.png"
                alt="collection-image"
                class="collection-image img-fluid"
              />
              <div class="collection-name text-center">
                <p class="fs-6 fw-bold text-uppercase my-0">Áo Sơ mi</p>
                <p class="fs-6">(12 sản phẩm)</p>
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide
            ><div class="collection-item">
              <img
                src="~/assets/img/collection_2.png"
                alt="collection-image"
                class="collection-image img-fluid"
              />
              <div class="collection-name text-center">
                <p class="fs-6 fw-bold text-uppercase my-0">
                  Áo khoác Santiago
                </p>
                <p class="fs-6">(12 sản phẩm)</p>
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide
            ><div class="collection-item">
              <img
                src="~/assets/img/collection_3.png"
                alt="collection-image"
                class="collection-image img-fluid"
              />
              <div class="collection-name text-center">
                <p class="fs-6 fw-bold text-uppercase my-0">Áo khoác Jakiro</p>
                <p class="fs-6">(12 sản phẩm)</p>
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide
            ><div class="collection-item">
              <img
                src="~/assets/img/collection_5.png"
                alt="collection-image"
                class="collection-image img-fluid"
              />
              <div class="collection-name text-center">
                <p class="fs-6 fw-bold text-uppercase my-0">Khuyến mãi</p>
                <p class="fs-6">(6 sản phẩm)</p>
              </div>
            </div></SwiperSlide
          >
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperControls />
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#home-collection {
  background-color: #fafafa;

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
    /* swiper swiper-initialized swiper-horizontal collection-swiper */
    .swiper.swiper-initialized.collection-swiper {
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

    .collection-item {
      position: relative;
      overflow: hidden;

      .collection-name {
        position: absolute;

        bottom: 0;
        left: 50%;
        width: 100%;
        transform: translateX(-50%) scale(2);
        padding: 10px 15px;
        min-width: 110px;
        background-color: rgba(255, 255, 255, 0.5);
        opacity: 0;
        transition: all 0.5s ease;
      }

      .collection-image {
        transition: all 0.5s ease;
      }

      &:hover {
        cursor: pointer;

        .collection-name {
          opacity: 1;
          transform: translateX(-50%) scale(1);
          transition: all 0.5s ease;
        }
        .collection-image {
          transition: all 0.5s ease;
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
