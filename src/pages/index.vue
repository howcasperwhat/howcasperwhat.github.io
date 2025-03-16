<script setup lang="ts">
import Badge from './components/Badge.vue'
import SZU from './components/icons/SZU.vue'
import GitHub from './components/icons/GitHub.vue'
import NPM from './components/icons/NPM.vue'
import Research from './components/icons/Research.vue'
import AnimateNotation from './components/icons/AnimateNotation.vue'
import CommentFormula from './components/icons/CommentFormula.vue'
import MarkdownItCopyCode from './components/icons/MarkdownItCopyCode.vue'
import MarkdownItTabbar from './components/icons/MarkdownItTabbar.vue'
import Vue from './components/icons/Vue.vue'
import Vite from './components/icons/Vite.vue'
import Unocss from './components/icons/Unocss.vue'
import Typescript from './components/icons/Typescript.vue'
import Iconify from './components/icons/Iconify.vue'
import Torch from './components/icons/Torch.vue'
import VSCode from './components/icons/VSCode.vue'
import { useThemeStore } from '../stores/theme'
const { theme } = useThemeStore()
</script>

<template>
  <div max-w-2xl m-x-auto>
    <div lg:text-10 lt-lg:text-3xl
      font-bold m-b-5
      v-text="'Casper Huang'" />
    <article children:flex="~ items-center wrap" 
      children:whitespace-nowrap children:m-0
      class="slide-content">
      <p>
        Studying in
        <Badge link="https://www.szu.edu.cn">
          <SZU />
          <span>ShenZhen University</span>
        </Badge>
      </p>
      <p>
        GitHub: 
        <Badge link="https://github.com/howcasperwhat">
          <GitHub />
          <span>howcasperwhat</span>
        </Badge>
        NPM:
        <Badge link="https://www.npmjs.com/~howcasperwhat">
          <NPM />
          <span>howcasperwhat</span>
        </Badge>
      </p>
      <p>
        Research: 
        <Badge raw>
          <Research />
          <span>Recommender System</span>
        </Badge>
      </p>
      <p>
        Projects:
        <Badge link="https://github.com/howcasperwhat/comment-formula">
          <CommentFormula />
          <span>comment-formula</span>
        </Badge>
        <Badge link="https://github.com/howcasperwhat/animate-notation">
          <AnimateNotation />
          <span>animate-notation</span>
        </Badge>
        <Badge link="https://github.com/howcasperwhat/markdown-it-copy-code">
          <MarkdownItCopyCode />
          <span>markdown-it-copy-code</span>
        </Badge>
        <Badge link="https://github.com/howcasperwhat/markdown-it-tabbar">
          <MarkdownItTabbar />
          <span>markdown-it-tabbar</span>
        </Badge>
      </p>
      <p>
        Using 
        <Badge link="https://vuejs.org/">
          <Vue />
          <span>Vue</span>
        </Badge>
        <Badge link="https://vitejs.dev/">
          <Vite />
          <span>Vite</span>
        </Badge>
        <Badge link="https://www.typescriptlang.org/">
          <Typescript />
          <span>Typescript</span>
        </Badge>
        <Badge link="https://unocss.dev/">
          <Unocss />
          <span>Unocss</span>
        </Badge>
        <Badge link="https://iconify.design/">
          <Iconify />
          <span>Iconify</span>
        </Badge>
        <Badge link="https://pytorch.org/">
          <Torch />
          <span>Torch</span>
        </Badge>
        <Badge link="https://code.visualstudio.com/">
          <VSCode />
          <span>VSCode</span>
        </Badge>
      </p>
      <hr b-hex-8884 w-6rem m-x-auto m-y-6 />
      <p>
        <span>Contact me:</span>
        <img :src="`/images/mail.${theme}.png`"
        :key="theme" h-8 m-t-2 m-l-2 draggable="false" />
      </p>
    </article>
  </div>
</template>

<style scoped>
.author {
  width: min-content;
  white-space: nowrap;
  background-clip: text;
  color: transparent;
  background-image: radial-gradient(240% 90% at -60% 30%, #10b981 49%, #88619a 51%);
}
</style>