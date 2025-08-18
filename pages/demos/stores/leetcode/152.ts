export function maxProduct(nums: number[]): number {
  const length = nums.length
  if (length === 1)
    return nums[0]
  let [pos, neg, max] = [0, 0, 0]
  for (const num of nums) {
    const [p, n] = [pos, neg]
    if (num > 0) {
      pos = Math.max(p * num, num)
      neg = Math.min(n * num, num)
    }
    else {
      pos = Math.max(n * num, num)
      neg = Math.min(p * num, num)
    }
    max = Math.max(max, pos)
  }
  return max
}
