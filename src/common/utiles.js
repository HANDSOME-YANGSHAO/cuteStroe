// 防抖函数
export function debouncce(func, delay) {
  let timer = null
  const context = this // 上下文对象，其实也就是你在哪调用这个防抖函数，就会让context指向当前调用此防抖函数的调用者
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context,args)
    },delay)
  }
}