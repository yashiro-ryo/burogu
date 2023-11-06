<template>
  <div class="page">
    <Navbar />
    <div class="container">
      <div class="articles">
        <h2>Articles</h2>
        <ArticleDigest
          v-for="article in articles.getArticleDigests()"
          :article="article"
          :key="article.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import ArticleDigest from "~/components/Article/ArticleDigest.vue";
import { articles } from "~/entity/blogNeta";
</script>

<style lang="scss" scoped>
.container {
  margin-top: 60px;
}

.articles {
  margin-top: 60px;
}
</style>
