<script setup lang='ts'>
import type { DemoProps } from '../types/demo'
import { isDark } from '../../../src/stores/theme'

defineProps<{ demo: DemoProps }>()
function imageSrcOf(name: string) {
  const value = isDark.value ? 'dark' : 'light'
  return `/images/demo/${name}.${value}.png`
}
</script>

<template>
  <div
    grid="~ flow-row gap-2"

    overflow-hidden rounded bg-white p-6 hover:scale-102 dark:bg-hex-181818 hover:duration-transform-600
    b="1 solid gray-300 dark:gray-800"
  >
    <div grid="~ flow-row" z-10>
      <h1
        align="center" text-5 c-blue-gray
        v-text="demo.name.toUpperCase()"
      />
      <div v-html="demo.description" />
    </div>
    <img
      :key="+isDark" w-full
      :src="imageSrcOf(demo.name)"
    >
  </div>
</template>
