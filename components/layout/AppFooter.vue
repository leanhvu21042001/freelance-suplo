<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <footer id="app-footer">
    <div class="footer-content">
      <div class="ft-bg-overlay"></div>

      <div class="container py-5">
        <div class="row">
          <div
            class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4"
          >
            <div class="footer-nav">
              <div class="title fw-bold text-uppercase mb-2">Về chúng tôi</div>
              <ul>
                <li>Suplo Fashion</li>
                <li>Triết lý kinh doanh</li>
                <li>Truyền thông sự kiện</li>
                <li>Hoạt động xã hội</li>
                <li>Liên kết & hợp tác</li>
              </ul>
            </div>
          </div>
          <div
            class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4"
          >
            <div class="footer-nav">
              <div class="title fw-bold text-uppercase mb-2">TIN TỨC</div>
              <ul>
                <li>Review sản phẩm</li>
                <li>Tin tức thời trang</li>
                <li>Thương hiệu nổi tiếng</li>
                <li>Đánh giá của khách hàng</li>
                <li>Lịch sử thương hiệu</li>
              </ul>
            </div>
          </div>
          <div
            class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4"
          >
            <div class="footer-nav">
              <div class="title fw-bold text-uppercase mb-2">
                TƯ VẤN SẢN PHẨM
              </div>
              <ul>
                <li>Thời trang công sở</li>
                <li>Đặt may trang phục</li>
                <li>Câu hỏi thường gặp</li>
                <li>Kiến thức cần thiết</li>
                <li>Tại sao nên lựa chọn chúng tôi</li>
              </ul>
            </div>
          </div>
          <div
            class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4"
          >
            <div class="footer-nav">
              <div class="title fw-bold text-uppercase mb-2">HƯỚNG DẪN</div>
              <ul>
                <li>Hướng dẫn mua hàng</li>
                <li>Chính sách ưu đãi thẻ VIP</li>
                <li>Chính sách bảo hành</li>
                <li>Hướng dẫn sử dụng</li>
                <li>Hướng dẫn thanh toán</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div class="footer-nav">
              <div class="title fw-bold text-uppercase mb-2">
                THÔNG TIN LIÊN HỆ
              </div>
              <ul>
                <li>
                  <font-awesome-icon icon="house" /> Số 1 Lương Yên, Q.Hai Bà
                  Trưng, Hà Nội
                </li>
                <li>
                  <font-awesome-icon icon="phone" /> 0934 323 882 / 0934 323 882
                </li>
                <li><font-awesome-icon icon="envelope" /> support@suplo.vn</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div class="footer-nav">
              <div class="title fw-bold text-uppercase mb-2">
                ĐĂNG KÝ NHẬN TIN
              </div>

              <ul>
                <li>Tin khuyến mãi / Tin thương hiệu</li>
              </ul>

              <form @submit.prevent="">
                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control rounded-0 p-2"
                    placeholder="Nhập email của bạn"
                    aria-label="email"
                  />
                  <span
                    class="input-group-text rounded-0 p-2 px-3 bg-black border-black"
                    ><font-awesome-icon
                      style="font-size: 18px; color: #fff"
                      icon="paper-plane"
                  /></span>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div class="footer-nav">
              <div class="title fw-bold text-uppercase mb-2">
                KẾT NỐI VỚI CHÚNG TÔI
              </div>
              <ul>
                <li>Mạng xã hội</li>
              </ul>

              <button class="btn border text-white rounded-0 my-2 mx-1">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </button>
              <button class="btn border text-white rounded-0 my-2 mx-1">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </button>
              <button class="btn border text-white rounded-0 my-2 mx-1">
                <font-awesome-icon icon="fa-brands fa-youtube" />
              </button>
              <button class="btn border text-white rounded-0 my-2 mx-1">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </button>
              <button class="btn border text-white rounded-0 my-2 mx-1">
                <font-awesome-icon icon="fa-brands fa-google-plus" />
              </button>
            </div>
          </div>
          <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div class="footer-nav">
              <div class="title fw-bold text-uppercase mb-2">CHỨNG NHẬN</div>
              <img src="~/assets/img/footer_payment_logo_1.png" alt="footer-payment-logo">
              <img src="~/assets/img/footer_payment_logo_2.png" alt="footer-payment-logo">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright">
      <div
        style="font-size: 14px"
        class="bg-black text-white-50 text-center p-3"
      >
        Copyrights © 2017 by Suplo. Powered by Haravan
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
#app-footer {
  .footer-content {
    padding: 50px 0;
    background-image: url("~/assets/img/footer_bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    .ft-bg-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.6);
    }

    .footer-nav {
      position: relative;
      z-index: 2;
      color: #ffffff;

      .title {
        font-size: 20px;
      }

      ul {
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
