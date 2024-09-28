const r=`function findRelativeRanks(score: number[]): string[] {\r
  const medal = ['Gold Medal', 'Silver Medal', 'Bronze Medal']\r
  return score.map((v, i) => ({ v, i }))\r
    .sort((a, b) => b.v - a.v).reduce(\r
      (acc, cur, i) => {\r
        acc[cur.i] = medal[i] || \`\${i + 1}\`\r
        return acc\r
      }, [''])\r
}`;export{r as default};
