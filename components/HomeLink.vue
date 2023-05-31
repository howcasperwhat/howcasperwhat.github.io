<script setup lang='ts'>
import { useData } from 'vitepress'
import type { LinkItemProps } from '../types/LinkItemProps'
defineProps<{ item: LinkItemProps }>()
const { isDark } = useData()
</script>

<template>
  <a :href="item.link" p-l-4 p-y-1 w-auto h-16 target="_blank"
    flex="~ items-center justify-between" bg="gray/10"
    :filter="isDark ? 'hover:brightness-130' : 'hover:brightness-85'" 
    b="rd-1 .5px gray/24 solid" children-flex="~ items-center gap-2">
    <div :c="item.color">
      <div :class="'i-' + item.icon" text-6 m-r-2/>
      <div text="5 w-5" h-7 p-t-.25 v-text="item.title" />
    </div>
    <div text="3.6" p-x-3>
      <div v-text="'Learn more'" />
      <div i-carbon:arrow-right />
    </div>
  </a>
</template>

<style scoped></style>