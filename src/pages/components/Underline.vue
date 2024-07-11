<script setup lang='ts'>
import { ref, onMounted, nextTick, watch } from 'vue'

interface Properties {
  show?: boolean
  height?: number
  speed?: number
  thickness?: string
  color?: string
  opacity?: number
}
const props = defineProps<Properties>()

const slot = ref<HTMLElement>()
const path = ref<SVGPathElement>()

const d = ref('')

const color = ref(props.color ?? 'currentColor')
const thickness = ref(props.thickness ?? '2px')
const opacity = ref(props.opacity ?? 1)

const height = ref(props.height ?? 5)
const width = ref(0)

const speed = ref(props.speed ?? 1)
const trace = ref(0)
const step = ref(0)
const length = ref(0)

const process = ref<'i' | 'o'>()

const wave = (width: number, height: number) => {
  const unit = height / 2
  const operation = []
  operation.push(`M 0 0`)
  let curx = unit * 4 * Math.random()
  if (curx <= width)
    operation.push(`q ${unit} -${unit}, ${curx} 0`)
  do {
    const dx = unit * 4 * Math.random()
    const dy = 0
    curx += dx
    if (curx >= width) break
    operation.push(`t ${dx} ${dy}`)
  } while (true)
  return operation.join(' ')
}

const paint = () => {
  requestAnimationFrame(() => {
    trace.value += step.value
    trace.value = Math.min(trace.value, length.value)
    path.value!.style.strokeDasharray = `${trace.value} ${length.value - trace.value}`
    if (trace.value === length.value) return
    process.value === 'i' ? paint() : erase()
  })
}

const erase = () => {
  requestAnimationFrame(() => {
    trace.value -= step.value
    trace.value = Math.max(trace.value, 0)
    path.value!.style.strokeDasharray = `${trace.value} ${length.value - trace.value}`
    if (trace.value === 0) {
      // Browser Bug: dasharray = 0 0 will display a small dot
      path.value!.style.strokeOpacity = `0`
      return
    }
    process.value === 'o' ? erase() : paint()
  })
}

onMounted(() => {
  const slotContainer = slot.value!
  const slotRect = slotContainer.getBoundingClientRect()
  width.value = slotRect.width
  d.value = wave(width.value, height.value)
  nextTick(() => {
    length.value = path.value!.getTotalLength()
    step.value = speed.value * length.value / 10
    // Browser Bug: dasharray = 0 0 will display a small dot
    path.value!.style.strokeDasharray = `0 ${length.value}`
    path.value!.style.strokeOpacity = `0`
    watch(() => props.show, () => {
      path.value!.style.strokeOpacity = `${opacity.value}`
      process.value = props.show ? 'i' : 'o'
      switch (process.value) {
        case 'i': paint(); break;
        case 'o': erase(); break;
      }
    })
  })
})
</script>

<template>
  <div>
    <div ref="slot">
      <slot />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" 
      :width="width" :height="height" 
      :viewBox="`0 -${height / 2} ${width} ${height}`"
      :stroke="color" :stroke-width="thickness"
      fill="none" stroke-linecap="round"
      fixed bottom-0 :stroke-opacity="opacity"
    >
      <path :d="d" ref="path" />
    </svg>
  </div>
</template>

<style scoped></style>