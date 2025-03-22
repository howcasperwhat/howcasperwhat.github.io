<script setup lang='ts'>
import { dot, line, plot } from '@observablehq/plot'
import { range } from 'd3'
import { onMounted, ref } from 'vue'

const { xRange, yRange, fns, step = 0.01, dots = [] } = defineProps<{
  xRange: [number, number]
  yRange: [number, number]
  fns: ((x: number) => number)[]
  step?: number
  dots?: [number, number][]
}>()

const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#9467bd',
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']

const fn = ref<HTMLDivElement>()
onMounted(() => {
  const svg = plot({
    grid: true,
    x: { domain: xRange },
    y: { domain: yRange },
    marks: [
      ...fns.map((fn, _) => line(
        range(xRange[0], xRange[1], step)
          .map(x => [x, fn(x)]), {
        stroke: colors[_ % colors.length],
      }),
      ),
      dot(dots, {
        tip: true,
        title: d => `(${d[0]}, ${d[1]})`,
      }),
    ],
  })
  fn.value!.append(svg)
})
</script>

<template>
  <div ref="fn" flex-center />
</template>
