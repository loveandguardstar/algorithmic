/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let hashTable = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let returnNum = 0
  let sLen = s.length
  let isRoot = hashTable[s[0]] >= hashTable[s[sLen - 1]] ? true : false
  if (isRoot) {
      for (let i = 0; i < sLen; i++) {
        returnNum += hashTable[s[i]]
      } 
  } else {
    for (let i = sLen; i > 0; i--) {
      returnNum -= hashTable[s[i]]
    } 
  }
  return returnNum
};
// @lc code=end

