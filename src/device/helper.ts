/**
 * device helper functions
 */

import { isUndefined, isArray, isFunction } from '..'
import { EMPTY, UA_MAX_LENGTH, UNKNOWN } from './const'

export function extend(
  regexes: { [x: string]: any },
  extensions: { [x: string]: string | any[] }
) {
  const mergedRegexes = {}
  for (var i in regexes) {
    if (extensions[i] && extensions[i].length % 2 === 0) {
      mergedRegexes[i] = extensions[i].concat(regexes[i])
    } else {
      mergedRegexes[i] = regexes[i]
    }
  }
  return mergedRegexes
}

/**
 * 数组枚举化
 * @param arr
 * @returns
 */
export function enumerize(arr: any[]) {
  const enums = {}
  for (let i = 0; i < arr.length; i++) {
    enums[arr[i].toUpperCase()] = arr[i]
  }
  return enums
}

/**
 * 字符串转小写
 * @param str
 * @returns
 */
export function lowerize(str: string) {
  return str.toLowerCase()
}

/**
 * 字符串转大写
 * @param str
 * @returns
 */
export function upperize(str: string) {
  return str.toUpperCase()
}

/**
 * 判断字符串是否包含某字符串(忽略大小写)
 * @param str1
 * @param str2
 * @returns
 */
function has(str1: string, str2: string) {
  return lowerize(str2).indexOf(lowerize(str1)) !== -1
}

/**
 * 获取浏览器版本号
 * @param version
 * @returns
 */
export function majorize(version?: string) {
  return version?.replace(/[^\d\.]/g, EMPTY).split('.')[0]
}

/**
 * 去除空白行
 * @param str
 * @param len
 * @returns
 */
export function trim(str: string, len: any) {
  str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY)
  return isUndefined(len) ? str : str.substring(0, UA_MAX_LENGTH)
}

export function rgxMapper(ua, arrays) {
  let i = 0,
    j,
    k,
    p,
    q,
    matches,
    match

  // loop through all regexes maps
  while (i < arrays.length && !matches) {
    let regex = arrays[i], // even sequence (0,2,4,..)
      props = arrays[i + 1] // odd sequence (1,3,5,..)
    j = k = 0

    // try matching uastring with regexes
    while (j < regex.length && !matches) {
      matches = regex[j++].exec(ua)

      if (!!matches) {
        for (p = 0; p < props.length; p++) {
          match = matches[++k]
          q = props[p]
          // check if given property is actually array
          if (isArray(q)) {
            if (q.length === 2) {
              if (isFunction(q[1])) {
                // assign modified match
                this[q[0]] = q[1].call(this, match)
              } else {
                // assign given value, ignore regex match
                this[q[0]] = q[1]
              }
            } else if (q.length === 3) {
              // check whether function or regex
              if (isFunction(q[1]) && !(q[1].exec && q[1].test)) {
                // call function (usually string mapper)
                this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined
              } else {
                // sanitize match using given regex
                this[q[0]] = match ? match.replace(q[1], q[2]) : undefined
              }
            } else if (q.length === 4) {
              this[q[0]] = match
                ? q[3].call(this, match.replace(q[1], q[2]))
                : undefined
            }
          } else {
            this[q] = match ? match : undefined
          }
        }
      }
    }
    i += 2
  }
}
export function strMapper(str, map) {
  for (var i in map) {
    // check if current value is array
    if (isArray(map[i])) {
      for (var j = 0; j < map[i].length; j++) {
        if (has(map[i][j], str)) {
          return i === UNKNOWN ? undefined : i
        }
      }
    } else if (has(map[i], str)) {
      return i === UNKNOWN ? undefined : i
    }
  }
  return str
}
