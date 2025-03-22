<template>
  <div
    h-64 rounded font-bold font-mono c-black
    flex="~ col" bg="blue/20 dark:blue/80"
  >
    <div h-8 flex-center v-text="'Container'" />
    <div h-56 flex m-b-2 children:w-full>
      <div
        v-for="i in 3" :key="i"
        bg="yellow/20 dark:yellow/80"
        flex-center rounded m-x-2 v-text="'Item'"
      />
    </div>
  </div>
</template>
