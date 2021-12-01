/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
  // 对顶栈做一个小操作，推入数组，保持第二个值为最小值
  this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (this.stack.length === 0) {
    this.stack.unshift([val, val])
  } else {
    this.stack.unshift([val, Math.min(val, this.stack[0][1])])
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.shift()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[0][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[0][1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

