<template>
  <div id="home-slider">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide style="height: auto">
        <img
          class="img-fluid"
          width="100%"
          height="700px"
          src="~/assets/img/slideshow_3.jpg"
          alt="slide show image"
        />
      </SwiperSlide>

      <SwiperSlide style="height: auto">
        <img
          class="img-fluid"
          width="100%"
          height="700px"
          src="~/assets/img/slideshow_4.jpg"
          alt="slide show image"
        />
      </SwiperSlide>

      <SwiperControls />
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
</style>
