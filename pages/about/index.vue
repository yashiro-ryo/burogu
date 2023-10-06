<template>
  <div class="page">
    <Navbar />
    <div class="container">
      <div class="about-me">
        <h2>About Me</h2>
        <div class="profile">
          <div class="profile-image">
            <img src="/profile.webp" width="300px" />
          </div>
          <div class="profile-name">
            <h2>矢代 涼</h2>
            <h3>Yashiro Ryo</h3>
            <p>徳島県徳島市出身</p>
          </div>
        </div>
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

  .profile {
    .profile-name {
      padding-left: 20px;
    }
  }
}

@media screen and (min-width: 891px) {
  .profile {
    display: flex;
  }
}

@media screen and (max-width: 890px) {
  .profile {
    display: block;
  }
}
</style>
