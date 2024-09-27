<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
* {
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji, sans-serif;
}

html, body {
  background-color: black;
}

a {
  color: white;
  text-decoration: none;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.125rem);
}

.layout-enter-active,
.layout-leave-active {
  transform: none;
  transition: all 0.5s;
}
.layout-enter-from,
.layout-leave-to {
  transform: translateX(-100%);
}
</style>
