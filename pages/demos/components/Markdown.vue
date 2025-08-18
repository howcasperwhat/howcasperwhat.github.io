<script setup lang='ts'>
import { useStorage } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import ClientMarkdown from '../../../src/components/ClientMarkdown.vue'
import { getAppHeight } from '../../../src/utils/layout'
import ShikiEditor from './ShikiEditor.vue'

const container = ref<HTMLDivElement>()
const content = ref<string>('# Markdown')
useStorage('markdown-monaco-editor-content', content)
onMounted(() => {
  container.value!.style.height = getAppHeight()
  container.value!.style.maxHeight = getAppHeight()
})
</script>

<template>
  <div
    ref="container" grid="~ cols-2 gap-4"
    children-bg="#eee6 dark:#2226"
    children:rd-4
  >
    <ShikiEditor v-model="content" />
    <ClientMarkdown
      :content="content"
      overflow-auto p-4
    />
  </div>
</template>

<style scoped></style>
