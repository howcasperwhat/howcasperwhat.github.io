<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import V404 from '../../404.vue'
import ClientMarkdown from '../../../src/components/ClientMarkdown.vue'
import IDSearcher from './IDSearcher.vue'

const route = useRoute()
const id = ref(Number.parseInt(route.params.id as string ?? '1'))
const codeMD = ref('')
const exit = ref(true)
async function load(v: number) {
  import(`../stores/leetcode/${v}.ts?raw`).then(
    (code) => {
      exit.value = true
      codeMD.value = `\`\`\`ts\n${code.default}\n\`\`\``
    },
  ).catch(() => exit.value = false)
}
onMounted(async () => {
  await load(id.value)
})
</script>

<template>
  <div>
    <IDSearcher :active="id" @active="load" />
    <ClientMarkdown v-if="exit" :content="codeMD" />
    <V404 v-else />
  </div>
</template>

<style scoped></style>
