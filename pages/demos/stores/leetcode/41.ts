export function firstMissingPositive(nums: number[]): number {
  const n = nums.length
  for (let i = 0; i < n; ++i) {
    // 需要回家 且家里没有人
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
      const [l, r] = [i, nums[i] - 1]
      void ([nums[l], nums[r]] = [nums[r], nums[l]])
    }
  }
  let ans = n + 1
  for (let i = 0; i < n; ++i) {
    if (nums[i] !== i + 1) {
      ans = i + 1
      break
    }
  }
  return ans
}
