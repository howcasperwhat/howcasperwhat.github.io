export function maxSubArray(nums: number[]): number {
  let [dp, ans] = [nums[0], nums[0]]
  for (let i = 1; i < nums.length; ++i) {
    dp = nums[i] + +(dp > 0) * dp
    ans = Math.max(ans, dp)
  }
  return ans
}
