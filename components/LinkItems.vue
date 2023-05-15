<script setup lang='ts'>
import LinkItem from './LinkItem.vue'
import type { LinkItemProps } from '../types/LinkItemProps'
defineProps({
  items: {
    type: Array<LinkItemProps>,
    required: true
  }
})
</script>

<template>
  <div p-5>
    <div
      m-auto
      max-w-600px
      grid="~ gap-6"
      style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));"
    >
      <link-item
        v-for="item in items"
        :key="item.id"
        :link="item.link"
        :title="item.title"
        :details="item.details"
        :tags="item.tags"
        :color="item.color"
        class="items-link-item"
      >
        <template #icon>
          <component :is="item.icon" />
        </template>
      </link-item>
    </div>
  </div>
</template>

<style scoped></style>