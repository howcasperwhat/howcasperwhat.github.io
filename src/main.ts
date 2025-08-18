import NProgress from 'nprogress'
import { ViteSSG } from 'vite-ssg'
import Layout from './App.vue'
import { routes } from './plugins/router'
import 'uno.css'
import './styles/slide.sass'
import './styles/custom.sass'
import './styles/markdown.sass'
import './styles/progress.sass'
import './styles/scrollbar.sass'
import '@shikijs/twoslash/style-rich.css'
import 'markdown-it-github-alerts/styles/github-base.css'
import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-media.css'
import 'markdown-it-copy-code/styles/base.css'
import 'markdown-it-copy-code/styles/large.css'
import 'markdown-it-tabbar/styles/base.css'

// import { createApp } from 'vue'
// import router from './plugins/router'
// const app = createApp(Layout)
// app.use(router)
// app.use(header)
// app.mount('#app')

export const createApp = ViteSSG(
  Layout,
  { routes },
  ({ router }) => {
    if (typeof window === 'undefined')
      return
    NProgress.configure({ showSpinner: false })
    router.beforeEach(() => {
      NProgress.start()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  },
)
