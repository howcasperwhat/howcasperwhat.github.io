<script setup lang="ts">
import { ref } from 'vue';
import { studyProcesses } from '../stores/data'
import Process from '../components/Process.vue';

const emit = defineEmits<{
  active: [active: number]
}>()
const active = ref(2)
emit('active', active.value)

</script>

<template>
  <Process :processes="studyProcesses[active]" class="slide-content" />
</template>