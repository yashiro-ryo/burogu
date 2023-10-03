<template>
  <div class="navbar">
    <div class="navbar-body">
      <div class="navbar-title">
        <NuxtLink href="/">Blog</NuxtLink>
      </div>
      <div class="navbar-contents">
        <div class="navbar-content">
          <NuxtLink href="/about">
            <span class="link-item">About Me</span></NuxtLink
          >
        </div>
        <div class="navbar-content">
          <NuxtLink href="/works"
            ><span class="link-item">Works</span></NuxtLink
          >
        </div>
        <div class="navbar-content">
          <NuxtLink href="/contact"
            ><span class="link-item">Contact Me</span></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$navbar-height: 80px;
.navbar {
  height: $navbar-height;
  padding: 10px;

  .navbar-body {
    background-color: var(--navbar-background-color);
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    height: 100%;

    .navbar-title {
      margin-left: 20px;
      line-height: $navbar-height;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .navbar-contents {
      display: flex;

      .navbar-content {
        line-height: 60px;
        margin-right: 20px;
        padding: 10px 0;

        .link-item {
          height: 30px;
          padding: 10px;

          &:hover {
            background-color: var(--hover-background-color);
          }
        }
      }
    }
  }
}
</style>
