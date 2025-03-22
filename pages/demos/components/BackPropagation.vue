<script setup lang='ts'>
import { useWebWorkerFn } from '@vueuse/core'
import { ref } from 'vue'
import { modelLearn } from '../logics/bp'
import { useMessage } from '../../../src/utils/message'
import { useMarkdown } from '../../../src/utils/markdown'
import LineChart from './LineChart.vue'

const { workerFn, workerTerminate } = useWebWorkerFn(modelLearn)
const markdown = useMarkdown()
const message = useMessage()
const result = ref()
const working = ref(false)
async function learn() {
  working.value = true
  result.value = await workerFn()
  message.success(`Learning finished. The final error is ${result.value.error.at(-1)}.`, 5000)
  working.value = false
}
function terminate() {
  workerTerminate()
  message.warning('Learning terminated.', 5000)
  working.value = false
}
</script>

<template>
  <div rounded b="1 solid gray">
    <div p-4 flex="~ justify-between">
      <div grid="~ flow-row gap-2 justify-center">
        <span v-html="markdown.renderFormula('input = [0.05, 0.10]')" />
        <span v-html="markdown.renderFormula('output = [0.01, 0.99]')" />
        <span v-html="markdown.renderFormula('step = 0.01')" />
        <span v-html="markdown.renderFormula('epoch = 1000')" />
      </div>
      <div flex="~ items-center justify-between col">
        <button
          btn bg-green h-8 c-black
          :disabled="working" :op="working ? 60 : 100"
          :cursor="working ? 'wait' : 'pointer'"
          @click="learn"
        >
          <span v-if="!working" v-text="'Learn'" />
          <div v-else i-svg-spinners:tadpole text-4 />
        </button>
        <button
          btn bg-red h-8 c-black
          :disabled="!working" :op="working ? 100 : 60"
          :cursor="working ? 'pointer' : 'not-allowed'"
          @click="terminate"
        >
          <span v-text="'Terminate'" />
        </button>
      </div>
    </div>
    <div
      v-if="result" p-4 b-t="1 solid gray"
      grid="~ justify-center flow-row gap-4"
      children:flex="~ justify-center" text-sm
    >
      <span
        v-html="markdown.renderFormula(`
        ${markdown.matrixToLatex(
          [['w1', 'w2', 'b1'], ['w3', 'w4', 'b1']])
          } = ${markdown.matrixToLatex(
            result.layer1Parameter)}`)"
      />
      <span
        v-html="markdown.renderFormula(`
        ${markdown.matrixToLatex(
          [['w4', 'w5', 'b2'], ['w6', 'w7', 'b2']])
          } = ${markdown.matrixToLatex(
            result.layer2Parameter)}`)"
      />
      <LineChart
        :key="result" :data="result.error"
        x-title="Iteration" y-title="Error"
      />
    </div>
  </div>
</template>
