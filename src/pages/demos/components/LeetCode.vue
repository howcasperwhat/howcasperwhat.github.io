<script setup lang="ts">
import { onMounted, ref } from 'vue';
import IDSearcher from './IDSearcher.vue'
import { useRoute } from 'vue-router'
import ClientMarkdown from '../../../components/ClientMarkdown.vue'
import V404 from '../../404.vue'
const route = useRoute()
const id = ref(parseInt(route.params.id as string ?? '1'))
const codeMD = ref('')
const exit = ref(true)
const load = async (v: number) => {
  import(`../stores/leetcode/${v}.ts?raw`).then(
    (code) => {
      exit.value = true
      codeMD.value = '```ts\n' + code.default + '\n```'
    }
  ).catch(() => exit.value = false)
}
onMounted(async () => {
  await load(id.value)
})
</script>

<template>
  <div>
    <IDSearcher :active="id" @active="load" />
    <ClientMarkdown :content="codeMD" v-if="exit" />
    <V404 v-else />
  </div>
</template>

<style scoped></style>
