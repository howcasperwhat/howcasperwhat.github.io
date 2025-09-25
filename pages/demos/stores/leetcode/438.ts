function index(c: string) {
  return c.charCodeAt(0) - 'a'.charCodeAt(0)
}

function equal(a: number[], b: number[]) {
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i])
      return false
  }
  return true
}

export function findAnagrams(s: string, p: string): number[] {
  if (p.length > s.length)
    return []
  const l = 26
  const a = Array.from({ length: l }, () => 0)
  const b = Array.from({ length: l }, () => 0)
  const c: number[] = []
  for (let i = 0; i < p.length; ++i) {
    a[index(p[i])]++
    b[index(s[i])]++
  }
  let [i, j] = [0, p.length]
  while (i < s.length && j < s.length) {
    equal(a, b) && c.push(i)
    b[index(s[i++])]--
    b[index(s[j++])]++
  }
  equal(a, b) && c.push(i)
  return c
}
