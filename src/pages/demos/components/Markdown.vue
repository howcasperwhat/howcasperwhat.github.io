<script setup lang='ts'>
import ClientMarkdown from '../../../components/ClientMarkdown.vue'
import { ref, onMounted, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { setAPPHeight } from '../../../utils/layout'
import { useThemeStore } from '../../../stores/theme'

const content = ref<string>('# Markdown')
const theme = useThemeStore()
useStorage('markdown-monaco-editor-content', content)
const monacoElement = ref<HTMLElement>()
onMounted(async () => {
  setAPPHeight(monacoElement.value!)
  if (typeof window === 'undefined') return
  const monaco = await import('monaco-editor')
  const editor = monaco.editor.create(monacoElement.value!, {
    value: content.value,
    language: 'markdown',
    minimap: { enabled: false },
    fontSize: 16,
  })
  monaco.editor.defineTheme('dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: { 'editor.background': '#1e1e1e' },
  })
  monaco.editor.defineTheme('light', {
    base: 'vs',
    inherit: true,
    rules: [],
    colors: { 'editor.background': '#e1e1e1' },
  })
  watch(theme.theme, () => {
    monaco.editor.setTheme(theme.theme.value)
  }, { immediate: true })
  editor.onDidChangeModelContent(() => {
    content.value = monaco.editor.getModels()[0].getValue()
  })
})
</script>

<template>
  <div grid="~ lg:cols-2 lt-lg:rows-2 gap-4">
    <div ref="monacoElement" />
    <ClientMarkdown :content="content" />
  </div>
</template>

<style scoped></style>