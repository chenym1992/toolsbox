/**
 * 字节数组转字符串
 * @param arr
 * @returns
 *
 * @example
 * byteToString([49, 50, 51])
 * // => '123'
 */
export function byteToString(arr: number[]) {
  let out: string,
    i: number,
    len: number,
    c: number,
    char1: number,
    char2: number

  out = ''
  len = arr.length
  i = 0
  while (i < len) {
    c = arr[i++]
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        out += String.fromCharCode(c)
        break
      case 12:
      case 13:
        // 110x xxxx   10xx xxxx
        char1 = arr[i++]
        out += String.fromCharCode(((c & 0x1f) << 6) | (char1 & 0x3f))
        break
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char1 = arr[i++]
        char2 = arr[i++]
        out += String.fromCharCode(
          ((c & 0x0f) << 12) | ((char1 & 0x3f) << 6) | ((char2 & 0x3f) << 0)
        )
        break
    }
  }

  return out
}
