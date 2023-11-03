<template>
  <div id="blog-page-content">
    <BaseBreadcrumb title="Tin tức" />

    <div class="container py-5">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 mb-5">
          <BlogArticles />
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <BlogCategories />
          <BlogRecentArticles />
        </div>
      </div>
    </div>
  </div>
</template>
