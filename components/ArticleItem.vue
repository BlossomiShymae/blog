<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

defineProps<{
  article: ParsedContent
}>();
</script>

<template>
  <article style="width: 300px;"
    data-aos="zoom-in"
    data-aos-duration="1000">
    <NuxtLink :to="article._path">
      <div class="ratio ratio-4x3">
        <NuxtImg class="object-fit-cover rounded" 
          :src="`${article.cover || '/img/template.png'}`"/>
      </div>
    </NuxtLink>
    <div>
      <h2>{{ article.title }}</h2>
      <p class="mb-2">{{ article.description }}</p>
      <p class="text-muted">{{ formatDate(article.timestamp || Date.now() / 1000) }}</p>
    </div>
  </article>
</template>