<script setup lang='ts'>
import type { Note } from '../stores/notes'
import dayjs from 'dayjs'

const { note } = defineProps<{
  note: Note
}>()
</script>

<template>
  <a
    :href="note.link"
    flex="~ items-center gap-2"
    p-y-2 op-60 hover:op-80
  >
    <span text-lg op-80>{{ note.title }}</span>
    <span text-sm op-60>{{ dayjs(note.date).format('MMM DD, YYYY') }}</span>
  </a>
</template>
