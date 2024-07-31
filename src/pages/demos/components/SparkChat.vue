<script setup lang='ts'>
import { useMessage } from '../../../utils/message'
import { useStorage } from '@vueuse/core';
import { nextTick, onMounted, ref } from 'vue';
import { SparkChat } from '../logics/spark-chat';
import ChatHistory from './ChatHistory.vue'
import { setAPPHeight } from '../../../utils/layout'

const message = useMessage()
const editor = ref<HTMLTextAreaElement>()
const container = ref<HTMLDivElement>()
const el = ref(null as any)

const apikey = ref<string>('')
const apisecret = ref<string>('')
const appid = ref<string>('')
useStorage('spark-app-id', appid)
useStorage('spark-api-key', apikey)
useStorage('spark-api-secret', apisecret)

const input = ref<string>('')
const loading = ref<boolean>(false)
const chat = new SparkChat(
  'Lite', appid.value,
  apikey.value, apisecret.value
)
useStorage('spark-chat', chat.history.qas)

const send = () => {
  const res = input.value.trim()
  if (loading.value) return
  if (res.length === 0) {
    message.warning('Please input your question!')
    return
  }
  if (res.length > 2000) {
    message.error('The message is too long!')
    return
  }
  loading.value = true
  chat.send(res,
    () => {
      nextTick(el.value.toTop)
    },
    () => {
      loading.value = false
    },
    (event) => {
      message.error("ERROR")
      console.log(event)
    }
  )
  input.value = ''
}

const enter = (event: KeyboardEvent) => {
  // Chinese Inputer Enter Collision
  if (event.keyCode !== 13) return
  if (event.shiftKey) return
  event.preventDefault()
  send()
}

const autoResize = () => {
  // when text reduce, shrink the height
  editor.value!.style.height = 'auto'
  // when text increase, expand the height
  editor.value!.style.height = editor.value!.scrollHeight + 'px'
}


onMounted(() => {
  setAPPHeight(container.value!)
  editor.value!.focus()
  autoResize()
})
</script>

<template>
  <div grid="~ flow-row gap-4" ref="container">
    <ChatHistory :history="chat.qas" ref="el" />
    <form @submit.prevent="send()" flex="~ items-center">
      <textarea v-model="input"
        @input="autoResize"
        @keydown.enter="enter"
        ref="editor" maxlength="2000"
        b="solid gray 1px" 
        focus:outline-none
        resize-none p-r-12
        rounded max-h-36 p-2
        overflow-scroll w-full
        bg-transparent c-inherit
      />
      <button absolute right-8 
        :disabled="loading">
        <div i-svg-spinners:tadpole text-xl v-if="loading" />
        <div i-carbon:send text-xl v-else />
      </button>
    </form>
  </div>
</template>

<style scoped></style>