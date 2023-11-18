<template>
  <div class="page">
    <Navbar />
    <div class="container">
      <div class="contact">
        <h2>Contact</h2>
        <div>
          <h3>Mail</h3>
          <p>yashiro2000185 {at} yahoo.co.jp</p>
          <h3>Github</h3>
          <p><a href="https://github.com/yashiro-ryo">@yashiro-ryo</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 60px;
}
</style>
