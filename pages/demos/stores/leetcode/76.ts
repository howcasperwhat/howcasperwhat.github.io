function code(s: string, i: number): number {
  return s.charCodeAt(i)
}

const CODE = {
  A: code('A', 0),
  Z: code('Z', 0),
  a: code('a', 0),
  z: code('z', 0),
}
function idx(s: string, i: number): number {
  if (code(s, i) >= CODE.A && code(s, i) <= CODE.Z)
    return code(s, i) - CODE.A + CODE.z - CODE.a + 1
  return code(s, i) - CODE.a
}

function diff(base: number[], current: number[]) {
  if (base.length !== current.length)
    return -1
  let cnt = 0
  for (let i = 0; i < base.length; ++i) {
    if (current[i] < base[i]) {
      cnt += base[i] - current[i]
    }
  }
  return cnt
}

export function minWindow(s: string, t: string): string {
  const base = Array.from({ length: 64 }, () => 0)
  const current = Array.from({ length: 64 }, () => 0)
  let [i, j, k] = [0, 0, 0]
  const [sl, tl] = [s.length, t.length]
  while (k < tl) {
    base[idx(t, k++)]++
  }
  let ans = [0, Infinity]
  // [i, j)
  while (j < sl) {
    current[idx(s, j++)]++
    const dist = diff(base, current)
    if (dist === 0) {
      while (diff(base, current) === 0) {
        current[idx(s, i++)]--
      }
      if (j - i + 1 < ans[1] - ans[0]) {
        ans = [i - 1, j]
      }
    }
  }
  return ans[1] === Infinity ? '' : s.slice(ans[0], ans[1])
}
