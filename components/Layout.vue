<script setup lang='ts'>
import MessageBox from './MessageBox.vue'
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import Plum from './Plum.vue'
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <MessageBox />
  <NavBar />
  <main children:m-x-auto :p-x="frontmatter.layout === 'full' ? 2 : 8" 
    :children-max-w="(frontmatter.layout === 'full' || frontmatter.layout === 'large') ? 360 :
      frontmatter.layout === 'medium' ? 240 : 160">
    <Content class="slide" />
    <Footer />
  </main>
  <Plum />
</template>

<style scoped></style>
