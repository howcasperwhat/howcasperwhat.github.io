<script setup lang='ts'>
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'
import { default as NNumberAnimation } from 'naive-ui/lib/number-animation/src/NumberAnimation'
const url = "https://finicounter.eu.org/counter?host=howcasperwhat.github.io"
const prefix = 'Total Views: '
const views = ref(0)
useFetch(url, {
  afterFetch(data) {
    views.value = JSON.parse(data.data).views
    return data
  }
}
)
</script>

<template>
  <div
    text="4 w-6 h-normal" max-w-600px
    c-gray m-x-auto p-x-8 m-y-2
  >
    {{ prefix }}
    <n-number-animation :from="0"
      :to="views" show-separator />
  </div>
</template>

<style scoped></style>