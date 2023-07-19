<script setup lang='ts'>
import { useConfigStore } from '../stores/config'
const { author, license, setupYear, licenseURL } = useConfigStore()
</script>

<template>
  <div text-4 c-gray-500 p-y-6 children:m-r-1 class="slide-content">
    <a v-text="`${license} License`" :href="licenseURL" target="_blank"
    c-inherit hover:c-inherit/>
    <span v-text="`${setupYear}-present`" />
    <span v-text="`©${author}`" />
  </div>
</template>

<style scoped></style>