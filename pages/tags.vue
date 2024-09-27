<script setup lang="ts">
const { data: _articles } = await useAsyncData(async () => queryContent('/articles')
  .find());

const tags = computed(() => {
  const articles = _articles.value || [];
  const _tags = [];

  for (const article of articles) {
    if (article.tags) {
      _tags.push(...article.tags.split(","))
    }
  }
  return new Set(_tags);
});

const tag = ref("");

const articles = computed(() => {
  const articles = _articles.value || [];
  return articles
    .filter((x) => x.tags?.includes(tag.value))
    .sort((a, b) => b.timestamp - a.timestamp);
});

const articlesKey = ref(0);
</script>

<template>
  <div>
    <h1 class="display-5 fw-bold mb-3">Tags</h1>
    <button v-for="_tag in tags" 
      @click="tag = _tag; articlesKey++;" 
      class="mb-3 me-2 btn btn-outline-light" 
      :class="{'active': tag == _tag}">
      {{ _tag }}
    </button>
    <ArticlePresenter :articles="articles"/>
  </div>
</template>