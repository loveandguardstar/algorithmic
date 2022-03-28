var generateParenthesis = function(n) {
  // 递归
  // left right
  let res = []
  _generate(0, 0, n, '')
  return res
}

var _generate = function(left, right, n, s, res) {
  // 1.temirnate
  if (left === n && right === n) {
    res.push(s)
    return
  }
  // 2.process
  let s1 = s + '('
  let s2 = s + ')'
  // 3.drill dowm

  // left > right
  // left < n
  if (left < n && left > right) {
    _generate(left + 1, right, n, s1, res)
  }
  if (left > right) {
    _generate(left, right + 1, n, s2, res)
  }
  // 4.restore data
}