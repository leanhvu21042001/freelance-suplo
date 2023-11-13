<template>
  <header id="app-header">
    <!-- Main Top nav -->
    <div class="d-none d-md-none d-lg-block d-xl-block container px-xl-5 py-3">
      <div class="mx-1 row">
        <div
          class="col d-flex flex-column align-items-start justify-content-center"
        >
          <div>
            <font-awesome-icon
              style="font-size: 20px"
              icon="fa-brands fa-whatsapp"
            /><span> Chăm sóc khách hàng: </span>
            <a
              class="text-decoration-none text-black fw-bold"
              href="tel:0934 323 882"
              >0934 323 882</a
            >
          </div>
          <div>
            <font-awesome-icon icon="fa-regular fa-credit-card" />
            <span> Mua hàng online: </span>
            <a
              class="text-decoration-none text-black fw-bold"
              href="tel:0934 323 882"
              >0934 323 882</a
            >
          </div>
        </div>

        <div class="col text-center">
          <img
            width="80px"
            height="80px"
            src="~/assets/img/logo.png"
            alt="LOGO"
          />
        </div>

        <div
          class="col d-flex flex-column align-items-end justify-content-center"
        >
          <div>
            <div class="row">
              <div class="col-5 px-0">
                <select class="form-select" aria-label="Lựa chọn áo">
                  <option selected>Tất cả</option>
                  <option value="1">Áo khoác da</option>
                  <option value="2">Áo sơ mi</option>
                  <option value="2">Áo khoác Santiago</option>
                  <option value="2">Áo khoác Jakiro</option>
                  <option value="3">Khuyến mãi</option>
                </select>
              </div>

              <div class="col-7 px-0">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Tìm kiếm"
                    aria-label="Tìm kiếm"
                  />
                  <span class="input-group-text bg-black">
                    <font-awesome-icon
                      class="text-white"
                      icon="magnifying-glass"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div class="row justify-content-end mt-2">
              <div class="col-3 px-0 fs-link">
                <p>
                  <font-awesome-icon style="font-size: 14px" icon="user" />
                  <span> Tài khoản</span>
                </p>
              </div>
              <div class="col-4 px-0 fs-link">
                <p>
                  <font-awesome-icon
                    style="font-size: 14px"
                    icon="cart-shopping"
                  />
                  <span> Giỏ hàng (0)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main nav -->
    <nav class="navbar navbar-expand-md py-0">
      <div class="d-md-none container-fluid">
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span class="navbar-toggler-icon"></span> -->
          <font-awesome-icon style="font-size: 24px" icon="bars" />
        </button>
        <img
          class="d-xl-none d-lg-none d-md-none"
          src="~/assets/img/logo.png"
          alt="LOGO"
        />
        <a class="d-xl-none d-lg-none d-md-none navbar-brand" href="#"
          ><font-awesome-icon icon="cart-shopping"
        /></a>
      </div>

      <div class="w-100 bg-black text-white py-md-2">
        <div class="container">
          <div
            class="collapse navbar-collapse navbar-padding justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <NuxtLink
                class="nav-link text-uppercase fw-bolder text-white fs-link"
                :class="{ active: $route.path === '/' }"
                :aria-current="$route.path === '/' ? 'page' : null"
                to="/"
                >Trang chủ</NuxtLink
              >
              <NuxtLink
                class="nav-link text-uppercase fw-bolder text-white fs-link"
                :class="{ active: $route.path === '/about-us' }"
                :aria-current="$route.path === '/about-us' ? 'page' : null"
                to="/"
                >Về Suplo</NuxtLink
              >
              <NuxtLink
                class="nav-link text-uppercase fw-bolder text-white fs-link"
                :class="{ active: $route.path === '/collections/all' }"
                :aria-current="
                  $route.path === '/collections/all' ? 'page' : null
                "
                to="/collections/all"
                >Sản phẩm</NuxtLink
              >
              <NuxtLink
                class="nav-link text-uppercase fw-bolder text-white fs-link"
                :class="{ active: $route.path === '/collections/sale-of' }"
                :aria-current="
                  $route.path === '/collections/sale-of' ? 'page' : null
                "
                to="/collections/sale-of"
                >Khuyến mãi</NuxtLink
              >
              <NuxtLink
                class="nav-link text-uppercase fw-bolder text-white fs-link"
                :class="{ active: $route.path === '/blog' }"
                :aria-current="$route.path === '/blog' ? 'page' : null"
                to="/blog"
                >Blog</NuxtLink
              >
              <NuxtLink
                class="nav-link text-uppercase fw-bolder text-white fs-link"
                :class="{ active: $route.path === '/contact' }"
                :aria-current="$route.path === '/contact' ? 'page' : null"
                to="/contact"
                >Liên hệ</NuxtLink
              >
              <NuxtLink
                class="nav-link text-uppercase fw-bolder text-white fs-link"
                :class="{ active: $route.path === '/shop-system' }"
                :aria-current="$route.path === '/shop-system' ? 'page' : null"
                to="/shop-system"
                >Hệ thống cửa hàng</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile nav -->
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">SUPLO</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <div class="navbar-nav">
            <NuxtLink
              class="nav-link text-uppercase fw-bolder text-white fs-link"
              :class="{ active: $route.path === '/' }"
              :aria-current="$route.path === '/' ? 'page' : null"
              to="/"
              >Trang chủ</NuxtLink
            >
            <NuxtLink
              class="nav-link text-uppercase fw-bolder text-white fs-link"
              :class="{ active: $route.path === '/about-us' }"
              :aria-current="$route.path === '/about-us' ? 'page' : null"
              to="/"
              >Về Suplo</NuxtLink
            >
            <NuxtLink
              class="nav-link text-uppercase fw-bolder text-white fs-link"
              :class="{ active: $route.path === '/collections/all' }"
              :aria-current="$route.path === '/collections/all' ? 'page' : null"
              to="/collections/all"
              >Sản phẩm</NuxtLink
            >
            <NuxtLink
              class="nav-link text-uppercase fw-bolder text-white fs-link"
              :class="{ active: $route.path === '/collections/sale-of' }"
              :aria-current="
                $route.path === '/collections/sale-of' ? 'page' : null
              "
              to="/collections/sale-of"
              >Khuyến mãi</NuxtLink
            >
            <NuxtLink
              class="nav-link text-uppercase fw-bolder text-white fs-link"
              :class="{ active: $route.path === '/blog' }"
              :aria-current="$route.path === '/blog' ? 'page' : null"
              to="/blog"
              >Blog</NuxtLink
            >
            <NuxtLink
              class="nav-link text-uppercase fw-bolder text-white fs-link"
              :class="{ active: $route.path === '/contact' }"
              :aria-current="$route.path === '/contact' ? 'page' : null"
              to="/contact"
              >Liên hệ</NuxtLink
            >
            <NuxtLink
              class="nav-link text-uppercase fw-bolder text-white fs-link"
              :class="{ active: $route.path === '/shop-system' }"
              :aria-current="$route.path === '/shop-system' ? 'page' : null"
              to="/shop-system"
              >Hệ thống cửa hàng</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fs-link {
  font-size: 14px;
}

.navbar-padding {
  padding: 0 12rem;
}
</style>
