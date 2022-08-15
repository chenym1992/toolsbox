import { isHexColor, isRgbaColor, isRgbColor } from '../regexp/color'

/**
 * 颜色hex转Rgb
 * @param hexColor
 * @returns
 *
 * @example
 * hexToRgb('#FFFFFF')
 * // => 'rgb(255,255,255)'
 */
export function hexToRgb(hexColor: string) {
  if (isHexColor(hexColor)) {
    const color = hexColor.slice(1) // 去掉'#'号
    const rgb = [
      parseInt('0x' + color.slice(0, 2)),
      parseInt('0x' + color.slice(2, 4)),
      parseInt('0x' + color.slice(4, 6))
    ]
    return `rgb(${rgb.toString()})`
  }
}

/**
 * 颜色hex转Rgba
 * @param hexColor
 * @returns
 *
 * @example
 * hexToRgba('#FFFFFF'))
 * // => 'rgba(255,255,255,1)'
 */
export function hexToRgba(hexColor: string) {
  if (isHexColor(hexColor)) {
    const color = hexColor.slice(1) // 去掉'#'号
    const transparency = color.slice(6, 8)
    const rgba = [
      parseInt(`0x${color.slice(0, 2)}`),
      parseInt(`0x${color.slice(2, 4)}`),
      parseInt(`0x${color.slice(4, 6)}`),
      !!transparency ? (parseInt(`0x${transparency}`) / 256).toFixed(2) : 1
    ]
    return `rgba(${rgba.toString()})`
  }
}

/**
 * 颜色rgb转hex
 * @param rgb
 * @param toUpperCase
 * @returns
 *
 * @example
 * rgbToHex('rgb(0,0,15)')
 * // => #00000F
 * rgbToHex('rgb(0,0,15)',false)
 * // => #00000f
 */
export function rgbToHex(rgb: string, toUpperCase = true) {
  if (isRgbColor(rgb)) {
    const hex = rgb.match(/\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*/g)?.map(v => {
      if (parseInt(v) < 16) {
        return `0${parseInt(v).toString(16)}`
      }
      return parseInt(v).toString(16)
    })
    return toUpperCase ? `#${hex?.join('')}`.toUpperCase() : `#${hex?.join('')}`
  }
}

/**
 * 颜色rgba转hex
 * @param rgba
 * @param toUpperCase
 * @returns
 *
 * @example
 * rgbaToHex('rgba(0,0,15,0.1)')
 * // => #00000F19
 * rgbaToHex('rgb(0,0,15,11)')
 * // => #00000F
 */
export function rgbaToHex(rgba: string, toUpperCase = true) {
  if (isRgbaColor(rgba)) {
    const hex = rgba
      .slice(5, -1)
      .split(',')
      .map((v, idx) => {
        if (idx > 2) {
          const transparency = +v * 256
          if (transparency < 16) {
            return `0${parseInt(transparency + '').toString(16)}`
          } else if (transparency < 256) {
            return parseInt(transparency + '').toString(16)
          } else {
            return ''
          }
        }
        if (parseInt(v) < 16) {
          return `0${parseInt(v).toString(16)}`
        }
        return parseInt(v).toString(16)
      })
    return toUpperCase ? `#${hex?.join('')}`.toUpperCase() : `#${hex?.join('')}`
  }
}
