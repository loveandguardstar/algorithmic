String.prototype.trim = function () {
  return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function clone1(obj) {
  let cloneTarget = {}
  for (let key in obj) {
    cloneTarget[key] = obj[key]
  }
  return cloneTarget
}

function clone2(target) {
  if (typeof target === 'object') {
    let cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = clone2(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

function clone3(target) {
  if (typeof target === 'object') {
    let cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = clone2(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

function clone4(target, map = new Map()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return target;
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};

let a = "9007199254740991";
let b = "1234567899999999999";
function add(a, b) {
  let maxLength = Math.max(a.length, b.length)
  a = a.padStart(maxLength , 0);//"0009007199254740991"
   b = b.padStart(maxLength , 0);//"1234567899999999999"
   //定义加法过程中需要用到的变量
   let t = 0;
   let f = 0;   //"进位"
   let sum = "";
   for(let i=maxLength-1 ; i>=0 ; i--){
      t = parseInt(a[i]) + parseInt(b[i]) + f;
      f = Math.floor(t/10);
      sum = t%10 + sum;
   }
   if(f == 1){
      sum = "1" + sum;
   }
   return sum;
}

function arrFunc() {
  let arr = [];
  console.log(arr instanceof Array);
  console.log(arr.constructor === Array)
  console.log(Object.prototype.toString.call(arr) === '[Object Array]');
  Array.isArray(arr)
}

function flat(arr) {
  const res = []
  const stack = [].concat(arr)
  while(stack.length != 0) {
    const val = stack.pop()
    if (Array.isArray(val)) {
      stack.push(...val)
    } else {
      res.unshift(val)
    }
  }
  return res
}

function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  }
}

function debounce1(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this
    let args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(function(){
          timeout = null;
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

function unique(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        break
      }
    }
    if (j === res.length) {
      res.push(arr[i])
    }
  }
  return res
}
function unique1(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res
}

function unique2(array) {
  var res = [];
  let sortArr = array.sort()
  let slotPointer = null
  for (let i = 0; i < sortArr.length; i++) {
    // 如果是第一个元素或者相邻的元素不相同
    if (!i || slotPointer !== sortArr[i]) {
      res.push(sortArr[i])
      slotPointer = sortArr[i]
    }
  }
  return res;
}

function unique3(arr) {
  let obj = {}
  return arr.filter((item, idx, arr) => {
    return obj.hasOwnproperty(item) ? false : (obj(item) = true)
  })
}

function toLocal(arr) {
  return arr.toLocaleString()
}

function numFormat(num) {
  let numSplit = num.toString().split('.')
  let numStr = numSplit[0]
  let reserveStr = numStr.split("").reserve()
  let res = []
  for (let i = 0; i < reserveStr.length; i++) {
    if (reserveStr % 3 === 0 && i !== 0) {
      res.push('.')
    } else {
      res.push(reserveStr[i])
    }
  }
  res.reserve()
  if (numSplit[1]) {
    res = res.join('').concat('.'+num[1])
  } else {
    res = res.join('')
  }

  return res
}