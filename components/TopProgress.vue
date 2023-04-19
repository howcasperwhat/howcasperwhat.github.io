<script setup lang='ts'>
import { ref } from 'vue';
const progress = ref(0)

</script>

<template>
  <progress
    id="top-progress-main"
    max="100"
    :value="progress"
  />
  <button @click="progress++">
    Increase
  </button>
</template>

<style scoped>
#top-progress-main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 1000;
  color: red;
  background-color: black;
  border: none;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;
  transition: width 0.3s;
}
</style>