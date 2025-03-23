<script setup lang='ts'>
import dayjs from 'dayjs'
import type { Note } from '../stores/notes'
const { note } = defineProps<{
  note: Note
}>()
</script>

<template>
  <a :href="note.link" 
    flex="~ items-center gap-2"
    p-y-2 op-60 hover:op-80>
    <span op-80 text-lg>{{ note.title }}</span>
    <span op-60 text-sm>{{ dayjs(note.date).format('MMM DD, YYYY') }}</span>
  </a>
</template>
