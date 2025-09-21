export function productExceptSelf(nums: number[]): number[] {
  const ans = Array.from({ length: nums.length }, () => 1)
  const n = nums.length
  for (let i = 0, prefix = 1, suffix = 1; i < n; ++i) {
    ans[i] *= prefix
    prefix *= nums[i]
    ans[n - i - 1] *= suffix
    suffix *= nums[n - i - 1]
  }
  return ans
}
