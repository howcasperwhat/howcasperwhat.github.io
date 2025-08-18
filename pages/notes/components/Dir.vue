<script setup lang='ts'>
import type { NoteLink } from '../types/note'

defineProps<{ note: NoteLink }>()
function dateFormatter(date: string, lang: string) {
  const d = new Date(date)
  return d.toLocaleString(lang, { month: 'short', day: 'numeric' })
}
</script>

<template>
  <div flex="~ items-center wrap" even:children:m-x-2>
    <span

      rounded bg-hex-8884 p-x-2 text-xs sm:text-sm v-text="note.lang"
    />
    <span text-4 sm:text-lg v-text="note.title" />
    <span v-if="note.dev" flex even:children:m-x-2>
      <div
        v-for="ico, _ in note.dev" :key="_"
        :class="`i-devicon:${ico}`"
      />
    </span>
    <span
      text-xs op-50 sm:text-sm
      v-text="dateFormatter(note.date, note.lang)"
    />
  </div>
</template>
