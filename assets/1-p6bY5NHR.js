const n=`function twoSum(nums: number[], target: number): number[] {\r
  const valueIndexMap = new Map(nums.map((v, i) => [v, i]))\r
  const index = nums.findIndex((num, i) => {\r
    const j = valueIndexMap.get(target - num)\r
    return j != undefined && j != i\r
  })\r
  return [index, valueIndexMap.get(target - nums[index])!]\r
}`;export{n as default};
