<script setup lang='ts'>
import { ref } from 'vue'
import Routes from './components/Routes.vue'
import { studyTypes } from './stores/data'
const active = ref(0)
const fn = (v: number) => {
  active.value = v
}
</script>

<template>
  <div grid="~ flow-row sm:flow-col gap-6" 
    max-w-2xl m-x-auto
    class="slide-content">
    <Routes class="route"
      :active="active"
      :types="studyTypes" />
    <RouterView @active="fn" />
  </div>
</template>