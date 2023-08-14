<script setup lang='ts'>
import { useWindowScroll } from '@vueuse/core'
import { useRouter } from 'vitepress'
import { useMessage } from '../utils/message';

const message = useMessage()
const { y } = useWindowScroll()
const router = useRouter()
function far() {
  return y.value > 300
}
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function goBack() {
  message.info(router.route.path, 5000)
  const path = router.route.path.split('/')
  if (path.includes('note')) {
    if (path.at(-1) === '')
      router.go('/')
    else router.go(`/note/${path.at(-2)}/`)
  }
  else if (path.includes('study')) {
    if (path.at(-1) === '')
      router.go('/')
    else router.go(`/study/${path.at(-2)}/`)
  }
  else if (path.includes('demo')) {
    if (path.at(-1) === '')
      router.go('/')
    else router.go('/demo/')
  }
}
</script>

<template>
  <button
    v-if="router.route.path !== '/'" rounded-full text-xl
    flex-center fixed right-3 bottom-3 w-10 h-10
    op-50 hover:op-100 hover:bg-hex-8884 
    @click="far() ? toTop() : goBack()"
  >
    <div v-if="far()" i-carbon:arrow-up />
    <div v-else i-carbon:arrow-left />
  </button>
</template>
