<template>
  <div
    h-64 rounded c-black font-bold font-mono
    flex="~ col" bg="blue/20 dark:blue/80"
  >
    <div h-8 flex-center v-text="'Container'" />
    <div m-b-2 h-56 flex children:w-full>
      <div
        v-for="i in 3" :key="i"
        bg="yellow/20 dark:yellow/80"
        m-x-2 flex-center rounded v-text="'Item'"
      />
    </div>
  </div>
</template>
