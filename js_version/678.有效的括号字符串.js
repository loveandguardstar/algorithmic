/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
  const leftStack = [];
  const asteriskStack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
      const c = s[i];
      if (c === '(') {
          leftStack.push(i);
      } else if (c === '*') {
          asteriskStack.push(i);
      } else {
          if (leftStack.length) {
              leftStack.pop();
          } else if (asteriskStack.length) {
              asteriskStack.pop();
          } else {
              return false;
          }
      }
  }
  while (leftStack.length && asteriskStack.length) {
      const leftIndex = leftStack.pop();
      const asteriskIndex = asteriskStack.pop();
      if (leftIndex > asteriskIndex) {
          return false;
      }
  }
  return leftStack.length === 0;
};
// @lc code=end

