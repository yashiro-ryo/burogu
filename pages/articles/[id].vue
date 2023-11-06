<template>
  <div class="page">
    <Navbar />
    <div class="container">
      <div class="article">
        <ArticleBody v-if="isArticleExists" :article="targetArticle" />
        <ArticleNotFound v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { articles, Article } from "~/entity/blogNeta";

const route = useRoute();

const id = ref(route.params.id);
const targetArticle = ref<Article | null>(null);

const isArticleExists = computed(() => {
  return targetArticle.value !== null;
});

onMounted(() => {
  targetArticle.value = articles.getTargetArticle(Number(id.value));
});
</script>

<style lang="scss" scoped>
.article {
  margin-top: 60px;
}
</style>
