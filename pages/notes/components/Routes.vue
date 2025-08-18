<script setup lang='ts'>
import { noteTypes } from '../stores/data'
import Route from './Route.vue'

defineProps<{ active: number }>()
</script>

<template>
  <div
    flex="~ wrap"
    m-y-4 children:m-b-6 children:m-r-6
  >
    <Route
      v-for="noteType in noteTypes"
      :key="noteType.id" :type="noteType"
      :active="noteType.id === active"
    />
  </div>
</template>
