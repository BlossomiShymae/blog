<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

defineProps<{
  articles: ParsedContent[]
}>();
</script>

<template>
  <div class="d-flex flex-flow flex-wrap gap-4 justify-content-start" v-if="articles.length">
    <ArticleItem v-for="article in articles" :article="article" :id="article._id"/>
  </div>
</template>