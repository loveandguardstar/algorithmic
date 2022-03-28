// 斐波拉契傻递归
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}
// 加缓存递归 自顶向下
let memo = []
function fibMemo(n, memo) {
  if (n <= 1) {
    return n
  }
  // drill down
  if (memo[n] === 0) {
    memo[n] = fib(n - 1) + fib(n - 2)
  }
  // 有值返回
  return memo[n]
}

// 一般就直接分治加递归， 自底向上（高级选手） dp 动态递推


// dp 
function fibDp(n) {
  let a = []
  a[0] = 0
  a[1] = 1
  for (let i = 2; i <= n; i++) {
    a[i] = a[i - 1] + a[i - 2]
  }
  return a[n]
}

// 走格子
function countPaths(grid, row, col) {
  if (!validSquare(gird, row, col)) return 0
  if (!isAtEnd(grid, row, col)) return 1
  return countPaths(grid, row + 1, col + countPaths(grid, row, col + 1))
}
// 状态转移方程（DP方程）
opt[i, j] = opt[i + 1, j] + opt[i, j + 1]
// 完整逻辑
if ( a[i, j] = '空地') {
  opt[i, j] = opt[i + 1, j] + opt[i, j + 1]
} else {
  opt[i, j] = 0
}