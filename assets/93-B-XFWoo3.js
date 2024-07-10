const n=`function restoreIpAddresses(s: string): string[] {
  const res: string[] = []
  const path: string[] = []
  const length: number = s.length
  function dfs(start: number, group: number) {
    const currentLength = length - start
    if (group === 0 && currentLength === 0) {
      res.push(path.join('.'))
      return
    }
    if (currentLength < group || currentLength > group * 3)
      return
    let num = 0
    for (let i = start; i < Math.min(start + 3, length); i++) {
      num = num * 10 + (s.charCodeAt(i) - 48)
      if (num <= 255) {
        path.push(s.substring(start, i + 1))
        dfs(i + 1, group - 1)
        path.pop()
      }
      if (num === 0)
        break
    }
  }
  dfs(0, 4)
  return res
}`;export{n as default};
