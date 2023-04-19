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
    id="item-main"
    :href="props.link"
    target="_blank"
  >
    <div id="item-title">
      <div id="item-title-icon">
        <slot name="icon" />
      </div>
      <div id="item-title-text">
        {{ props.title }}
      </div>
    </div>
    <div id="item-details">
      <Badge
        :type="'info'"
        v-for="tag in props.tags"
        :key="tag"
      >
        {{ tag }}
      </Badge>
    </div>
  </a>
</template>

<style scoped>
#item-main {
  padding-left: 1rem;
  min-height: 144px;
  width: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  user-select: none;
}

#item-main:hover {
  filter: v-bind("isDark ? 'brightness(1.3)' : 'brightness(0.9)'");
}

#item-title {
  display: flex;
  align-items: center;
}

#item-title-icon {
  width: 50px;
  height: 50px;
  scale: 0.65;
  border-radius: 8px;
  color: v-bind("props.color ? props.color : ''");
}

#item-title-text {
  font-weight: 700;
  font-size: 24px;
  height: 28px;
  overflow-y: visible;
  background-color: v-bind("props.color ? props.color : ''");
  background-clip: text;
  -webkit-background-clip: text;
  filter: v-bind("isDark ? 'brightness(1.2)' : 'brightness(0.7)'");
  color: transparent;
}

#item-details {
  padding: 4px;
  overflow: hidden;
}

#item-details * {
  margin: 4px;
}
</style>