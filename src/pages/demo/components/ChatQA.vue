<script setup lang='ts'>
import { QA } from '../types/spark-chat'
import ClientMarkdown from '../../../components/ClientMarkdown.vue'
import ChatUserPanel from './ChatUserPanel.vue'
import ChatRobotPanel from './ChatRobotPanel.vue'

const props = defineProps<{
  qa: QA
}>()
const emits = defineEmits<{
  erase: []
}>()
</script>

<template>
  <div flex="~ col" p-4 box-border>
    <ChatUserPanel @erase="emits('erase')" />
    <ClientMarkdown :content="props.qa.question.content" />
  </div>
  <div flex="~ col" p-4 box-border>
    <ChatRobotPanel />
    <ClientMarkdown :content="props.qa.answer.content" />
  </div>
</template>

<style scoped></style>