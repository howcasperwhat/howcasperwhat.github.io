<script setup lang='ts'>
import { useCopyCode } from 'markdown-it-copy-code'
import { useTabbar } from 'markdown-it-tabbar'
import { onMounted } from 'vue'
import CopyRight from './components/CopyRight.vue'
import MessageBox from './components/MessageBox.vue'
import NavBar from './components/NavBar.vue'
import Plum from './components/Plum.vue'
import Walk from './components/Walk.vue'

onMounted(() => {
  useCopyCode()
  useTabbar()
})
</script>

<template>
  <MessageBox />
  <NavBar />
  <main m-b-24 p-x-8>
    <div class="slide">
      <RouterView />
    </div>
  </main>
  <CopyRight />
  <Walk />
  <Plum />
</template>
