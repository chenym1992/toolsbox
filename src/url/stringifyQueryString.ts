import { isArray, isObject } from '..'

/**
 * 简单对象序列化
 * @param obj
 * @returns
 *
 * @example
 * stringifyQueryString({a:[1,2,3],b:{a:3},c:4})
 */
export function stringifyQueryString(obj: Object): string {
  const paramsArray: string[] = []
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key]
      if (isArray(val)) {
        val.forEach((v: string) => {
          paramsArray.push(`${key}=${v}`)
        })
      } else if (isObject(val)) {
        paramsArray.push(`${key}=${encodeURIComponent(JSON.stringify(val))}`)
      } else {
        paramsArray.push(`${key}=${val}`)
      }
    }
  }
  return paramsArray.join('&')
}
