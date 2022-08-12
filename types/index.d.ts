/**
 * 字节数组转字符串
 * @param arr
 * @returns
 *
 * @example
 * byteToString([49, 50, 51])
 * // => '123'
 */
declare function byteToString(arr: number[]): string

/**
 * 字符串转字节数组
 * @param str
 * @returns
 *
 * @example
 * stringToByte('123')
 * // => [49, 50, 51]
 */
declare function stringToByte(str: string): number[]

/**
 * 节流
 * @param fn 延迟毫秒后执行的函数
 * @param delay delay 延迟的毫秒数
 * @returns
 */
declare function throttle(fn: Function, delay?: number): (...args: any) => void

/**
 * 防抖:保证一个函数在多少毫秒内不再被触发，只会执行一次。
 * @param fn
 * @param delay
 * @returns
 */
declare function debounce(fn: Function, delay?: number): (...args: any) => void

interface PrettyOptions {
  d: string
  h: string
  m: string
  s: string
}
/**
 * 美化秒级时长显示
 * @param duration
 * @param options
 * @returns
 *
 * @example
 * makeDurationPretty(121)
 * // => '2分1秒'
 */
declare function makeDurationPretty(
  duration: number,
  options?: PrettyOptions
): string | 0

/**
 * 获取url参数
 * @param  url
 * @param key
 * @returns
 * @example
 *
 * getUrlParam('https://example.com?a=1&b=1');
 * // => {a:'1',b:'1'}
 * getUrlParam('https://example.com?a=1&b=1',a);
 * // => '1'
 * getUrlParam('https://example.com?a=1&b=1&a=2');
 * // => {a:['1','2'],b:'1'}
 * getUrlParam('https://example.com?a=1&b=1&a=2',a);
 * // => ['1','2']
 */
declare function getUrlParams(url?: string, key?: string): any

/**
 * 简单对象序列化
 * @param obj
 * @returns
 *
 * @example
 * stringifyQueryString({a:[1,2,3],b:{a:3},c:4})
 */
declare function stringifyQueryString(obj: Object): string

/**
 * 获取任意对象基本数据类型
 * @param obj
 * @returns
 *
 * @example
 * classof(2022); // number
 * classof("2022"); // string
 * classof(true); // boolean
 * classof(undefined); // undefined
 * classof(null); // null
 * classof(Symbol("123")); // symbol
 * classof(1n); // bigint
 * classof({}); // object
 * classof(classof); // function
 * classof([]); // array
 * classof(new Date()); // date
 * * classof(/^s/); //regexp
 */
declare function classof(obj: any): string
/**
 * isNumber
 * @param obj
 * @returns
 */
declare function isNumber(obj: any): boolean
/**
 * isString
 * @param obj
 * @returns
 */
declare function isString(obj: any): boolean
/**
 * isBoolean
 * @param obj
 * @returns
 */
declare function isBoolean(obj: any): boolean
/**
 * isUndefined
 * @param obj
 * @returns
 */
declare function isUndefined(obj: any): boolean
/**
 * isNull
 * @param obj
 * @returns
 */
declare function isNull(obj: any): boolean
/**
 * isSymbol
 * @param obj
 * @returns
 */
declare function isSymbol(obj: any): boolean
/**
 * isBigInt
 * @param obj
 * @returns
 */
declare function isBigInt(obj: any): boolean
/**
 * isObject
 * @param obj
 * @returns
 */
declare function isObject(obj: any): boolean
/**
 * isFunction
 * @param obj
 * @returns
 */
declare function isFunction(obj: any): boolean
/**
 * isArray
 * @param obj
 * @returns
 */
declare function isArray(obj: any): boolean
/**
 * isDate
 * @param obj
 * @returns
 */
declare function isDate(obj: any): boolean
/**
 * isRegExp
 * @param obj
 * @returns
 */
declare function isRegExp(obj: any): boolean
/**
 * isNaN
 * @param obj
 * @returns
 */
declare function isNaN(obj: any): boolean
/**
 * isNil
 * @param obj
 * @returns
 */
declare function isNil(obj: any): boolean

export {
  byteToString,
  classof,
  debounce,
  getUrlParams,
  isArray,
  isBigInt,
  isBoolean,
  isDate,
  isFunction,
  isNaN,
  isNil,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isSymbol,
  isUndefined,
  makeDurationPretty,
  stringToByte,
  stringifyQueryString,
  throttle
}
