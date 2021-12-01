/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 判断长度是否为偶数位
  if (s.length === 0 || s.length % 2 !== 0) return false
  // 创建映射
  let con = [], map = {')': '(', ']': '[', '}': '{'}
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    // 判断字符产中第i个括号是否有对应值如果没有则弹出
    // 查找与栈顶是否匹配，匹配删除，不匹配增加
    if(i === 0) {
      con.push(ele)
    } else {
      map[s[i]] && con[con.length - 1] === map[ele] ? con.pop() : con.push(ele)
    }
  }
  return !con.length
};
// @lc code=end

