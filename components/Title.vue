<script setup lang='ts'>
import Function from './Function.vue'
import { useConfigStore } from '../stores/config';
const { author } = useConfigStore() 
</script>

<template>
  <div text="8 w-bold" 
    flex="~ items-center gap-2 wrap justify-between">
    <span v-text="author" />
    <Function />
  </div>
</template>

<style scoped></style> 