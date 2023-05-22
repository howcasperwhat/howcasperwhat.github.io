<script setup lang="ts">
import { ref } from 'vue'
import HomeTitle from './HomeTitle.vue'
import HomeSubtitle from './HomeSubtitle.vue'
import LinkItems from './LinkItems.vue'
import PlumBackground from './PlumBackground.vue'
import ResProvider from './ResProvider.vue'
const items = ref([])
fetch('../res/data.json')
  .then(res => res.json())
  .then(data => items.value = data)
</script>

<template>
  <res-provider>
    <home-title />
    <home-subtitle />
    <link-items :items="items" />
    <plum-background />
  </res-provider>
</template>

<style scoped></style>