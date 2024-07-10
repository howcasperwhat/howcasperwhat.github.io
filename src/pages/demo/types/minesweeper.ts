export interface BlockState {
  x: number
  y: number
  revealed: boolean
  flagged: boolean
  mine: boolean
  adjacentMines: number
}
