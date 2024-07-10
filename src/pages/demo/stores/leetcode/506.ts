function findRelativeRanks(score: number[]): string[] {
  const medal = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
  return score.map((v, i) => ({ v, i }))
    .sort((a, b) => b.v - a.v).reduce(
      (acc, cur, i) => {
        acc[cur.i] = medal[i] || `${i + 1}`
        return acc
      }, [''])
}