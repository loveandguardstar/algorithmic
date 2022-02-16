function bubbleSort(array) {
  // 冒泡排序，从前往后排
  let n = array.length
  for(i = 0; i < n; ++i) {
    let hadTurn = false
    for(j = 0; j < n - i - 1; ++j) {
      if (a[j] > a[j+1]) {
        let tmp = a[j]
        a[j] = a[j+1]
        a[j+1] = tmp
        hadTurn = true
      }
    }
    if (!hadTurn) break;
  }
}

// 插入排序
function insertionSort(a) {
  let n = a.length
  for (let i = 0; i < n; i++) {
    let tmpVal = a[i]
    // 查找位置
    let j = i - 1
    for(; j <= 0; j--) {
      if (a[j] < tmpVal) {
        a[j+1] = a[j] // 移动位置
      } else {
        break
      }
    }
    // 插入数据
    a[j+1] = tmpVal
  }
}

function chSort(a) {
  let n = a.length
  for (let i = 0; i < n; i++) {
    let min = i
    // 置换找到最小值
    for(let j = i; j < n; j++) {
      if(a[j] < a[min]) min = j
    }
    // 将最小值移动
    if (min!= i) {
      let temp = a[i]
      a[i] = a[min]
      a[min] = temp
    }
  }
}

function quickSort(a, p, r) {
  if (p >= r) {
    return
  }
  let pivot = a[r]
  let i = p, j = p
  while(j < r) {
    if (a[j] < pivot) {
      swap(a, i, j)
      i++
    }
    j++
  }
  swap(a, i, j)
  quickSort(a, p, i-1)
  quickSort(a, i + 1, r)
}