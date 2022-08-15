/**
 * 判断hex颜色表达式
 * @param color : string;
 * @returns
 *
 * @example
 * isHexColor('#AAA')
 * // => true
 * isHexColor('#AAACCC')
 * // => true
 * isHexColor('#AAAA')
 * // => true
 * isHexColor('#AAACCC75')
 * // => true
 */
export function isHexColor(color: string) {
  return /#([0-9a-fA-F]{3,4}){1,2}$/.test(color)
}

/**
 * 判断RGB颜色表达式
 * @param color : string;
 * @returns
 *
 * @example
 * isRgbColor('rgb(23,23,23)')
 * // => true
 * isRgbColor('rgba(23,23,23,0.1)')
 * // => false
 */
export function isRgbColor(color: string) {
  return /^[rR][gG][Bb]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)$/.test(
    color
  )
}

/**
 * 判断RGBA颜色表达式
 * @param color : string;
 * @returns
 *
 * @example
 * isRgbaColor('rgb(23,23,23)')
 * // => false
 * isRgbaColor('rgba(23,23,23,0.1)')
 * // => true
 * isRgbaColor('rgba(23,23,23,11)')
 * // => true
 */
export function isRgbaColor(color: string) {
  return /^[rR][gG][Bb][Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*(\d+|0\.\d+)\s*\)/.test(
    color
  )
}

/**
 * 判断是否是颜色表达式
 * @param color : string;
 * @returns
 */
export function isColor(color: string) {
  return isHexColor(color) || isRgbColor(color) || isRgbaColor(color)
}
