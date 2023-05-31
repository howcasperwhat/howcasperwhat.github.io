<script setup lang="ts">
import HomeTitle from './HomeTitle.vue'
import HomeSubtitle from './HomeSubtitle.vue'
import HomeLinks from './HomeLinks.vue'
import HomeFooter from './HomeFooter.vue'
import PlumBackground from './PlumBackground.vue'
import ResProvider from './ResProvider.vue'
import { items } from '../res/data'
</script>

<template>
  <res-provider id="root">
    <home-title p-x-8 m="x-auto" />
    <home-subtitle p-x-8 m="y-3 x-auto" />
    <home-links :items="items" m-auto p="x-8 y-4"/>
    <home-footer p-x-8 m="t-4 x-auto" />
    <plum-background />
  </res-provider>
</template>

<style scoped></style>