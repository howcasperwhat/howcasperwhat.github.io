<script setup lang='ts'>
import type { BlockState } from '../types/minesweeper'
import { isDev } from '../stores/minesweeper'

defineProps<{ block: BlockState }>()

const numberColors = [
  'text-transparent',
  'text-blue',
  'text-green',
  'text-red',
  'text-purple',
  'text-yellow',
  'text-pink',
  'text-cyan',
  'text-gray',
]

function getBlockClass(block: BlockState) {
  let [foreground, background] = ['', '']
  if (block.flagged) {
    background = 'bg-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
    foreground = 'text-red'
  }
  else if (block.revealed) {
    background = block.mine ? 'bg-red-300 dark:bg-red/60' : 'bg-gray-300 hover:gray-300 dark:bg-gray-600 dark:hover:bg-gray-600'
    foreground = numberColors[block.adjacentMines]
  }
  else {
    background = 'bg-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
    foreground = 'text-transparent'
  }
  return `${background} ${foreground}`
}
</script>

<template>
  <button
    :class="getBlockClass(block)"
    m-.5 h-10 w-10 flex-center
  >
    <template v-if="block.flagged">
      <div i-mdi-flag />
    </template>
    <template v-else-if="block.revealed || isDev">
      <div v-if="!block.mine" font-bold>
        {{ block.adjacentMines }}
      </div>
      <div v-else i-mdi-mine c-black dark:c-white />
    </template>
  </button>
</template>
