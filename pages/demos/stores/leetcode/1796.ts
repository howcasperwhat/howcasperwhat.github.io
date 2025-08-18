export function secondHighest(s: string): number {
  let [x, i] = [0, 9]
  for (const c of s) {
    if (/\d/.test(c))
      x |= 1 << Number(c)
  }
  for (; i + 1; --i) {
    if (1 << i & x)
      break
  }
  x &= ~(1 << i)
  for (; i + 1; --i) {
    if (1 << i & x)
      break
  }
  return i
}
