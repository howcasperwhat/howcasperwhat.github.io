const r=`function restoreIpAddresses(s: string): string[] {\r
  const res: string[] = []\r
  const path: string[] = []\r
  const length: number = s.length\r
  function dfs(start: number, group: number) {\r
    const currentLength = length - start\r
    if (group === 0 && currentLength === 0) {\r
      res.push(path.join('.'))\r
      return\r
    }\r
    if (currentLength < group || currentLength > group * 3)\r
      return\r
    let num = 0\r
    for (let i = start; i < Math.min(start + 3, length); i++) {\r
      num = num * 10 + (s.charCodeAt(i) - 48)\r
      if (num <= 255) {\r
        path.push(s.substring(start, i + 1))\r
        dfs(i + 1, group - 1)\r
        path.pop()\r
      }\r
      if (num === 0)\r
        break\r
    }\r
  }\r
  dfs(0, 4)\r
  return res\r
}`;export{r as default};
