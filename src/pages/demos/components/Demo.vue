<script setup lang='ts'>
import type { DemoProps } from '../types/demo'
import { useThemeStore } from '../../../stores/theme'

defineProps<{ demo: DemoProps }>()
const { theme } = useThemeStore()
function imageSrcOf(name: string) {
  const value = theme.value || 'dark'
  return `/images/demo/${name}.${value}.png`
}
</script>

<template>
  <div p-6 rounded
    grid="~ flow-row gap-2" hover:scale-102
    hover:duration-transform-600 overflow-hidden 
    bg-white dark:bg-hex-181818 
    b="1 solid gray-300 dark:gray-800"
  >
    <div grid="~ flow-row" z-10>
      <h1 align="center" text-5 c-blue-gray 
        v-text="demo.name.toUpperCase()" />
      <div v-html="demo.description" />
    </div>
    <img :key="theme" w-full
      :src="imageSrcOf(demo.name)">
  </div>
</template>
