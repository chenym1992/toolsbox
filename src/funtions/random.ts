import { isHttps } from './network'

/**
 * 生成随机数,默认0-100
 * @param min 最小数
 * @param max 最大数
 * @returns
 */
export function randomNumber(min: number = 0, max: number = 100) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

/**
 * 随机生成一个UID
 * @param size : number;
 * @returns
 */
export function randomUID(size: number = 21) {
  if (isHttps() && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return crypto
    .getRandomValues(new Uint8Array(size))
    .reduce(
      (t, e) =>
        (t +=
          (e &= 63) < 36
            ? e.toString(36)
            : e < 62
            ? (e - 26).toString(36).toUpperCase()
            : e > 62
            ? '-'
            : '_'),
      ''
    )
}
