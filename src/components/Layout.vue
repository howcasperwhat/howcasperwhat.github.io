<script setup lang='ts'>
import MessageBox from './MessageBox.vue'
import NavBar from './NavBar.vue'
import CopyRight from './CopyRight.vue'
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
