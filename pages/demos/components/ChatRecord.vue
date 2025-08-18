<script setup lang='ts'>
import type { Record } from '../types/spark-chat'
import { computed } from 'vue'
import ClientMarkdown from '../../../src/components/ClientMarkdown.vue'

const props = defineProps<{
  record: Record
}>()
const content = computed(() => {
  return props.record.content
  // .replaceAll('//n', '\n')
  // .replaceAll('//"', '/"')
})
</script>

<template>
  <div flex="~ col" box-border max-w-166 p-4>
    <div flex="~ items-center">
      <template v-if="props.record.role === 'assistant'">
        <div i-mage:robot m-r-2 text-xl c-green />
        <div>Spark Robot</div>
      </template>
      <template v-else>
        <div i-mage:user-circle m-r-2 text-xl c-blue />
        <div>You</div>
        <button>
          <div i-mdi:delete m-l-2 text-xl c-red />
        </button>
      </template>
    </div>
    <ClientMarkdown :content="content" w-full />
  </div>
</template>

<style scoped></style>
