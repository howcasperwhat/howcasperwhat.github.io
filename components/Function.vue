<script setup lang='ts'>
import Sun from './Icons/Sun.vue'
import Moon from './Icons/Moon.vue'
import Github from './Icons/Github.vue'
import { useData } from 'vitepress';
const { isDark } = useData()
const github = "https://github.com/howcasperwhat/howcasperwhat.github.io"
const switchTheme = () => {
  isDark.value = !isDark.value
  const html = document.querySelector("html")
  html?.classList.toggle("dark")
}
</script>
<template>
  <div flex="~ items-center gap-4 wrap">
    <button @click="switchTheme">
      <Sun v-if="isDark"/>
      <Moon v-else />
    </button>
    <a :href="github" target="_blank">
      <Github />
    </a>
  </div>
</template>
<style scoped></style>