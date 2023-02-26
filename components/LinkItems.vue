<script setup lang='ts'>
import LinkItem from './LinkItem.vue'
interface Item {
  id: number
  icon: string
  title: string
  details: string
  link: string
}
defineProps({
  items: {
    type: Array<Item>,
    required: true
  }
})
</script>

<template>
  <div id="items-main">
    <link-item
      v-for="item in items"
      :key="item.id"
      :link="item.link"
      :title="item.title"
      :icon="item.icon"
      :details="item.details"
      class="items-link-item"
    />
  </div>
</template>

<style scoped>
#items-main {
  width: 88vw;
  margin-left: 6vw;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
}

.items-link-item {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>