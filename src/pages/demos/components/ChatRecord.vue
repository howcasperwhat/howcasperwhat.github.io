<script setup lang='ts'>
import type { Record } from '../types/spark-chat'
import ClientMarkdown from '../../../components/ClientMarkdown.vue'
import { computed } from 'vue';

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
  <div flex="~ col" p-4 box-border max-w-166>
    <div flex="~ items-center">
      <template v-if="props.record.role === 'assistant'">
        <div i-mage:robot m-r-2 c-green text-xl />
        <div>Spark Robot</div>
      </template>
<template v-else>
        <div i-mage:user-circle m-r-2 c-blue text-xl />
        <div>You</div>
        <button>
          <div i-mdi:delete m-l-2 c-red text-xl />
        </button>
      </template>
</div>
<ClientMarkdown :content="content" w-full />
</div>
</template>

<style scoped></style>