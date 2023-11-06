<template>
  <NuxtLink :href="`/articles/${article.id}`">
    <div class="article">
      <h3 class="article-title">{{ article.title }}</h3>
      <small class="created-date">created at: {{ article.createdAt }}</small>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  article: {
    id: number;
    title: string;
    createdAt: string;
  };
}>();
</script>

<style lang="scss" scoped>
.article {
  padding: 20px;
  margin-bottom: 20px;

  border: 1px solid #636363;
  border-radius: 10px;

  &:hover {
    background-color: var(--hover-background-color);
  }
}
</style>
