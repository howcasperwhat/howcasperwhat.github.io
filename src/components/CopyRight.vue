<script setup lang='ts'>
import { useConfigStore } from '../stores/config'

const { author, license, setupYear } = useConfigStore()
</script>

<template>
  <footer text-4 c-gray-500 class="slide-content">
    <div
      class="copyright-button"
      flex="~ items-center justify-center"

      absolute fixed bottom-3 left-3 z-10 h-10 w-10 rounded-full hover:cursor-help hover:bg-hex-8884
    >
      <div i-hugeicons:license-pin text-lg />
    </div>
    <div
      class="copyright-content"

      absolute fixed bottom-6 left-16 w-0 overflow-hidden whitespace-nowrap
    >
      {{ `
          ${license} License
          ${setupYear}-present
          ©${author}
      ` }}
    </div>
  </footer>
</template>

<style scoped>
@keyframes slide-right {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.copyright-button:hover+.copyright-content {
  display: block;
  animation: slide-right 1s forwards;
}
</style>
