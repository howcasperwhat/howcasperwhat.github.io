<script setup lang='ts'>
import type { QA } from '../types/spark-chat'
import { computed, nextTick, onMounted, ref } from 'vue'
import ChatQA from './ChatQA.vue'

const props = defineProps<{
  history: QA[]
}>()
const history = computed(() => props.history)
const el = ref<HTMLElement>()
function erase(index: number) {
  history.value.splice(index, 1)
}

function toTop() {
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
  <div
    v-if="props.history.length !== 0" ref="el"
    grid="~ flow-row"
    b="solid gray 1px" overflow-x-auto overflow-y-scroll
    rounded
  >
    <div
      v-for="qa, i in props.history"
      :key="i" b-b="solid #8884 1px"
      last:b-b-0
    >
      <ChatQA :qa="qa" @erase="erase(i)" />
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar:vertical {
  background-color: #8882;
}
</style>
