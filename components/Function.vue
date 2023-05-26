<script setup lang='ts'>
import { useData } from 'vitepress';
const { isDark } = useData()
const github = "https://github.com/howcasperwhat/howcasperwhat.github.io"
const switchTheme = () => {
  isDark.value = !isDark.value
  document.querySelector("html")?.classList.toggle("dark")
  document.body.style.backgroundColor = isDark.value ? "#050505" : "#ffffff"
}
</script>
<template>
  <div flex="~ items-center">
    <button @click="switchTheme" m-r-2>
      <div :i="isDark ? 'carbon-moon' : 'carbon-sun'" text-6 />
    </button>
    <a :href="github" target="_blank" m-l-2>
      <div i="iconoir-github" text-6 />
    </a>
  </div>
</template>
<style scoped></style>