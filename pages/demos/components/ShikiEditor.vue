<script setup lang='ts'>
import { createHighlighter } from 'shiki'
import { nextTick, onMounted, ref, watch } from 'vue'
import { useThemeStore } from '../../../src/stores/theme'

const content = defineModel<string>()
const rendered = ref<string>()
const { theme } = useThemeStore()

const editor = ref<HTMLTextAreaElement>()
const preview = ref<HTMLDivElement>()

let highlighter: Awaited<ReturnType<typeof createHighlighter>>

function syncScroll() {
  const e = editor.value!
  const p = preview.value!
  p.scrollTop = e.scrollTop
  p.scrollLeft = e.scrollLeft
}

function render(code: string = '') {
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
    }],
  })
}

onMounted(async () => {
  highlighter = await createHighlighter({
    themes: ['vitesse-dark', 'vitesse-light'],
    langs: ['typescript', 'javascript', 'markdown', 'html', 'css', 'json', 'vue', 'jsx', 'tsx'],
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
    <div
      ref="preview" pointer-events-none z-10 box-border h-full w-full overflow-auto p-4
    >
      <span
        children-m-0 class="demo-markdown-mock"
        v-html="rendered"
      />
    </div>
    <textarea
      ref="editor" v-model="content"
      inset-0

      z-5 resize-none whitespace-pre b-0 bg-transparent p-4 text-transparent tab-4 caret-hex-10b981 outline-0 autocomplete="off"
      autocorrect="off" autocapitalize="off"
      spellcheck="false" @scroll="syncScroll()"
    />
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
