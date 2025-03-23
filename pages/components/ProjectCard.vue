<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue'
import { notate } from 'animate-notation'
import { Project } from '../stores/projects';

const { project } = defineProps<{
  project: Project
}>()

const display = ref(true)

const target = ref<HTMLElement | null>(null)
const pa = ref<ReturnType<typeof notate> | null>(null)

onMounted(async () => {
  // TODO: Why getBoundingClientRect() is not working at the first time?
  setTimeout(() => {
    pa.value = notate(target.value!, '=', {
      opacity: 0.1,
      iterations: 1
    })
  }, 100)
})
onUnmounted(() => {
  pa.value?.remove()
})
</script>

<template>
  <a ref="target"
    :href="project.link" target="_blank"
    flex="~ items-center"
    @mouseover="pa?.show(600)"
    @mouseleave="pa?.hide(200)"
    p-2
  >
    <img :src="`/icons/${project.icon}.svg`" m-r-4
      v-if="display" @error="display = false"
    />
    <div flex="~ col">
      <div op-60 text-lg>{{ project.title }}</div>
      <div op-40 text-sm whitespace-normal>{{ project.desc }}</div>
    </div>
  </a>
</template>

<style scoped></style>