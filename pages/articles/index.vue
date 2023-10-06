<template>
  <div id="articles-page">
    <Navbar />
    <div class="container">
      <div class="articles">
        <h3>Articles</h3>
        <Article
          v-for="article in articles"
          :article="article"
          :key="article.articleId"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Article from "./Article.vue";
import { ref } from "vue";

const articles = ref([
  {
    articleId: 1,
    title: "初ブログ",
    createdAt: "2023/09/12",
  },
  {
    articleId: 2,
    title: "オブジェクト指向UIを読んで",
    createdAt: "2023/10/07",
  },
  {
    articleId: 3,
    title: "DDDを勉強して",
    createdAt: "2023/10/01",
  },
]);
</script>

<style lang="scss" scoped>
#articles-page {
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;

  .container {
    margin-top: 60px;
  }
}

.articles {
  margin-top: 60px;
}
</style>
