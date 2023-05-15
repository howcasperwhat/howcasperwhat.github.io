<script setup lang='ts'>
import { useData } from 'vitepress'
const props = defineProps({
  title: {
    type: String,
    default: 'default'
  },
  details: {
    type: String,
    default: 'default'
  },
  link: {
    type: String,
    required: true
  },
  tags: {
    type: Array<String>,
    default: []
  },
  color: {
    type: String,
    default: null
  }
})
const { isDark } = useData()
</script>

<template>
  <a :href="props.link" p-l-4 h-auto w-auto flex="~ col justify-start"
    :filter="isDark ? 'hover:brightness-130' : 'hover:brightness-85'" class="link-item">
    <div flex="~ items-center">
      <div class="item-title-icon" p-3>
        <slot name="icon" />
      </div>
      <div class="item-title-text" text="5 w-5" h-7 p-t-.5>
        {{ props.title }}
      </div>
    </div>
    <div p-1 overflow-hidden text-3.2 flex="~ wrap gap-1">
      <div :type="'info'" v-for="tag in props.tags"  c="gray/100"
        class="m-r-1 !bg-transparent" b-b="1px solid gray/60" m-b-1 >
        {{ tag }}
      </div>
    </div>
  </a>
</template>

<style scoped>
.item-title-icon {
  color: v-bind("props.color ? props.color : ''");
}

.item-title-text {
  color: v-bind("props.color ? props.color : ''");
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