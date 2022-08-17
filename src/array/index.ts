/**
 * 数组求和
 * @param array
 * @returns
 *
 * @example
 * sum([1,2,3,4])
 * // => 10
 */
export function sum(array: number[]) {
  return array.reduce((pre, cur) => {
    return pre + cur
  })
}

/**
 * 数组求平均数
 * @param array
 * @returns
 */
export function average(array: number[]) {
  return sum(array) / array.length
}
