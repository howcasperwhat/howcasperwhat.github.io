import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import Shiki from '@shikijs/markdown-it'
import KaTeX from '@vscode/markdown-it-katex'
import Alerts from 'markdown-it-github-alerts'
import CopyCode from 'markdown-it-copy-code'
import Tabbar from 'markdown-it-tabbar'
import Monaco from 'vite-plugin-monaco-editor'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    UnoCSS(),
    Monaco({}),
    Markdown({
      wrapperClasses: 'markdown',
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItUses: [
        KaTeX, Alerts, CopyCode, Tabbar,
        await Shiki({
          defaultColor: false,
          defaultLanguage: 'ts',
          fallbackLanguage: 'ts',
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
          transformers: [
            transformerTwoslash({
              explicitTrigger: true,
              renderer: rendererRich(),
            })
          ]
        })
      ],
    })
  ],
})
