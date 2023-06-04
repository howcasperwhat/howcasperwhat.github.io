<script setup lang="ts">
import Title from './Title.vue'
import ViewCounter from './ViewCounter.vue'
import Footer from './Footer.vue'
import Plum from './Plum.vue'
import AppLink from './AppLink.vue'
import { items } from '../scripts/data'
</script>

<template>
  <main class="slide-enter" children-max-w-150 children-m-x-auto children-p-x-8>
    <Title />
    <ViewCounter m-y-3 />
    <div grid="~ gap-4" p-y-3>
      <AppLink v-for="item in items" :item="item" />
    </div>
    <Footer m-y-3 />
  </main>
  <Plum />
</template>

<style scoped lang="sass">
@keyframes enter
  0%
    opacity: 0
    transform: translateY(0.75rem)

  100%
    opacity: 1
    transform: translateY(0)

.slide-enter *
  --stagger: 0
  --delay: 150ms
  --start: 0ms
  animation: enter 0.5s both 1
  animation-delay: calc(var(--start) + var(--stagger) * var(--delay))

@for $i from 1 through 32
  .slide-enter *:nth-child(#{$i})
    --stagger: #{$i}

.slide-enter>*:last-child
  --stagger: v-bind(items.length + 1)
</style>