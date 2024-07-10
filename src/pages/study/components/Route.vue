<script setup lang='ts'>
import type { StudyType } from '../types/study'

defineProps<{
  type: StudyType
  active: boolean
}>()
</script>

<template>
  <div flex="~ items-center" text-xl sm:text-2xl>
    <div :process="type.status" />
    <RouterLink
      :to="type.link" hover:b-b-none
      font-bold even:m-y-2 m-l-3 truncate
      :hover:op="active ? 100 : 85" :op="active ? 100 : 70"
      v-text="type.title"
    />
  </div>
</template>
