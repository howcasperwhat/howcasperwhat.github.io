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
  <a
    :href="props.link"
    target="_blank"
    p-l-4
    min-h-144px
    w-auto
    flex="~ col justify-start"
    select-none
    :filter="isDark ? 'hover:brightness-130' : 'hover:brightness-90'"
  >
    <div flex="~ items-center">
      <div
        class="item-title-icon"
        p-3
      >
        <slot name="icon" />
      </div>
      <div
        class="item-title-text"
        text="5 w-5"
        h-7
      >
        {{ props.title }}
      </div>
    </div>
    <div
      p-1
      overflow-hidden
    >
      <Badge
        :type="'info'"
        v-for="tag in props.tags"
        :key="tag"
        class="m-r-1 !bg-transparent"
      >
        {{ tag }}
      </Badge>
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
</style>