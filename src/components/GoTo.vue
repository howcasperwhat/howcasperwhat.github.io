<script setup lang='ts'>
defineProps<{ prev: string, next: string }>()
</script>

<template>
  <div
    flex="~ justify-between"
    children:grid="~ flow-col gap-2 items-center"
    children:text="gray hover:unset"
    m-t-8 rounded bg-gray:10 p-2 font-mono children:w-full hover:children:b-b-none
  >
    <a
      v-if="prev" :href="prev"
      justify-start b-r="2 solid gray/40"
    >
      <div i-mdi:arrow-left-thin text-xl />
      <span v-text="prev" />
    </a>
    <a v-if="next" :href="next" justify-end>
      <span v-text="next" />
      <div i-mdi:arrow-right-thin text-xl />
    </a>
  </div>
</template>
