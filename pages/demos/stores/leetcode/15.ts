export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const ans: [number, number, number][] = []
  const n = nums.length
  for (let i = 0; i < n; ++i) {
    if (nums[i] === nums[i - 1])
      continue
    const a = nums[i]
    let [l, r] = [i + 1, n - 1]
    while (l < r) {
      const [b, c] = [nums[l], nums[r]]
      if (b + c <= -a) {
        while (nums[l] === b) {
          ++l
        }
      }
      if (b + c >= -a) {
        while (nums[r] === c) {
          --r
        }
      }
      if (a + b + c === 0) {
        ans.push([a, b, c])
      }
    }
  }
  return ans
}
