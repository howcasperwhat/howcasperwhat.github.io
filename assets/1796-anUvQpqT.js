const r=`function secondHighest(s: string): number {\r
  let [x, i] = [0, 9]\r
  for (const c of s)\r
    if (/\\d/.test(c))\r
      x |= 1 << Number(c)\r
  for (; i + 1; --i)\r
    if (1 << i & x)\r
      break\r
  x &= ~(1 << i)\r
  for (; i + 1; --i)\r
    if (1 << i & x)\r
      break\r
  return i\r
}`;export{r as default};
