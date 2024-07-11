<script setup lang='ts'>
import Underline from './Underline.vue'
import { h, ref } from 'vue'
const { link } = defineProps<{
  link?: string
}>()
const container = link ? h('a', { href: link, target: '_blank' }) : h('span')
const show = ref(false)
const opacity = ref(link ? 0.6 : 0)
</script>

<template>
  <Underline :show="show"
    :opacity="opacity"
    m-2 p-2 rounded
    box-border bg-hex-8881
  >
    <container
      grid="~ flow-col gap-2 items-center"
      @mouseover="show = true"
      @mouseleave="show = false"
    >
      <slot />
    </container>
  </Underline>
</template>

<style scoped></style>