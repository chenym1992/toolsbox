import { isArray, isObject } from '..'

/**
 * 深拷贝
 * @param dst
 * @param src
 * @returns
 */
export function deepCopy(dst, src) {
  if (isObject(src) && isObject(dst)) {
    Object.keys(src).forEach(key => {
      if (isObject(src[key]) && !(src[key] instanceof Node)) {
        if (!dst[key]) {
          dst[key] = src[key]
        } else {
          deepCopy(dst[key], src[key])
        }
      } else if (isArray(src[key])) {
        dst[key] = isArray(dst[key]) ? dst[key].concat(src[key]) : src[key]
      } else {
        dst[key] = src[key]
      }
    })
    return dst
  }
}
