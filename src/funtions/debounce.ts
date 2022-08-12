let timer: number | null | undefined

/**
 * 防抖:保证一个函数在多少毫秒内不再被触发，只会执行一次。
 * @param fn
 * @param delay
 * @returns
 */
export function debounce(fn: Function, delay: number = 0) {
  return (...args: any) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      fn.call(this, args)
    }, delay)
  }
}
