<template>
  <div>
    <div>
      <NuxtLink to="/articles">記事一覧に戻る</NuxtLink>
    </div>
    <h2>{{ article.title }}</h2>
    <small>記事ID: {{ article.id }}</small>
    <div v-for="content in article.contents">
      <h3>{{ content.title }}</h3>
      <div>{{ content.body }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Article } from "~/entity/blogNeta";
const props = defineProps<{
  article: Article;
}>();
</script>
