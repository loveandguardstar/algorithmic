/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 1.转换为字符串
  let xStr = String(x)
  // 2.得到字符串长度
  let xStrLen = xStr.length
  // 3.获取中间节点
  let mid = Math.floor(xStrLen / 2)
  // 4.利用双指针进行回文判断
  for (let i = 0; i <= mid; i++) {
    // 5.注意避免字符串长度溢出
    if (xStr[i] !== xStr[xStrLen - i - 1]) {
      return false
    }
  }
  return true;
};
// @lc code=end

