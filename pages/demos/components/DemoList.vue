<script setup lang='ts'>
import type { DemoProps } from '../types/demo'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'
import Demo from './Demo.vue'

const { demos } = defineProps<{ demos: DemoProps[] }>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const cols = computed(() => {
  if (breakpoints.xl.value)
    return 3
  if (breakpoints.lg.value)
    return 2
  return 1
})

const parts = computed(() => {
  const result = Array.from({ length: cols.value }, () => [] as typeof demos)
  demos.forEach((item, i) => {
    result[i % cols.value].push(item)
  })
  return result
})
</script>

<template>
  <div
    grid="~ cols-1 lg:cols-2 xl:cols-3 gap-4"
    class="slide-content"
  >
    <div
      v-for="(part, idx) in parts" :key="idx"
      flex="~ col gap-4"
    >
      <RouterLink
        v-for="demo in part" :key="demo.id"
        :to="demo.route" hover:b-none
      >
        <Demo :demo="demo" />
      </RouterLink>
    </div>
  </div>
</template>
