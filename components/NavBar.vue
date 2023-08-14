<script setup lang='ts'>
import { useThemeStore } from '../stores/theme'
import { useConfigStore } from '../stores/config'
import Logo from './Logo.vue'

const { toggleTheme } = useThemeStore()
const { githubURL } = useConfigStore()
</script>

<template>
  <header w-full p-8 grid="~ items-center justify-end flow-col">
    <a lg:fixed absolute href="/">
      <Logo />
    </a>
    <nav grid="~ flow-col gap-4 items-center">
      <a href="/note/front/">
        <span lt-md:hidden v-text="'Note'" />
        <div i-carbon:notebook text-5 md-hidden />
      </a>
      <a href="/demo/">
        <span lt-md:hidden v-text="'Demo'" />
        <div i-carbon:workspace text-5 md-hidden />
      </a>
      <a href="/study/linear-algebra/">
        <span lt-md:hidden v-text="'Study'" />
        <div i-carbon:growth text-5 md-hidden />
      </a>
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
