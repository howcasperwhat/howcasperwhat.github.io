export function sortColors(nums: number[]): void {
  let [i, j, k] = [0, 0, nums.length - 1]
  // i 是 0 的下一个位置
  // j 是当前考察的位置
  // k 是 2 的上一个位置
  while (j <= k) {
    if (nums[j] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      ++i
      ++j
    }
    else if (nums[j] === 1) {
      ++j
    }
    else {
      [nums[j], nums[k]] = [nums[k], nums[j]]
      --k
    }
  }
}
