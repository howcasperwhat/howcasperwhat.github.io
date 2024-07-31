<script setup lang='ts'>
import { useThemeStore } from '../stores/theme'
import { useConfigStore } from '../stores/config'
import Logo from './Logo.vue'

const { toggleTheme } = useThemeStore()
const { githubURL } = useConfigStore()
</script>

<template>
  <header w-full box-border p-8 grid="~ flow-col items-center">
    <RouterLink lg:fixed absolute to="/">
      <Logo />
    </RouterLink>
    <nav flex="~ gap-4 items-center justify-end">
      <RouterLink to="/notes/">
        <span lt-md:hidden v-text="'Notes'" />
        <div i-carbon:notebook text-5 md-hidden />
      </RouterLink>
      <RouterLink to="/demos/">
        <span lt-md:hidden v-text="'Demos'" />
        <div i-carbon:workspace text-5 md-hidden />
      </RouterLink>
      <!-- <RouterLink to="/study/">
        <span lt-md:hidden v-text="'Study'" />
        <div i-carbon:growth text-5 md-hidden />
      </RouterLink> -->
      <button @click="toggleTheme">
        <div i-carbon:sun dark:i-carbon-moon text-5 />
      </button>
      <a :href="githubURL" target="_blank" class="icon">
        <div i-iconoir:github text-5 />
      </a>
    </nav>
  </header>
</template>

<style scoped lang="sass">
a
  color: #333
  &:hover
    color: #000

.dark a
  color: #ccc
  &:hover
    color: #fff
</style>
