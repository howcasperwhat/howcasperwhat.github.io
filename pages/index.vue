<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'
import { projects } from './stores/projects'
import { notes } from './stores/notes'
import ProjectCard from './components/ProjectCard.vue'
import NoteItem from './components/NoteItem.vue'
const breakpoints = useBreakpoints(breakpointsTailwind)
const cols = computed(() => breakpoints.sm ? 2 : 1)
const parts = computed(() => {
  const result = Array.from({ length: cols.value }, () => [] as (typeof projects[0])[])
  projects.forEach((project, index) => {
    result[index % cols.value].push(project)
  })
  return result
})
</script>

<template>
  <div max-w-2xl m-x-auto>
    <div lg:text-8 lt-lg:text-7
      font-600 m-b-5>
      Casper Huang
    </div>
    <article class="slide-content">
      <p block>
        <div text-16 z--1
          select-none m-b--8
          color="#8882">
          Who
        </div>
        <div op-60 text-lg>
          I'm Casper Huang, a developer passionate about open source.
        </div>
      </p>
      <p block>
        <div text-16 z--1
          select-none m-b--12
          color="#8882">
          Projects
        </div>
        <div grid="~ cols-1 sm:cols-2 gap-2">
          <div v-for="(part, i) in parts" 
            :key="i" flex="~ col gap-2">
            <ProjectCard v-for="(project, j) in part" 
              :key="j" :project="project" />
          </div>
        </div>
      </p>
      <p block>
        <div text-16 z--1
          select-none m-b--12
          color="#8882">
          Notes
        </div>
        <div flex="~ col">
          <NoteItem v-for="(note, i) in notes" 
            :key="i" :note="note" />
        </div>
      </p>
      <p block>
        <div text-16 z--1
          select-none m-b--8
          color="#8882">
          Where
        </div>
        <div flex="~ gap-2 wrap" 
          children:b-b="1px dashed hover:solid"
          children:p-b-1
        >
          <a href="https://github.com/howcasperwhat">
            <span i-hugeicons:github /> GitHub
          </a>
          <a href="mailto:casper.w.huang@qq.com">
            <span i-hugeicons:mail-02 /> Email
          </a>
          <a href="https://www.npmjs.com/~howcasperwhat">
            <span i-hugeicons:npm /> NPM
          </a>
          <a href="https://zhihu.com/people/howcasperwhat">
            <span i-simple-icons:zhihu /> 知乎
          </a>
        </div>
      </p>
    </article>
  </div>
</template>
