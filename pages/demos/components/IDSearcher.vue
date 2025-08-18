<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ active: number }>()
const emits = defineEmits<{
  active: [active: number]
}>()
const router = useRouter()
const id = ref(props.active)
function handleInput() {
  router.push(`${id.value}`)
  emits('active', id.value)
}
</script>

<template>
  <div
    flex="~ items-center" rd-1 p-4
    b="~ solid 1px gray-2 dark:gray-8 "
  >
    <div i-carbon:search m-2 c-gray />
    <input
      v-model="id"

      type="number"
      placeholder="1" w-full b-0 ipt text-4 c-inherit focus:outline-none
      @keyup.enter="handleInput"
    >
  </div>
</template>

<style scoped></style>
