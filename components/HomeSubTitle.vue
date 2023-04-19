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
    p="l-8 r-8"
    m="t-2 b-2 l-auto r-auto"
    text="4 w-6 h-normal"
    max-w-600px
    select-none
    c-gray
  >
    {{ prefix }}
    <n-number-animation
      :from="0"
      :to="views"
      show-separator
    />
  </div>
</template>

<style scoped></style>