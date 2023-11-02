<template>
  <div class="layout-default">
    <LayoutSnowflakes />
    <LayoutAppHeader />
    <main class="main-content" role="main">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
