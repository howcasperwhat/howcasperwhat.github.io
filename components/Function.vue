<script setup lang='ts'>
import { useThemeStore } from '../stores/theme'
import { useConfigStore } from '../stores/config'
const { isDark, toggleTheme } = useThemeStore()
const { githubURL } = useConfigStore()
</script>

<template>
  <div flex="~ items-center">
    <button @click="toggleTheme" m-r-2>
      <div :i="isDark ? 'carbon-moon' : 'carbon-sun'" text-6 />
    </button>
    <a :href="githubURL" target="_blank" m-l-2>
      <div i="iconoir-github" text-6 />
    </a>
  </div>
</template>

<style scoped></style>