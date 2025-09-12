export function moveZeroes(nums: number[]): void {
  let [i, j] = [0, 0]
  while (i < nums.length && j < nums.length) {
    if (nums[i] === 0) {
      while (nums[j] === 0) {
        ++j
      }
      if (j < nums.length) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
    j = Math.max(++i, j)
  }
}
