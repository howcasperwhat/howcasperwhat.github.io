<script setup lang='ts'>
import { Ref, computed, ref } from 'vue'
import { useFetch, useIntervalFn } from '@vueuse/core'
import { useConfigStore } from '../stores/config'
const { counterAPI } = useConfigStore()
const response = useFetch(counterAPI).data as Ref<string>
const views = computed(() => JSON.parse(response.value)?.views)
const counter = ref(0)
const { pause } = useIntervalFn(() => {
  if (counter.value + 5 >= views.value) { counter.value = views.value; pause(); }
  counter.value = counter.value + 3
}, 1)
</script>

<template>
  <div text="4 w-6 h-normal" c-gray v-text="`Total Views: ${counter}`" />
</template>

<style scoped></style>