<script setup lang='ts'>
import { ref } from 'vue'
import Routes from './components/Routes.vue'

const active = ref(0)
function fn(v: number) {
  active.value = v
}
</script>

<template>
  <div
    class="slide-content"
    m-x-auto max-w-2xl
  >
    <Routes
      class="route"
      :active="active"
    />
    <RouterView @active="fn" />
  </div>
</template>
