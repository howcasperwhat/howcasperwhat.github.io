<script setup lang='ts'>
import { useWindowScroll } from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'

const { y } = useWindowScroll()
const route = useRoute()
const router = useRouter()
function far() {
  return y.value > 300
}
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function goBack() {
  router.back()
}
</script>

<template>
  <button
    v-if="route.path !== '/'" rounded-full text-xl
    flex-center fixed right-3 bottom-3 w-10 h-10
    op-50 hover:op-100 hover:bg-hex-8884 
    @click="far() ? toTop() : goBack()"
  >
    <div v-if="far()" i-carbon:arrow-up />
    <div v-else i-carbon:arrow-left />
  </button>
</template>
