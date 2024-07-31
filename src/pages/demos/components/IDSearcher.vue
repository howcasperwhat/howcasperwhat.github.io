<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ active: number }>()
const emits = defineEmits<{
  active: [active: number]
}>()
const router = useRouter()
const id = ref(props.active)
const handleInput = () => {
  router.push(`${id.value}`)
  emits('active', id.value)
}
</script>

<template>
  <div flex="~ items-center" rd-1 p-4
    b="~ solid 1px gray-2 dark:gray-8 ">
    <div i-carbon:search m-2 c-gray />
    <input type="number" ipt w-full
      c-inherit b-0 focus:outline-none
      placeholder="1"
      text-4 @keyup.enter="handleInput"
      v-model="id" />
  </div>
</template>

<style scoped></style>