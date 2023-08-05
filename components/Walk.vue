<script setup lang='ts'>
import { useWindowScroll } from '@vueuse/core';
import { useRouter } from 'vitepress';
const { y } = useWindowScroll()
const router = useRouter()
function far() {
  return y.value > 300
}
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function goBack() {
  const path = router.route.path.split('/')
  if (path.includes('note'))
    if (path.at(-1) === '') router.go('/')
    else router.go(`/note/${path.at(-2)}/`)
  else if (path.includes('demo'))
    if (path.at(-1) === '') router.go('/')
    else router.go('/demo/')
}
</script>

<template>
  <button rounded-full text-xl flex-center
    fixed right-3 bottom-3 w-10 h-10 op-50
    v-if="router.route.path !== '/'"
    @click="far() ? toTop() : goBack()"
    hover:op-100 hover:bg-hex-8884 >
    <div i-carbon:arrow-up v-if="far()" />
    <div i-carbon:arrow-left v-else />
  </button>
</template>

<style scoped></style>