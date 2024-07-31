<script setup lang='ts'>
import { h, ref, onMounted, onUnmounted } from 'vue'
import type PathAnimatior from 'notation-stretcher/path-animator'
import type PathGenerator from 'notation-stretcher/path-generator'

const { link } = defineProps<{
  link?: string
}>()

const _wave = (
  x1: number, y1: number,
  x2: number, y2: number,
  height: number = 5
): string => {
  const freq = 4
  const unit = height / 2
  const operation: string[] = []
  operation.push(`M ${x1} ${y1}`)
  let curl = 0, dir = 1
  let cdx, cdy, cdl, cangle
  let edx, edy, edl, eangle
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  eangle = Math.atan2(y2 - y1, x2 - x1)
  do {
    dir *= -1
    edl = unit * freq * Math.random()
    if (curl + edl >= length) edl = length - curl
    edx = edl * Math.cos(eangle)
    edy = edl * Math.sin(eangle)
    cdl = edl * Math.random()
    cangle = eangle + Math.atan2(unit, cdl) * dir
    cdl = Math.sqrt(unit ** 2 + cdl ** 2)
    cdx = cdl * Math.cos(cangle)
    cdy = cdl * Math.sin(cangle)
    curl += edl
    operation.push(`q ${cdx} ${cdy}, ${edx} ${edy}`)
  } while (curl < length)
  return operation.join(' ')
}

const wave = (w: number, h: number) => {
  return [
    _wave(0, h, w, h),
    _wave(w, h, 0, h)
  ]
}

const container = link ? h('a', { href: link, target: '_blank' }) : h('span')

const target = ref<HTMLElement | null>(null)
const pg = ref<PathGenerator | null>(null)
const pa = ref<PathAnimatior | null>(null)

onMounted(async () => {
  if (!link) return
  const PathAnimatior = (await import(
    'notation-stretcher/path-animator')).default
  const PathGenerator = (await import(
    'notation-stretcher/path-generator')).default
  pg.value = new PathGenerator()
  pa.value = new PathAnimatior(
    target.value!, wave, {
    opacity: 0.8,
    iterations: 1
  })
})
onUnmounted(() => {
  pa.value?.remove()
})
</script>

<template>
  <div p-x-2 m-2 p-y-1
    rounded box-border
  bg-hex-8881>
    <container  p-y-1 ref="target"
      grid="~ flow-col gap-2 items-center"
      @mouseover="pa?.show(1000)"
      @mouseleave="pa?.hide(200)"
    >
      <slot />
    </container>
  </div>
</template>

<style scoped></style>