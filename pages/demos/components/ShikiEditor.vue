<script setup lang='ts'>
import { ref, watch, onMounted, nextTick } from 'vue'
import { useThemeStore } from '../../../src/stores/theme'
import { createHighlighter } from 'shiki'

const content = defineModel<string>()
const rendered = ref<string>()
const { theme } = useThemeStore()

const editor = ref<HTMLTextAreaElement>()
const preview = ref<HTMLDivElement>()

let highlighter: Awaited<ReturnType<typeof createHighlighter>>

const syncScroll = () => {
  const e = editor.value!
  const p = preview.value!
  p.scrollTop = e.scrollTop
  p.scrollLeft = e.scrollLeft
}

const render = (code: string = '') => {
  rendered.value = highlighter.codeToHtml(code, {
    lang: 'markdown',
    theme: `vitesse-${theme.value}`,
    transformers: [{
      preprocess(code) {
        // Workaround for https://github.com/shikijs/shiki/issues/608
        // When last span is empty, it's height is 0px
        // so add a newline to render it correctly
        if (code.endsWith('\n'))
          return `${code}\n`
      },
    }]
  })
}


onMounted(async () => {
  highlighter = await createHighlighter({
    themes: ['vitesse-dark', 'vitesse-light'],
    langs: ['typescript', 'javascript', 'markdown',
      'html', 'css', 'json', 'vue', 'jsx', 'tsx'],
  })

  watch(content, () => {
    render(content.value)
    nextTick(syncScroll)
  }, { immediate: true })

  watch(theme, () => {
    render(content.value)
    nextTick(syncScroll)
  })
})
</script>

<template>
  <div relative class="demo-markdown-wrapper">
    <div overflow-auto w-full h-full z-10 box-border
      ref="preview" pointer-events-none p-4>
      <span v-html="rendered" children-m-0 
        class="demo-markdown-mock" />
    </div>
    <textarea v-model="content" ref="editor"
      @scroll="syncScroll()"
      b-0 whitespace-pre inset-0 outline-0
      resize-none bg-transparent caret-hex-10b981
      tab-4 z-5 p-4 text-transparent
      autocomplete="off" autocorrect="off" 
      autocapitalize="off" spellcheck="false" />
  </div>
</template>

<style>
.demo-markdown-mock button.markdown-copy-code-button {
  display: none;
}

.demo-markdown-wrapper>* {
  line-height: 1.8;
  font-family: 'DM Mono', 'Input Mono', 'Fira Code', monospace;
  font-size: 1rem;
  position: absolute;
}

.demo-markdown-mock * {
  background-color: transparent !important;
  font-family: 'DM Mono', 'Input Mono', 'Fira Code', monospace;
  font-size: 1rem;
}
</style>