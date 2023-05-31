<script setup lang='ts'>
import HomeLink from './HomeLink.vue'
import type { LinkItemProps } from '../types/LinkItemProps'
defineProps<{ items: Array<LinkItemProps> }>()
</script>

<template>
  <div max-w-150 grid="~ gap-4">
    <home-link v-for="item in items" :item="item" />
  </div>
</template>

<style scoped></style>