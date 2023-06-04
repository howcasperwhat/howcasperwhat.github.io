<script setup lang='ts'>
import { useConfigStore } from '../stores/config'
const { author, license, setupYear, licenseURL } = useConfigStore()
</script>

<template>
  <div text="4" flex="~" c-gray-500>
    <a v-text="`${license} License`" :href="licenseURL" target="_blank" 
      hover:b-b="1px solid gray/80"/>
    <span v-text="` ${setupYear}-present ©${author}`" />
  </div>
</template>

<style scoped></style>