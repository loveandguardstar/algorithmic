/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 0, r = x;
  while (l <= r) {
    let mid = l + (r - l) / 2;
      if (mid * mid <= x) {
          l = mid + 1;
      } else {
          r = mid - 1;
      }
  }
  return r;
};
// @lc code=end

