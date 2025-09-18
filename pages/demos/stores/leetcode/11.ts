export function maxArea(height: number[]): number {
  let [l, r] = [0, height.length - 1]
  let ans = 0
  while (l < r) {
    const [a, b] = [height[l], height[r]]
    ans = Math.max(ans, Math.min(a, b) * (r - l))
    a <= b && ++l
    a >= b && --r
  }
  return ans
}
