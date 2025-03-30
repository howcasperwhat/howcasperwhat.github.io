<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue'
import { notate } from 'animate-notation'
import { Project } from '../stores/projects';

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
  <a ref="target"
    :href="project.link" target="_blank"
    flex="~ items-center"
    @mouseover="animate?.show(600)"
    @mouseleave="animate?.hide(200)"
    p-2
  >
    <div flex="~ col">
      <div op-60 text-lg>{{ project.title }}</div>
      <div op-40 text-sm whitespace-normal>{{ project.desc }}</div>
    </div>
  </a>
</template>

<style scoped></style>