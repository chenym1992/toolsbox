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

/**
 * 数组去重
 * @param array
 * @returns
 *
 * @example
 * uniq([2,1,3,3])
 * // => [2,1,3]
 */
export function uniq(array: Iterable<unknown> | null | undefined) {
  return Array.from(new Set(array))
}
