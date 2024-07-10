<script setup lang='ts'>
import { lineY, plot } from '@observablehq/plot'
import { onMounted, ref } from 'vue'

const {
  data,
  xTitle = '',
  yTitle = '',
} = defineProps<{
  data: number[]
  xTitle?: string
  yTitle?: string
}>()

const lineChart = ref<HTMLDivElement>()
onMounted(() => {
  const svg = plot({
    grid: true,
    nice: true,
    marginTop: 30,
    marginBottom: 40,
    x: { label: xTitle },
    y: { label: yTitle },
    marks: [lineY(data)],
  })
  lineChart?.value?.append(svg)
})
</script>

<template>
  <div ref="lineChart" />
</template>
