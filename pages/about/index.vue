<template>
  <div class="page">
    <Navbar />
    <div class="container">
      <div class="about-me">
        <h3>About Me</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<style lang="scss" scoped>
.about-me {
  margin-top: 60px;
}
</style>
