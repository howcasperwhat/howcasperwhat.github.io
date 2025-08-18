<script setup lang='ts'>
import type { Project } from '../stores/projects'
import { notate } from 'animate-notation'
import { onMounted, onUnmounted, ref } from 'vue'

const { project } = defineProps<{
  project: Project
}>()

const target = ref<HTMLElement | null>(null)
const animate = ref<ReturnType<typeof notate> | null>(null)

onMounted(async () => {
  animate.value = notate(target.value!, '=', {
    opacity: 0.1,
  })
})
onUnmounted(() => {
  animate.value?.remove()
})
</script>

<template>
  <a
    ref="target"
    :href="project.link" target="_blank"
    flex="~ items-center"
    p-2
    @mouseover="animate?.show(600)"
    @mouseleave="animate?.hide(200)"
  >
    <div flex="~ col">
      <div text-lg op-60>{{ project.title }}</div>
      <div whitespace-normal text-sm op-40>{{ project.desc }}</div>
    </div>
  </a>
</template>

<style scoped></style>
