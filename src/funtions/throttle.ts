/**
 * 节流
 * @param fn 延迟毫秒后执行的函数
 * @param delay delay 延迟的毫秒数
 * @returns
 */
export function throttle(fn: Function, delay = 0) {
  let start = 0
  let timer: number | null
  return function (...args: any) {
    let now = +new Date()
    if (now - start < delay) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        start = now
        fn.apply(this, args)
      }, delay)
    } else {
      start = now
      fn.apply(this, args)
    }
  }
}
