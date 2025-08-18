<script setup lang="ts">
import type { BlockState } from '../types/minesweeper'
import { useStorage, useWindowSize } from '@vueuse/core'
import { computed, onMounted, ref, watch } from 'vue'
import { useMessage } from '../../../src/utils/message'
import { GamePlay } from '../logics/minesweeper'
import { isDev, toggleDev } from '../stores/minesweeper'
import MineBlock from './MineBlock.vue'

const message = useMessage()
const size = useWindowSize()
const width = Math.min(Math.floor(size.width.value / 52), 16)
const height = Math.min(Math.floor(size.height.value / 64), 16)
const play = new GamePlay(width, height)
const board = computed(() => play.board)
const state = computed(() => play.state.value.gameState)
const startTime = ref<number>(0)
function mouseStart() {
  startTime.value = Date.now()
}
function mouseEnd(block: BlockState) {
  const duration = Date.now() - startTime.value
  if (duration > 150)
    play.flag(block)
  else play.reveal(block)
}
onMounted(() => {
  useStorage('minesweeper', play.state)
  watch(state, (newState, oldState) => {
    if (oldState !== 'playing')
      return
    if (newState === 'won')
      message.success('You won!')
    else if (newState === 'lose')
      message.error('You lose!')
  })
})
</script>

<template>
  <div @contextmenu.prevent="">
    <div
      v-for="row, y in board" :key="y"
      flex-center select-none
    >
      <MineBlock
        v-for="block, x in row"
        :key="x" :block="block"
        @touchstart.prevent="mouseStart()"
        @touchend.prevent="mouseEnd(block)"
        @click="play.reveal(block)"
        @contextmenu="play.flag(block)"
      />
    </div>
  </div>
  <div grid="~ flow-col gap-6" m-y-2 justify-center>
    <button
      btn bg-blue c-black
      @click="toggleDev()"
    >
      {{ isDev ? 'DEV' : 'NORMAL' }}
    </button>
    <button
      btn bg-amber c-black
      @click="play.reset()"
    >
      RESET
    </button>
  </div>
</template>
