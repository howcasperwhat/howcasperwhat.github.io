<script setup lang='ts'>
import type { NoteType } from '../types/note'

defineProps<{
  type: NoteType
  active: boolean
}>()
</script>

<template>
  <RouterLink
    :to="type.link"
    select-none hover:border-none hover:no-underline
    :hover:op="active ? 100 : 80"
    :op="active ? 100 : 60" :c="type.color"
    grid="~ flow-col items-center gap-1"
  >
    <div :class="`i-${type.icon}`" text-4 sm:text-6 />
    <span text-5 font-bold op-80 sm:text-7 v-text="type.title" />
  </RouterLink>
</template>
