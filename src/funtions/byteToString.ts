/**
 * 字节数组转字符串
 * @param arr
 * @returns
 *
 * @example
 * byteToString([49, 50, 51])
 * // => '123'
 */
export function byteToString(arr: BufferSource, label = 'utf8') {
  return new TextDecoder(label).decode(arr)
}
