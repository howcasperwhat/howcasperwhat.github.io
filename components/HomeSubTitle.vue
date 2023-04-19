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
  <div id="sub-title-main">
    {{ prefix }}
    <n-number-animation
      :from="0"
      :to="views"
      show-separator
    />
  </div>
</template>

<style scoped>
#sub-title-main {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 56px;
  max-width: 600px;
  margin: auto;
  user-select: none;
  color: #888;
}
</style>