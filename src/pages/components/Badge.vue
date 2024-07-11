<script setup lang='ts'>
import type { Component } from 'vue'
import Underline from './Underline.vue'
import { h, ref } from 'vue'
const {
  info, link, logo
} = defineProps<{
  info?: string
  link?: string
  logo: Component
}>()
const container = link ? h('a', { href: link, target: '_blank' }) : h('span')
const show = ref(false)
</script>

<template>
  <Underline :show="show"
    :opacity="0.6"
    m-x-2 p-2 rounded
    box-border bg-hex-8881
  >
    <container 
      flex="~ items-center"
      @mouseover="show = true"
      @mouseleave="show = false"
    >
      <logo h-4 p-r-2 />
      <span v-text="info"
        v-if="info"
        whitespace-nowrap />
    </container>
  </Underline>
</template>

<style scoped></style>