<template>
  <div
    h-64 rounded font-mono font-bold c-black
    flex="~ col" bg="blue/20 dark:blue/80"
  >
    <div h-8 flex-center v-text="'Container'" />
    <div
      h-56 flex m-b-2 children:w-full
      children:b="1 solid gray"
      children:flex-center children:rounded
    >
      <div
        v-for="i in 3" :key="i"
        bg="yellow/20 dark:yellow/80"
        v-text="'Item'"
      />
      <div bg-transparent v-text="'Free'" />
    </div>
  </div>
</template>
