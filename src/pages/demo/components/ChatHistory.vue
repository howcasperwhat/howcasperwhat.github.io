<script setup lang='ts'>
import { nextTick, onMounted, ref } from 'vue';
import type { QA } from '../types/spark-chat'
import ChatQA from './ChatQA.vue'

const props = defineProps<{
  history: QA[]
}>()
const el = ref<HTMLElement>()
const erase = (index: number) => {
  props.history.splice(index, 1)
}

const toTop = () => {
  el.value!.scrollTop = el.value!.scrollHeight - el.value!.clientHeight
}
defineExpose({ toTop })

onMounted(() => {
  // use nextTick to wait for the DOM update
  nextTick(toTop)
  // watch(props.history, () => nextTick(toTop))
})
</script>

<template>
  <div grid="~ flow-row" rounded ref="el"
    b="solid gray 1px" overflow-y-scroll
    overflow-x-auto
    v-if="props.history.length !== 0">
    <div v-for="qa, i in props.history" 
      :key="i" b-b="solid #8884 1px"
      last:b-b-0>
      <ChatQA :qa="qa" @erase="erase(i)" />
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar:vertical {
  background-color: #8882;
}
</style>