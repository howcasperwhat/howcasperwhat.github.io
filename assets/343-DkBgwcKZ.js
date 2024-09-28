const n=`function integerBreak(n: number): number {\r
  if (n <= 3) return n - 1\r
  const dp = Array.from({ length: n + 1 }, (_, i) => i)\r
  for (let i = 2; i <= n; ++i)\r
    for (let j = 1; j < i; ++j)\r
      dp[i] = Math.max(dp[i], j * dp[i - j])\r
  return dp[n]\r
}`;export{n as default};
