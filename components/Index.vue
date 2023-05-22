<script setup lang="ts">
import HomeTitle from './HomeTitle.vue'
import HomeSubtitle from './HomeSubtitle.vue'
import LinkItems from './LinkItems.vue'
import PlumBackground from './PlumBackground.vue'
import ResProvider from './ResProvider.vue'
import { items } from '../res/data'
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