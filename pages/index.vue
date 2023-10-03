<template>
  <div class="main">
    <Navbar />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<style lang="scss">
.main {
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
}
</style>
