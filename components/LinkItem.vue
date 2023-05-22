<script setup lang='ts'>
import { useData } from 'vitepress'
import type { LinkItemProps } from '../types/LinkItemProps'
defineProps<{ item: LinkItemProps }>()
const { isDark } = useData()
</script>

<template>
  <a :href="item.link" p-l-4 h-auto w-auto flex="~ col justify-start" target="_blank"
    :filter="isDark ? 'hover:brightness-130' : 'hover:brightness-85'" class="link-item">
    <div flex="~ items-center">
      <div class="colorful" p="l-.5 y-3 r-3">
        <div :class="'i-' + item.icon" text-6 />
      </div>
      <div class="colorful" text="5 w-5" h-7 p-t-.25>
        {{ item.title }}
      </div>
    </div>
    <div p-1 overflow-hidden text-3.2 flex="~ wrap gap-1">
      <div :type="'info'" v-for="tag in item.tags"
        c="gray/100" m="r-1 b-1">
        {{ tag }}
      </div>
    </div>
  </a>
</template>

<style scoped>
.colorful {
  color: v-bind("item.color ? item.color : ''");
}

@keyframes ping {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  75%,
  100% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
}

.link-item:hover {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) 1;
}
</style>