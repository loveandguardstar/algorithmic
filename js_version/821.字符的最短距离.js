/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  const res = Array(S.length)
  const indexArr = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      indexArr.push(i)
    }
  }
  for (let i = 0; i < S.length; i++) {
    res[i] = indexArr.reduce((tmp, item) => {
      return Math.min(tmp, Math.abs(i - item))
    }, 10000)
  }
  return res

};
// @lc code=end