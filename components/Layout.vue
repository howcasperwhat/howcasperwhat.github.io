<script setup lang='ts'>
import { useData } from 'vitepress'
import MessageBox from './MessageBox.vue'
import NavBar from './NavBar.vue'
import CopyRight from './CopyRight.vue'
import Plum from './Plum.vue'
import Walk from './Walk.vue'
import GoTo from './GoTo.vue'

const { frontmatter } = useData()
</script>

<template>
  <MessageBox />
  <NavBar />
  <main
    children:m-x-auto :p-x="frontmatter.layout === 'full' ? 2 : 8"
    :children-max-w="(frontmatter.layout === 'full' || frontmatter.layout === 'large') ? 360
      : frontmatter.layout === 'medium' ? 240 : 160"
  >
    <Content class="slide" />
    <GoTo
      v-if="frontmatter.prev || frontmatter.next" 
      :prev="frontmatter.prev" :next="frontmatter.next"
    />
    <CopyRight />
  </main>
  <Walk />
  <Plum />
</template>
