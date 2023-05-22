<script setup lang='ts'>
import LinkItem from './LinkItem.vue'
import type { LinkItemProps } from '../types/LinkItemProps'
defineProps<{ items: Array<LinkItemProps> }>()
</script>

<template>
  <div p-y-5>
    <div m-auto max-w-600px grid="~ gap-4" p-x-4
      style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));" >
      <link-item v-for="item in items" :item="item" />
    </div>
  </div>
</template>

<style scoped></style>