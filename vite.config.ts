import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import Shiki from '@shikijs/markdown-it'
import KaTeX from '@vscode/markdown-it-katex'
import Alerts from 'markdown-it-github-alerts'
import CopyCode from 'markdown-it-copy-code'
import Anchor from 'markdown-it-anchor'
import Tabbar from 'markdown-it-tabbar'
import LinkAttributes from 'markdown-it-link-attributes'
import Components from 'unplugin-vue-components/vite'
import PluginInspect from 'vite-plugin-inspect'
import AutoRouter from './plugins/auto-router'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'

export default defineConfig({
  build: {
    target: 'esnext',
  },
  ssgOptions: {
    formatting: 'minify',
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    UnoCSS(),
    PluginInspect(),
    Components({
      dirs: ['src/pages/notes/*/components'],
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.md$/, /\.vue\?vue/, /\.md\?vue/],
    }),
    Markdown({
      wrapperClasses: 'markdown',
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItUses: [
        KaTeX, Alerts, CopyCode, Tabbar
      ],
      async markdownItSetup(md) {
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
        md.use(Anchor, {
          permalink: Anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })
        md.use(await Shiki({
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
        }))
      }
    }),
    AutoRouter({
      dir: 'src/plugins/router.ts',
    })
  ],
})
