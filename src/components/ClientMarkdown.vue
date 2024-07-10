<script setup lang='ts'>
import { computed } from 'vue'
import { useMarkdown } from '../utils/markdown'

const { md } = useMarkdown()
const props = defineProps<{
  content: string
}>()
const html = computed(() => md.render(props.content))
</script>

<template>
  <div class="markdown client" v-html="html" />
</template>

<style scoped></style>