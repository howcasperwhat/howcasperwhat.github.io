<script setup lang='ts'>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
const { dynamic, animate } = defineProps<{
  dynamic: boolean
  animate?: 'array' | 'offset'
}>()

const path = ref<SVGPathElement | null>(null)
const wave = (
  x1: number, y1: number,
  x2: number, y2: number,
  height: number = 10
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
    edl = dynamic ? unit * freq * Math.random() : unit * 2
    if (curl + edl >= length) edl = length - curl
    edx = edl * Math.cos(eangle)
    edy = edl * Math.sin(eangle)
    cdl = dynamic ? edl * Math.random() : edl / 2
    cangle = eangle + Math.atan2(unit, cdl) * dir
    cdl = Math.sqrt(unit ** 2 + cdl ** 2)
    cdx = cdl * Math.cos(cangle)
    cdy = cdl * Math.sin(cangle)
    curl += edl
    operation.push(`q ${cdx} ${cdy}, ${edx} ${edy}`)
  } while (curl < length)
  return operation.join(' ')
}
const width = ref(500)
const height = ref(10)
const animation = ref<Animation | null>(null)
// confused that when set :d="wave(...)" 
// the path data length after mounting is not correct
const loading = ref(false)
const data = ref('')
onMounted(() => {
  data.value = wave(0, height.value / 2, width.value, height.value / 2)
  if (!animate) return
  nextTick(() => {
    const elem = path.value!
    const style = elem.style
    const length = elem!.getTotalLength()
    if (animate === 'array') {
      style.strokeDasharray = `0 ${length}`
      animation.value = elem.animate([
        { strokeDasharray: `0 ${length}`, offset: 0.0 },
        { strokeDasharray: `${length} 0`, offset: 0.2 },
        { strokeDasharray: `${length} 0`, offset: 0.8 },
        { strokeDasharray: `0 ${length}`, offset: 1.0 }
      ], {
        duration: 2000,
        iterations: 1,
        fill: 'forwards'
      })
    } else {
      style.strokeDasharray = `${length}`
      style.strokeDashoffset = `${length}`
      animation.value = elem.animate([
        { strokeDashoffset: `${length}`, offset: 0.0 },
        { strokeDashoffset: `0`, offset: 0.2 },
        { strokeDashoffset: `0`, offset: 0.8 },
        { strokeDashoffset: `${length}`, offset: 1.0 }
      ], {
        duration: 2000,
        iterations: 1,
        fill: 'forwards'
      })
    }
    animation.value.pause()
    animation.value.onfinish = () => {
      loading.value = false
    }
  })
})
onUnmounted(() => {
  animation.value && animation.value.cancel()
})
const handleClick = () => {
  if (loading.value) {
    animation.value!.pause()
    loading.value = false
  } else {
    animation.value!.play()
    loading.value = true
  }
}
</script>

<template>
  <button v-if="animation" btn
    @click="handleClick">
    <div i-carbon:play v-if="!loading" />
    <div i-carbon:pause v-else />
  </button>
  <svg overflow-visible
    :width="width" :height="height"
    :view-box="`0 0 ${width} ${height}`">
    <path :d="data"
      fill="none" stroke="currentColor" ref="path"
      stroke-width="2" stroke-linecap="round"
    />
  </svg>
</template>

<style scoped></style>