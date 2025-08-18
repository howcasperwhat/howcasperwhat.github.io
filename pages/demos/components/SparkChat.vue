<script setup lang='ts'>
import { useStorage } from '@vueuse/core'
import { nextTick, onMounted, ref } from 'vue'
import { setAppHeight } from '../../../src/utils/layout'
import { useMessage } from '../../../src/utils/message'
import { SparkChat } from '../logics/spark-chat'
import ChatHistory from './ChatHistory.vue'

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
  'Lite',
  appid.value,
  apikey.value,
  apisecret.value,
)
useStorage('spark-chat', chat.history.qas)

function send() {
  const res = input.value.trim()
  if (loading.value)
    return
  if (res.length === 0) {
    message.warning('Please input your question!')
    return
  }
  if (res.length > 2000) {
    message.error('The message is too long!')
    return
  }
  loading.value = true
  chat.send(res, () => {
    nextTick(el.value.toTop)
  }, () => {
    loading.value = false
  }, (event) => {
    message.error('ERROR')
    // eslint-disable-next-line no-console
    console.log(event)
  })
  input.value = ''
}

function enter(event: KeyboardEvent) {
  // Chinese Inputer Enter Collision
  if (event.keyCode !== 13)
    return
  if (event.shiftKey)
    return
  event.preventDefault()
  send()
}

function autoResize() {
  // when text reduce, shrink the height
  editor.value!.style.height = 'auto'
  // when text increase, expand the height
  editor.value!.style.height = `${editor.value!.scrollHeight}px`
}

onMounted(() => {
  setAppHeight(container.value!)
  editor.value!.focus()
  autoResize()
})
</script>

<template>
  <div ref="container" grid="~ flow-row gap-4">
    <ChatHistory ref="el" :history="chat.qas" />
    <form flex="~ items-center" @submit.prevent="send()">
      <textarea
        ref="editor"
        v-model="input"
        maxlength="2000"
        b="solid gray 1px" max-h-36
        w-full

        resize-none overflow-scroll rounded bg-transparent p-2 p-r-12 c-inherit focus:outline-none @input="autoResize" @keydown.enter="enter"
      />
      <button
        absolute right-8
        :disabled="loading"
      >
        <div v-if="loading" i-svg-spinners:tadpole text-xl />
        <div v-else i-carbon:send text-xl />
      </button>
    </form>
  </div>
</template>

<style scoped></style>
