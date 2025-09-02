// [a ^ a = 0] [a ^ 0 = a] [a ^ b ^ x ^ a ^ y = b ^ x ^ y]
export function singleNumber(nums: number[]): number {
  return nums.reduce((pre, res) => pre ^ res, 0)
}
