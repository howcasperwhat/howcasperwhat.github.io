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
  <div id="items-parent">
    <div id="items-main">
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

<style scoped>
#items-parent {
  padding: 1.25rem;
  width: 100vw;
}

#items-main {
  margin: auto;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.5rem;
}
</style>