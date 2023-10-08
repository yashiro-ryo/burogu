<template>
  <div class="page">
    <Navbar />
    <div class="container">
      <div class="about-me">
        <h2>About Me</h2>
        <div class="profile-list">
          <div class="profile-image">
            <img src="/profile.webp" width="300px" />
          </div>
          <div class="profile-name">
            <h2>矢代 涼</h2>
            <h3>Yashiro Ryo</h3>
            <p>徳島県徳島市出身</p>
          </div>
          <div class="profile-list-item affliation">
            <h2>所属</h2>
            <p>徳島大学 理工学部 情報光システムコース<br />情報系 4年</p>
          </div>
          <div class="profile-list-item hobby">
            <h2>趣味</h2>
            <p>個人開発, ドライブ, 楽器の練習</p>
          </div>
          <div class="profile-list-item personality">
            <h2>性格</h2>
            <p>領事タイプらしい</p>
            <img src="/ryoji.webp" width="300px" />
          </div>
          <div class="profile-list-item like">
            <h2>好きなもの</h2>
            <p>徳島ラーメン, 家系ラーメン</p>
          </div>
          <div class="profile-list-item not-like">
            <h2>苦手なもの</h2>
            <p>えび</p>
          </div>
          <div class="profile-list-item part-time">
            <h2>バイトなど</h2>
            <p>家電量販店でのレジ打ち(○マダ電機)</p>
            <p>観光地の撮影バイト(四国周遊)</p>
            <p>選挙の開票調査</p>
            <p>家庭教師, 学習塾</p>
            <p>ウーバーイーツの配達員</p>
            <p>チャットサービスの開発アルバイト</p>
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

  .profile-list {
    .profile-name {
      padding-left: 20px;
    }

    .profile-list-item {
      margin-top: 50px;
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
