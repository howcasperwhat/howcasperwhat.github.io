<script setup lang='ts'>
const emits = defineEmits<{
  erase: []
}>()
</script>

<template>
  <div flex="~ items-center justify-between">
    <div flex="~ items-center">
      <div i-mage:user-circle m-r-2 text-xl c-blue />
      <div>You</div>
    </div>
    <div flex="~ items-center">
      <button @click="emits('erase')">
        <div i-hugeicons:cancel-01 />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
