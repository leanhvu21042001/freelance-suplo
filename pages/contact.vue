<template>
  <div id="contact-page-content">
    <BaseBreadcrumb title="Liên hệ" />

    <div class="container py-5">
      <div>
        <h1 class="text-uppercase fw-bold fs-4 mb-5">Liên hệ</h1>

        <iframe
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=Cao+đẳng+Công+nghệ+Thủ+Đức,+Võ+Văn+Ngân,+Linh+Chiểu,+Thành+Phố+Thủ+Đức,+Ho+Chi+Minh+City,+Vietnam&amp;key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          style="
            height: 450px;
            width: 100%;
            border: 0px;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            margin: auto;
          "
        ></iframe>

        <div class="row mt-4">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h2 class="fs-5 fw-bold">HỆ THỐNG CỬA HÀNG THỜI TRANG NAM SUPLO</h2>
            <p>Địa Chỉ: Số 1 Lương Yên, Q.Hai Bà Trưng, Hà Nội</p>
            <p>Số điện thoại : 0934 323 882 / 0934 323 882</p>
            <p>Email : support@suplo.vn</p>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <form @submit.prevent="" class="d-flex flex-column gap-2">
              <input
                type="text"
                class="form-control"
                placeholder="Họ tên của bạn"
                aria-label="Họ tên của bạn"
              />
              <input
                type="email"
                class="form-control"
                placeholder="Địa chỉ email của bạn"
                aria-label="Địa chỉ email của bạn"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Số điện thoại của bạn"
                aria-label="Số điện thoại của bạn"
              />
              <textarea
                class="form-control"
                placeholder="Nội dung"
                aria-label="Nội dung"
                rows="5"
              ></textarea>

              <button
                type="submit"
                class="btn fs-5 border-4 p-2 text-uppercase fw-bold"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
