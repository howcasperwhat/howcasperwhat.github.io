<script setup lang='ts'>
import ClientMarkdown from '../../../src/components/ClientMarkdown.vue'
import ShikiEditor from './ShikiEditor.vue'
import { ref, onMounted } from 'vue'
import { useStorage } from '@vueuse/core'
import { getAppHeight } from '../../../src/utils/layout'

const container = ref<HTMLDivElement>()
const content = ref<string>('# Markdown')
useStorage('markdown-monaco-editor-content', content)
onMounted(() => {
  container.value!.style.height = getAppHeight()
  container.value!.style.maxHeight = getAppHeight()
})
</script>

<template>
  <div grid="~ cols-2 gap-4" ref="container"
    children-bg="#eee6 dark:#2226" 
    children:rd-4>
    <ShikiEditor v-model="content" />
    <ClientMarkdown :content="content" 
      p-4 overflow-auto />
  </div>
</template>

<style scoped></style>