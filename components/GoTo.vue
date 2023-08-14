<script setup lang='ts'>
defineProps<{ prev: string, next: string }>()
</script>

<template>
  <hr />
  <div 
    flex="~ justify-between" hover:children:b-b-none
    children:grid="~ flow-col gap-2 items-center"
    children:text="gray hover:unset" children:w-full
  >
    <a :href="prev" justify-start v-if="prev">
      <div i-mdi:arrow-left />
      <span v-text="prev" />
    </a>
    <a :href="next" justify-end v-if="next">
      <span v-text="next" />
      <div i-mdi:arrow-right />
    </a>
  </div>
</template>