const n=`function twoSum(nums: number[], target: number): number[] {
  const valueIndexMap = new Map(nums.map((v, i) => [v, i]))
  const index = nums.findIndex((num, i) => {
    const j = valueIndexMap.get(target - num)
    return j != undefined && j != i
  })
  return [index, valueIndexMap.get(target - nums[index])!]
}`;export{n as default};
