<script setup lang='ts'>
import { arrow, dot, line, plot } from '@observablehq/plot'
import { onMounted, ref } from 'vue'

const { vectors, xRange, yRange, lines = [] } = defineProps<{
  vectors: [number, number][]
  xRange: [number, number]
  yRange: [number, number]
  lines?: [[number, number], [number, number]][]
}>()

const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#9467bd',
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']

// Append the SVG element.
const vec = ref<HTMLDivElement>()
onMounted(() => {
  const svg = plot({
    grid: true,
    x: { domain: xRange },
    y: { domain: yRange },
    marks: [
      ...vectors.map((v, _) => arrow(
        [{ x1: 0, y1: 0, x2: v[0], y2: v[1] }],
        {
          stroke: colors[_ % colors.length],
          x1: 'x1',
          x2: 'x2',
          y1: 'y1',
          y2: 'y2',
          tip: true,
          title: d => `(${d.x2}, ${d.y2})`,
        },
      )),
      ...lines.map((l, _) => line(l, {
        strokeDasharray: '5, 5',
      })),
      dot([[0, 0]], {
        fill: 'currentColor',
      }),
    ],
  })
  vec.value!.append(svg)
})
</script>

<template>
  <div ref="vec" flex-center />
</template>
