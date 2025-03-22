import type { Ref } from 'vue'
import { ref } from 'vue'
import type { BlockState } from '../types/minesweeper'

const directions = [
  [-1, -1], [0, -1], [1, -1],
  [-1, 0], [1, 0],
  [-1, 1], [0, 1], [1, 1],
]

interface GameState {
  board: BlockState[][]
  mineGenerated: boolean
  gameState: 'playing' | 'won' | 'lose'
}
export class GamePlay {
  state = ref<GameState>() as Ref<GameState>

  constructor(public width: number, public height: number) {
    this.width = Number.parseInt(width.toString())
    this.height = Number.parseInt(height.toString())
    this.reset()
  }

  get board() {
    return this.state.value.board
  }

  reset() {
    this.state.value = {
      gameState: 'playing',
      mineGenerated: false,
      board: Array.from({ length: this.height }, (_, y) =>
        Array.from({ length: this.width },
          (_, x): BlockState => ({
            x, y, revealed: false, flagged: false, mine: false, adjacentMines: 0,
          }),
        ),
      ),
    }
  }

  showAllMines() {
    this.board.flat().forEach((block) => {
      if (block.mine)
        block.revealed = true
    })
  }

  generateMines(state: BlockState[][], initial: BlockState) {
    for (const row of state) {
      for (const block of row) {
        if (Math.abs(block.x - initial.x) <= 1)
          continue
        if (Math.abs(block.y - initial.y) <= 1)
          continue
        block.mine = Math.random() < 0.2
      }
    }
    this.updateNumbers(state)
  }

  updateNumbers(state: BlockState[][]) {
    state.forEach((row) => {
      row.forEach((block) => {
        if (!block.mine) {
          this.getSiblings(block).forEach((sibling: BlockState) => {
            if (sibling.mine)
              ++block.adjacentMines
          })
        }
      })
    })
  }

  flag(block: BlockState) {
    if (this.state.value.gameState !== 'playing')
      return
    if (!this.state.value.mineGenerated)
      return
    if (!block.revealed)
      block.flagged = !block.flagged
  }

  reveal(block: BlockState) {
    if (this.state.value.gameState !== 'playing')
      return
    if (!this.state.value.mineGenerated) {
      this.generateMines(this.board, block)
      this.state.value.mineGenerated = true
    }
    if (block.flagged) {
      block.flagged = false
      return
    }
    block.revealed = true
    if (block.mine) {
      this.state.value.gameState = 'lose'
      this.showAllMines()
      return
    }
    this.expendBlock(block)
    this.checkGameState(this.board)
  }

  expendBlock(block: BlockState) {
    if (this.state.value.gameState !== 'playing')
      return
    if (block.adjacentMines)
      return
    this.getSiblings(block).forEach((sibling: BlockState) => {
      if (!sibling.revealed) {
        sibling.revealed = true
        this.expendBlock(sibling)
      }
    })
  }

  getSiblings(block: BlockState) {
    return directions.map(([dx, dy]) => {
      const [nx, ny] = [block.x + dx, block.y + dy]
      if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height)
        return this.board[ny][nx]
      return undefined
    }).filter(Boolean) as BlockState[]
  }

  checkGameState(state: BlockState[][]) {
    if (!this.state.value.mineGenerated)
      return
    const blocks = state.flat()
    if (blocks.every(block => block.revealed || block.mine)) {
      this.showAllMines()
      this.state.value.gameState = 'won'
    }
  }
}
