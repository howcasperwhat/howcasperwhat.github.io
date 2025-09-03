// Suppose all the numbers are of equal strength
// Best Case: non-modes kill each other.
// Worst Case: The non-mode cooperates to resist the mode, but the mode is more than the non-mode, so they still win.
export function majorityElement(nums: number[]): number {
  let [king, hp] = [Infinity, 0]
  for (const num of nums) {
    (hp === 0) && (king = num)
    hp += num === king ? 1 : -1
  }
  return king
}
