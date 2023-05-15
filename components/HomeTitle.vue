<script setup lang='ts'>
const title = 'Casper Huang'
import Function from './Function.vue'
</script>

<template>
  <div m="t-8 x-auto" text="8 h-normal w-bold"
    p-x-9 flex="~ items-center gap-2 wrap justify-between"
    children-transition="!ease-in-out !color-600" max-w-600px>
    <span p-b-1 >
      {{ title }}
    </span>
    <Function />
  </div>
</template>

<style scoped></style> 