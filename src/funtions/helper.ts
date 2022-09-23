/**
 * 判断奇偶性
 * @param num
 * @returns
 */
export function isEvenOrOdd(num: number) {
  return num & 1
}

/**
 * 合理范围内数据比较
 * @param a
 * @param b
 * @param float
 * @returns
 */
export function compareFloatsReasonably(a: number, b: number, float = 0.001) {
  return Math.abs(a - b) < float
}

/**
 * clamp
 * @param val
 * @param min
 * @param max
 * @returns
 *
 * @example
 * clamp(1,2,3)
 * // => 2
 */
export function clamp(val: number, min: number, max: number) {
  return Math.min(max, Math.max(val, min))
}
