<script setup lang='ts'>
import type { NoteLink } from '../types/note'
import Dir from './Dir.vue'

defineProps<{ list: Array<NoteLink> }>()
</script>

<template>
  <div grid="~ gap-4 cols-1" m-y-4 m-t-8>
    <RouterLink
      v-for="note in [...list].reverse()" :key="note.id" :to="note.name"
      flex="~ items-center" children:m-r-2 hover:border-none
      text-gray="600 hover:400 dark:400 dark:hover:200"
    >
      <Dir :note="note" />
    </RouterLink>
  </div>
</template>
