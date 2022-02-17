/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let tagObj = {}
  let maxVal = 0, maxIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (tagObj.hasOwnProperty(nums[i])) {
      tagObj[nums[i]]++
    } else {
      tagObj[nums[i]] = 1
    }
  }
  for(let idx in tagObj) {
    if (tagObj[idx] > maxVal) {
      maxVal = tagObj[idx]
      maxIdx = idx
    }
  }
  return maxIdx;
};
// @lc code=end

