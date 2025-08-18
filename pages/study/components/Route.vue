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
      :to="type.link"
      m-l-3 truncate font-bold even:m-y-2 hover:b-b-none
      :hover:op="active ? 100 : 85" :op="active ? 100 : 70"
    >
      {{ type.title }}
    </RouterLink>
  </div>
</template>
