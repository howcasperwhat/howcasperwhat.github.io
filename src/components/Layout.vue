<script setup lang='ts'>
import CopyRight from './CopyRight.vue'
import MessageBox from './MessageBox.vue'
import NavBar from './NavBar.vue'
import Plum from './Plum.vue'
import Walk from './Walk.vue'
</script>

<template>
  <MessageBox />
  <NavBar />
  <main>
    <RouterView class="slide" />
    <CopyRight />
  </main>
  <Walk />
  <Plum />
</template>
