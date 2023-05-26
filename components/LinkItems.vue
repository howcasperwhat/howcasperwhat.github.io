<script setup lang='ts'>
import LinkItem from './LinkItem.vue'
import type { LinkItemProps } from '../types/LinkItemProps'
defineProps<{ items: Array<LinkItemProps> }>()
</script>

<template>
  <div max-w-600px grid="~ gap-4">
    <link-item v-for="item in items" :item="item" />
  </div>
</template>

<style scoped></style>