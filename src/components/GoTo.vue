<script setup lang='ts'>
defineProps<{ prev: string, next: string }>()
</script>

<template>
  <div 
    flex="~ justify-between" hover:children:b-b-none
    children:grid="~ flow-col gap-2 items-center"
    children:text="gray hover:unset" children:w-full
    font-mono bg-gray:10 p-2 rounded m-t-8
  >
    <a 
      :href="prev" v-if="prev"
      justify-start b-r="2 solid gray/40"
    >
      <div i-mdi:arrow-left-thin text-xl />
      <span v-text="prev" />
    </a>
    <a :href="next" justify-end v-if="next">
      <span v-text="next" />
      <div i-mdi:arrow-right-thin text-xl />
    </a>
  </div>
</template>