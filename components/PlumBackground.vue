<script setup lang='ts'>
import { onMounted, ref, computed } from 'vue';
const el = ref<HTMLCanvasElement>()
const ctx = computed(() => el.value!.getContext('2d')!)
const WIDTH = 1920
const HEIGHT = 1080
const LENGTH = 8
const NSEED = 12
const MINDEPTH = 2

interface Point {
  x: number
  y: number
}

interface Branch {
  start: Point
  length: number
  angle: number
}

function init(): void {
  const canvas = el.value!
  canvas.width = WIDTH
  canvas.height = HEIGHT
  ctx.value.strokeStyle = '#88888888'

  for (let i = 0; i < NSEED; ++i) {
    step(generateSeed())
  }
}

const pendingTasks: Function[] = []

function generateSeed(): Branch {
  const side = Math.ceil(Math.random() / 0.25)
  const point = {
    x: side % 2 === 1 ? side == 1 ? 0 : WIDTH : Math.random() * WIDTH,
    y: side % 2 === 0 ? side == 2 ? 0 : HEIGHT : Math.random() * HEIGHT
  }
  const angle = Math.atan2(HEIGHT / 2 - point.y, WIDTH / 2 - point.x)
  return {
    start: point,
    length: LENGTH,
    angle: angle
  }
}

function step(b: Branch, depth = 0) {
  const end = getEndPoint(b)
  drawBranch(b)

  if (depth < MINDEPTH || Math.random() < 0.5) {
    pendingTasks.push(() => {
      step({
        start: end,
        length: b.length + Math.random() * 4 - 2,
        angle: b.angle - 0.4 * Math.random()
      }, depth + 1)
    })
  }
  if (depth < MINDEPTH || Math.random() < 0.5) {
    pendingTasks.push(() => {
      step({
        start: end,
        length: b.length + Math.random() * 4 - 2,
        angle: b.angle + 0.4 * Math.random()
      }, depth + 1)
    })
  }
}

function frame() {
  const tasks = [...pendingTasks]
  pendingTasks.length = 0
  tasks.forEach(task => task())
}

let framesCount = 0
function startFrame() {
  requestAnimationFrame(() => {
    ++framesCount
    if (framesCount % 6 === 0)
      frame()
    startFrame()
  })
}

startFrame()

function lineTo(p1: Point, p2: Point): void {
  ctx.value.beginPath()
  ctx.value.moveTo(p1.x, p1.y)
  ctx.value.lineTo(p2.x, p2.y)
  ctx.value.stroke()
}

function getEndPoint(b: Branch): Point {
  const { start, length, angle } = b
  return {
    x: start.x + length * Math.cos(angle),
    y: start.y + length * Math.sin(angle)
  }
}

function drawBranch(b: Branch) {
  lineTo(b.start, getEndPoint(b))
}

onMounted(() => {
  init()
})
</script>

<template>
  <canvas
    ref="el"
    id="plum-background"
  />
</template>

<style scoped>
#plum-background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>