<script setup lang='ts'>
import { ref, watch, onMounted } from 'vue'
import { useMarkdown } from '../utils/markdown'

const { md } = useMarkdown()
const props = defineProps<{
  content: string
}>()
const html = ref<string>('')

let timeout: NodeJS.Timeout | number | undefined = undefined
const render = () => {
  if (timeout)
    clearTimeout(timeout as number)
  timeout = setTimeout(() => {
    html.value = md.render(props.content)
  }, 200)
}

onMounted(() => {
  watch(() => props.content, render, { immediate: true })
})
</script>

<template>
  <div class="markdown client" v-html="html" />
</template>

<style scoped></style>