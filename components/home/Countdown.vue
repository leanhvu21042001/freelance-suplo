<template>
  <div id="home-countdown">
    <div class="parallax">
      <div class="container py-5">
        <div class="parallax-text">
          <div class="fw-bold text-white parallax-title">SUPLO FASHION</div>
          <p class="fs-4 text-white parallax-slogan">
            Thời trang - Phong cách - Cá tính
          </p>
          <a
            class="fs-6 rounded-0 text-decoration-none text-white parallax-link"
            href="#!"
            >Tìm cửa hàng gần nhất</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home-countdown {
  .parallax {
    background-image: url("~/assets/img/home-parallax-bg.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 350px;

    display: grid;
    place-content: center;

    .parallax-text {
      text-align: center;

      .parallax-title {
        font-size: 48px;
      }
      .parallax-link {
        border: 3px solid #fff;
        padding: 10px 20px;
        transition: all 0.3s ease;

        &:hover {
          background-color: #000000;
        }
      }
    }
  }
}
</style>
