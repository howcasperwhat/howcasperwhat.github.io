function inRange(ch: string, start: string, end: string): boolean {
  const c = ch.charCodeAt(0)
  const s = start.charCodeAt(0)
  const e = end.charCodeAt(0)
  return c >= s && c <= e
}

function isDigit(s: string) {
  return inRange(s, '0', '9')
}

function isUpperCase(s: string) {
  return inRange(s, 'A', 'Z')
}

function isLowerCase(s: string) {
  return inRange(s, 'a', 'z')
}

function isAlpha(s: string) {
  return isUpperCase(s) || isLowerCase(s)
}

export function decodeString(s: string): string {
  // 不是一一对应的，用例子理解：abc2[1[cd]ef1[gh]]xyz
  // strs.top()是上一层保留的字符串，nums.top()是当前层的重复次数
  // str是当前层的字符串，num用来构建当前层的重复次数
  const strs: string[] = []
  const nums: number[] = []
  let [str, num] = ['', 0]

  for (const ch of s) {
    if (ch === '[') {
      void (strs.push(str), nums.push(num))
      void ([str, num] = ['', 0])
    }
    else if (ch === ']') {
      str = strs.pop()! + str.repeat(nums.pop()!)
    }
    else if (isDigit(ch)) {
      num = num * 10 + Number(ch)
    }
    else if (isAlpha(ch)) {
      str += ch
    }
    else {
      throw new Error(`Invalid character: ${ch}`)
    }
  }
  return str
}
