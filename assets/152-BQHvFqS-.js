const n=`function maxProduct(nums: number[]): number {\r
  const length = nums.length\r
  if (length === 1) return nums[0]\r
  let [pos, neg, max] = [0, 0, 0]\r
  for (const num of nums) {\r
    const [p, n] = [pos, neg]\r
    if (num > 0) {\r
      pos = Math.max(p * num, num)\r
      neg = Math.min(n * num, num)\r
    } else {\r
      pos = Math.max(n * num, num)\r
      neg = Math.min(p * num, num)\r
    }\r
    max = Math.max(max, pos)\r
  }\r
  return max\r
}`;export{n as default};
