<script setup lang='ts'>
import MessageBox from './components/MessageBox.vue'
import NavBar from './components/NavBar.vue'
import CopyRight from './components/CopyRight.vue'
import Plum from './components/Plum.vue'
import Walk from './components/Walk.vue'
import { onMounted } from 'vue'
import { useCopyCode } from 'markdown-it-copy-code'
import { useTabbar } from 'markdown-it-tabbar'
onMounted(() => {
  useCopyCode()
  useTabbar()
})
</script>

<template>
  <MessageBox />
  <NavBar />
  <main p-x-8 m-b-24>
    <div class="slide">
      <RouterView />
    </div>
  </main>
  <CopyRight />
  <Walk />
  <Plum />
</template>
