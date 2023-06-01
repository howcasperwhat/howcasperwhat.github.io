<script setup lang='ts'>
const title = 'Casper Huang'
import Function from './Function.vue'
</script>

<template>
  <div text="8 h-normal w-bold" 
    flex="~ items-center gap-2 wrap justify-between">
    <span v-text="title" />
    <Function />
  </div>
</template>

<style scoped></style> 