<script setup lang='ts'>
import Function from './Function.vue'
const title = 'Casper Huang'
</script>

<template>
  <div text="8 h-normal w-bold" 
    flex="~ items-center gap-2 wrap justify-between">
    <span v-text="title" />
    <Function />
  </div>
</template>

<style scoped></style> 