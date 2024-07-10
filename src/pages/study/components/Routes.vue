<script setup lang='ts'>
import type { StudyType } from '../types/study'
import Route from './Route.vue'

defineProps <{
  types: StudyType[]
  active: number
}>()
</script>

<template>
  <div flex="~ col">
    <Route
      v-for="type, _ in types"
      :key="type.id" even:m-y-4
      :type="type" :active="_ === active"
    />
  </div>
</template>
