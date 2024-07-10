<script setup lang='ts'>
import type { Component } from 'vue'
import { h } from 'vue'
const {
  info, link, logo
} = defineProps<{
  info?: string
  link?: string
  logo: Component
}>()
const container = link ? h('a', { href: link, target: '_blank' }) : h('span')
</script>

<template>
  <container bg-hex-8881
    box-border p-2 rounded
    flex="~ items-center"
    m-x-2
  >
    <logo h-4 p-r-2 />
    <span v-text="info"
      v-if="info"
      whitespace-nowrap />
  </container>
</template>

<style scoped></style>