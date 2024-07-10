const n=`function integerBreak(n: number): number {
  if (n <= 3) return n - 1
  const dp = Array.from({ length: n + 1 }, (_, i) => i)
  for (let i = 2; i <= n; ++i)
    for (let j = 1; j < i; ++j)
      dp[i] = Math.max(dp[i], j * dp[i - j])
  return dp[n]
}`;export{n as default};
