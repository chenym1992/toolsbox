/**
 * 时间格式化
 * @param format
 * @param time
 * @returns
 *
 * @example
 * dateFormat('YYYY')
 * // => '2022'
 * dateFormat('YYYY-MM-DD HH:mm')
 * // => '2022-08-12 13:42'
 * dateFormat('YYYYMMDDHHmm')
 * // => '202208121342'
 */
export function dateFormat(
  time?: string | number | Date,
  format: string = 'YYYY-MM-DD HH:mm:ss'
) {
  let date = time ? new Date(time) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
  return format
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substring(2, 4))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}
