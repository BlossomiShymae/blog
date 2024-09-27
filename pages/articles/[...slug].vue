<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string[];
const query = ['/articles', ...slug].join('/');

const { data: article } = await useAsyncData(async () => queryContent(query).findOne());

const tags = computed(() => {
  const _tags = article.value?.tags ?? [];
  return _tags.split(",");
});
</script>

<template>
  <div class="py-4"
    data-aos="fade-right"
    data-aos-duration="1000">
    <div>
      <span v-for="tag in tags" class="badge text-bg-dark me-2">{{ tag }}</span>
    </div>
    <h1 class="display-4 fw-bold mb-3">{{ article?.title }}</h1>
    <div class="d-flex align-items-center mb-5 gap-2">
      <div style="width: 80px;">
        <NuxtImg class="img-fluid rounded-circle" src="/img/avatar.png"/>
      </div>
      <div>
        <p class="fw-bold mb-0">Blossomi Shymae (she/her)</p>
        <p class="text-muted mb-0">{{ formatDate(article?.timestamp ?? Date.now()) }}</p>
      </div>
    </div>
    <ContentDoc>
      <template v-slot:empty>
        <p>This article has no content...</p>
      </template>
    </ContentDoc>
  </div>
</template>