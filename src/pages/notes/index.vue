<script setup lang='ts'>
import { ref } from 'vue';
import Routes from './components/Routes.vue'
const active = ref(0)
const fn = (v: number) => {
  active.value = v
}
</script>

<template>
  <div class="slide-content" 
    max-w-2xl m-x-auto>
    <Routes class="route"
      :active="active" />
    <RouterView @active="fn" />
  </div>
</template>