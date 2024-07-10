<script setup lang="ts">
import INTJ from './components/icons/INTJ.vue' 
</script>

<template>
  <div class="markdown">
    <a href="https://16personalities.com/intj-personality" target="__blank" title="INTJ"
      important="float-right z-1 relative hover:b-none">
      <INTJ important="w-48 op-48 rotate-y-180" />
    </a>
    <h1 class="author">
      Casper Huang
    </h1> 
    <div flex="~ col" children:m-b-4
      text-hex-333 dark:text-hex-ccc
      children:flex="~ row items-center" text-lg>
      <div>
        Welcome.
      </div>
      <div>
        <div i-carbon:development c-hex-88619a />
        <div m-x-2>-</div>
        <div>Frontend</div>
      </div>
      <div>
        <div i-carbon:chemistry c-hex-10b981 />
        <div m-x-2>-</div>
        <div>MBSR</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.author {
  width: min-content;
  white-space: nowrap;
  background-clip: text;
  color: transparent;
  background-image: radial-gradient(240% 90% at -60% 30%, #10b981 49%, #88619a 51%);
}
</style>