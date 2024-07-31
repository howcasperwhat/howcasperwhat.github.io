<script setup lang="ts">
import DemoList from './components/DemoList.vue'
import { demos } from './stores/data'
</script>

<template>
  <DemoList :demos="demos" 
    max-w-full />
</template>