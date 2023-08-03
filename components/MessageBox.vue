<script setup lang='ts'>
import { onMounted } from 'vue';
import { useMessageProperties } from '../utils/message'
const message = useMessageProperties()
const colors = {
  success: 'green',
  info: 'blue',
  warning: 'yellow',
  error: 'red'
}
const icons = {
  success: 'carbon-checkmark-filled',
  info: 'carbon-information-filled',
  warning: 'carbon-warning-filled',
  error: 'carbon-close-filled'
}
onMounted(() => {
  message.messageBox.value = document.getElementById('messageBox')!
})
</script>

<template>
  <div v-show="!message.isHidden.value" id="messageBox"
    rounded min-w-36 max-w-2xl float-initial b-2 b-solid
    z-64 grid="~ flow-col gap-1 items-center" p-y-2 p-x-4
    :class="`b-${colors[message.type.value]}/80 bg-${colors[message.type.value]}/10`">
    <div :class="`i-${icons[message.type.value]} c-${colors[message.type.value]}`" />
    <span v-text="message.content.value" m-l-2 />
  </div>
</template>

<style scoped>
#messageBox {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}
</style>