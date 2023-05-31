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
    <div><home-title p-x-8 m="x-auto" /></div>
    <div><home-subtitle p-x-8 m="y-3 x-auto" /></div>
    <div><home-links :items="items" m-auto p="x-8 y-4"/></div>
    <div><home-footer p-x-8 m="t-4 x-auto" /></div>
    <div><plum-background /></div>
  </res-provider>
</template>

<style scoped>
@keyframes slide-enter {
  0% {
    transform: translateY(10px);
    opacity: 0
  }

  to {
    transform: translateY(0);
    opacity: 100
  }
}
</style>