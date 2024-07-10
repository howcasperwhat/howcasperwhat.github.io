<script setup lang='ts'>
import type { StudyProcess } from '../types/study'

const { processes } = defineProps<{ processes: StudyProcess[] }>()
const colors = {
  done: 'green',
  continue: 'blue',
  pause: 'yellow',
}
const icons = {
  done: 'carbon:checkmark',
  continue: 'carbon:continue',
  pause: 'carbon:pause',
}
function getColor(index: number) {
  return colors[processes[index]?.status] ?? 'transparent'
}
</script>

<template>
  <div flex="~ col">
    <div v-for="process, _ in processes" :key="process.id">
      <a flex="~ items-center" :href="process.name" hover:b-b-none>
        <div
          w-1.5rem h-1.5rem rounded-full flex-center
          b=".1rem solid" hover:b=".1rem solid"
          :c="colors[process.status]"
        >
          <div :class="`i-${icons[process.status]}`" />
        </div>
        <span m-l-2 text-sm truncate v-text="process.title" />
      </a>
      <div
        text-sm text-gray p-l-5 b-l=".1rem solid"
        h-3rem relative m-l-.7rem b="!r-0 !y-0"
        :from="getColor(_)" :to="getColor(_ + 1)"
        b-gradient-to-bottom v-text="process.date"
      />
    </div>
  </div>
</template>
