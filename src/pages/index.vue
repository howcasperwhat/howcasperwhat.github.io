<script setup lang="ts">
import Badge from './components/Badge.vue'
import SZU from './components/icons/SZU.vue'
import GitHub from './components/icons/GitHub.vue'
import NPM from './components/icons/NPM.vue'
import Research from './components/icons/Research.vue'
import CommentFormula from './components/icons/CommentFormula.vue'
import MarkdownItCopyCode from './components/icons/MarkdownItCopyCode.vue'
import MarkdownItTabbar from './components/icons/MarkdownItTabbar.vue'
import Vue from './components/icons/Vue.vue'
import Vite from './components/icons/Vite.vue'
import Unocss from './components/icons/Unocss.vue'
import Typescript from './components/icons/Typescript.vue'
import Iconify from './components/icons/Iconify.vue'
import Torch from './components/icons/Torch.vue'
</script>

<template>
  <div max-w-2xl m-x-auto>
    <div lg:text-10
      lt-lg:text-3xl
      font-bold m-b-5
      v-text="'Casper Huang'" />
    <article children:flex="~ items-center" 
      children:whitespace-nowrap
      class="slide-content">
      <p>Studying in <Badge :logo="SZU"
        link="https://www.szu.edu.cn" 
        info="ShenZhen University" /></p>
      <p>GitHub: <Badge info="howcasperwhat" :logo="GitHub"
        link="https://github.com/howcasperwhat"/>
        NPM: <Badge info="howcasperwhat" :logo="NPM"
        link="https://www.npmjs.com/~howcasperwhat"/></p>
      <p>Research: <Badge info="Recommender System"
        :logo="Research" /></p>
      <div>Projects:
        <Badge info="Comment Formula" :logo="CommentFormula"
        link="https://github.com/howcasperwhat/comment-formula"/>
        <Badge info="markdown-it-copy-code" :logo="MarkdownItCopyCode"
        link="https://github.com/howcasperwhat/markdown-it-copy-code" />
        <Badge info="markdown-it-tabbar" :logo="MarkdownItTabbar"
        link="https://github.com/howcasperwhat/markdown-it-tabbar" />
      </div>
      <p>Using 
        <Badge info="Vue" :logo="Vue"
          link="https://vuejs.org/" />
        <Badge info="Vite" :logo="Vite"
          link="https://vitejs.dev/" />
        <Badge info="Unocss" :logo="Unocss"
          link="https://unocss.dev/" />
        <Badge info="Typescript" :logo="Typescript"
          link="https://www.typescriptlang.org/" />
        <Badge info="Iconify" :logo="Iconify" 
          link="https://iconify.design/" />
        <Badge info="Torch" :logo="Torch"
          link="https://pytorch.org/" />
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