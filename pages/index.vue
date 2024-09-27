<script setup lang="ts">
const { data: _articles } = await useAsyncData(async () => queryContent('/articles')
  .sort({ timestamp: -1 })
  .find());

const articles = computed(() => _articles.value || []);
</script>

<template>
  <div>
    <div class="px-4 pt-5 my-5 text-center border-bottom"
      data-aos="fade-down"
      data-aos-duration="1000">
      <h1 class="display-4 fw-bold">Blossomi's Blog</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">The experiences and ramblings of a trans elf girl on the internet.</p>
      </div>
      <div class="container px-5" style="width: 300px;">
        <NuxtImg class="img-fluid" src="/img/sobbing.png"/>
      </div>
    </div>
    <ArticlePresenter :articles="articles"/>
  </div>
</template>