function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}

function defaultify(nums: number[], start?: number, end?: number) {
  return [start ?? 0, end ?? nums.length - 1]
}

function reverse(nums: number[], start?: number, end?: number) {
  [start, end] = defaultify(nums, start, end)
  while (start < end) {
    swap(nums, start++, end--)
  }
}

function firstGreaterThan(nums: number[], target: number, start?: number, end?: number) {
  [start, end] = defaultify(nums, start, end)
  let [l, r] = [start - 1, end + 1]
  while (l + 1 < r) {
    const mid = (l + r) >>> 1
    if (nums[mid] <= target)
      l = mid
    else
      r = mid
  }
  return r
}

export function nextPermutation(nums: number[]): void {
  for (let i = nums.length - 1; i >= 1; --i) {
    if (nums[i] > nums[i - 1]) {
      reverse(nums, i)
      const j = firstGreaterThan(nums, nums[i - 1], i)
      swap(nums, i - 1, j)
      return
    }
  }
  reverse(nums)
}
