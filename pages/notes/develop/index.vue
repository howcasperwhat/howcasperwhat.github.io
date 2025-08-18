<script setup lang="ts">
import { ref } from 'vue'
import Dirs from '../components/Dirs.vue'
import { noteLists } from '../stores/data'

const emit = defineEmits<{
  active: [active: number]
}>()

const active = ref(0)
emit('active', active.value)
</script>

<template>
  <Dirs
    :list="noteLists[active]"
    class="slide-content"
  />
</template>
