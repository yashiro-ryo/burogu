<template>
  <NuxtLink :href="`/article/${article.articleId}`">
    <div class="article">
      <p class="article-title">{{ article.title }}</p>
      <small class="created-date">created at: {{ article.createdAt }}</small>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  article: {
    articleId: number;
    title: string;
    createdAt: string;
  };
}>();
</script>

<style lang="scss" scoped>
.article {
  padding: 10px;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--hover-background-color);
  }
}
</style>
