<script setup lang='ts'>
import { useWindowScroll } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'

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
    v-if="route.path !== '/'"

    fixed bottom-3 right-3 h-10 w-10 flex-center rounded-full text-xl op-50 hover:bg-hex-8884 hover:op-100
    @click="far() ? toTop() : goBack()"
  >
    <div v-if="far()" i-carbon:arrow-up />
    <div v-else i-carbon:arrow-left />
  </button>
</template>
