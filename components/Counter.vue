<script setup lang='ts'>
import { computed, ref } from 'vue'
import { useFetch, useIntervalFn } from '@vueuse/core'
import { useConfigStore } from '../stores/config'

const { counterAPI } = useConfigStore()
const response = useFetch(counterAPI).data
const views = computed(() => JSON.parse(response.value as string)?.views)
const offset = computed(() => views.value >> 8)
const counter = ref(0)
const { pause } = useIntervalFn(() => {
  if (response.value === undefined)
    return
  if (counter.value + offset.value >= views.value) {
    counter.value = views.value
    pause()
  }
  counter.value = counter.value + offset.value
}, 1)
</script>

<template>
  <div
    text="4 w-6" c-gray
    v-text="`Total Views: ${counter}`"
  />
</template>
