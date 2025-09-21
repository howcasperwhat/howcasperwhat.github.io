function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}

function reverse(nums: number[], s: number, e: number) {
  while (s < e)
    swap(nums, s++, e--)
}

export function rotate(nums: number[], k: number): void {
  k %= nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}
