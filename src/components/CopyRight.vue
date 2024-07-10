<script setup lang='ts'>
import { useConfigStore } from '../stores/config'

const { author, license, setupYear } = useConfigStore()
</script>

<template>
  <footer text-4 c-gray-500 class="slide-content">
    <div class="copyright-button"
      flex="~ items-center justify-center"
      fixed absolute left-3 bottom-3
      w-10 h-10 rounded-full z-10
      hover:bg-hex-8884 hover:cursor-help>
      <div i-hugeicons:license-pin text-lg />
    </div>
    <div class="copyright-content" 
      fixed absolute w-0 whitespace-nowrap
      left-16 bottom-6 overflow-hidden>
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
