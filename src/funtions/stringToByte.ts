/**
 * 字符串转字节数组
 * @param str
 * @returns
 *
 * @example
 * stringToByte('123')
 * // => [49, 50, 51]
 */
export function stringToByte(str: string) {
  return new TextEncoder().encode(str)
}
