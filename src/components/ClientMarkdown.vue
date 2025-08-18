<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue'
import { useMarkdown } from '../utils/markdown'

const props = defineProps<{
  content: string
}>()
const { md } = useMarkdown()
const html = ref<string>('')

let timeout: NodeJS.Timeout | number | undefined
function render() {
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
