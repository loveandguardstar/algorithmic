/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let n = s.length
  // 双指针
  for (let left = 0, right = n-1; left < right; left++, right--) {
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp
  }
};
// @lc code=end

