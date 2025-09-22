export function lengthOfLongestSubstring(s: string): number {
  const visited = new Set()
  let [i, j, ans] = [0, 0, 0]
  while (i < s.length && j < s.length) {
    if (!visited.has(s[j])) {
      visited.add(s[j])
      ans = Math.max(ans, j - i + 1)
    }
    else {
      const conflict = s[j]
      while (i < j) {
        const cur = s[i++]
        if (cur !== conflict) {
          visited.delete(cur)
        }
        else {
          break
        }
      }
    }
    ++j
  }
  return ans
}
