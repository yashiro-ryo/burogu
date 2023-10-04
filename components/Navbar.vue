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
      <div class="navbar-dropdown-toggle">
        <NavbarDropdownToggle
          :is-dropdown-open="isDropdownToggleOpen"
          @onupdate-dropdown-toggle="onUpdateDrodpownToggle"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarDropdownToggle from "./parts/NavbarDropdownToggle.vue";
import { ref } from "vue";

const isDropdownToggleOpen = ref(false);

const onUpdateDrodpownToggle = (isOpen: boolean) => {
  isDropdownToggleOpen.value = isOpen;
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 700px) {
  .navbar-dropdown-toggle {
    display: none;
  }
}

@media screen and (max-width: 701px) {
  .navbar-contents {
    display: none !important;
  }
}

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

    .navbar-dropdown-toggle {
      width: 3rem;
      height: 3rem;
      margin: auto 1rem;
    }
  }
}
</style>
