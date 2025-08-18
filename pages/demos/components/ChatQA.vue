<script setup lang='ts'>
import type { QA } from '../types/spark-chat'
import ClientMarkdown from '../../../src/components/ClientMarkdown.vue'
import ChatRobotPanel from './ChatRobotPanel.vue'
import ChatUserPanel from './ChatUserPanel.vue'

const props = defineProps<{
  qa: QA
}>()
const emits = defineEmits<{
  erase: []
}>()
</script>

<template>
  <div flex="~ col" box-border p-4>
    <ChatUserPanel @erase="emits('erase')" />
    <ClientMarkdown :content="props.qa.question.content" />
  </div>
  <div flex="~ col" box-border p-4>
    <ChatRobotPanel />
    <ClientMarkdown :content="props.qa.answer.content" />
  </div>
</template>

<style scoped></style>
