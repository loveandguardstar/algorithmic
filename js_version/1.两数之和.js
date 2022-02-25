/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 使用哈希表
  const hashTable = new Map()
  // 循环遍历
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (hashTable.has(complement)) {
      return [hashTable.get(complement), i]
    } else {
      hashTable.set(nums[i], i)
    }
  }
  return []
};
// @lc code=end

