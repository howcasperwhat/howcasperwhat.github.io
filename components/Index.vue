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
    <home-title p-x-8 m="x-auto" />
    <home-subtitle p-x-8 m="y-3 x-auto" />
    <link-items :items="items" m-auto p="x-8 y-4"/>
    <plum-background />
  </res-provider>
</template>

<style scoped></style>