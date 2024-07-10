<script setup lang='ts'>
import { onMounted } from 'vue'
import { useMessageProperties } from '../utils/message'

const message = useMessageProperties()
const colors = {
  success: 'green',
  info: 'blue',
  warning: 'yellow',
  error: 'red',
}
const icons = {
  success: 'carbon-checkmark-filled',
  info: 'carbon-information-filled',
  warning: 'carbon-warning-filled',
  error: 'carbon-close-filled',
}
onMounted(() => {
  message.messageBox.value = document.getElementById('messageBox')!
})
</script>

<template>
  <div
    v-show="!message.isHidden.value" id="messageBox"
    rounded min-w-36 max-w-2xl float-initial b-0 b-solid
    z-64 grid="~ flow-col gap-1 items-center" p-y-2 p-x-4
    :b="colors[message.type.value!]" b-op-80
    bg-gray="300 dark:800"
  >
    <div 
      :c="colors[message.type.value!]"
      :class="`i-${icons[message.type.value!]}`"
    />
    <span m-l-2 v-text="message.content.value" />
  </div>
</template>

<style scoped lang="sass">
#messageBox
  position: fixed
  left: 50%
  transform: translateX(-50%)
</style>
