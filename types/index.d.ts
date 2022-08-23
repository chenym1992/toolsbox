/**
 * 扁平数据结构转Tree
 * @param items
 * @param options
 * @returns
 */
declare function arrayToTree(
  items: Array<Object>,
  options?: {
    id: string
    pid: string
    children: string
  }
): never[]

/**
 * 数组求和
 * @param array
 * @returns
 *
 * @example
 * sum([1,2,3,4])
 * // => 10
 */
declare function sum(array: number[]): number
/**
 * 数组求平均数
 * @param array
 * @returns
 */
declare function average(array: number[]): number
/**
 * 数组去重
 * @param array
 * @returns
 *
 * @example
 * uniq([2,1,3,3])
 * // => [2,1,3]
 */
declare function uniq(array: Iterable<unknown> | null | undefined): unknown[]

/**
 * 是否存在指定class
 * @param className
 * @param el
 * @returns
 *
 * @example
 * //<span class='test'></span>
 * hasClass('test',document.querySelector('span'))
 * // => true
 */
declare function hasClass(className: string, el: HTMLElement): boolean
/**
 * 添加class
 * @param className
 * @param el
 *
 * @example
 * //<span></span>
 * addClass('test',document.querySelector('span'))
 * => <span class='test'></span>
 * addClass('test test2',document.querySelector('span'))
 * => <span class='test test2'></span>
 */
declare function addClass(className: string, el: HTMLElement): void
/**
 * 切换class
 * @param className
 * @param el
 *
 * @example
 * //<span class='test'></span>
 * toggleClass('test',document.querySelector('span'))
 * //=> <span></span>
 * toggleClass('test',document.querySelector('span'))
 * //<span class='test'></span>
 */
declare function toggleClass(className: string, el: HTMLElement): void
/**
 * 删除指定class
 * @param className
 * @param el
 */
declare function removeClass(className: string, el: HTMLElement): void

/**
 * 是否在全屏状态
 * @returns
 */
declare function isFullScreen(): any
/**
 * 是否支持全屏
 * @returns
 */
declare function isFullScreenEnabled(): any
/**
 * 进入全屏
 * @tips MAC、IOS下的Safari浏览器不支持非交互全屏
 * @param element
 * @returns
 */
declare function enterFullscreen(
  element?: HTMLElement
): Promise<never> | undefined
/**
 * 退出全屏
 */
declare function exitFullscreen(): void
/**
 * 创建dom
 * @param el
 * @param tpl
 * @param attrs
 * @param cname
 * @returns
 */
declare function createDom(
  el?: string,
  tpl?: string,
  attrs?: {},
  cname?: string
): HTMLElement
/**
 * 查找dom
 * @param el
 * @param selector
 * @returns
 */
declare function findDom(el: Document | undefined, selector: string): any

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

declare type Handler<T = any> = (val: T) => void
declare class EventEmitter {
  private __events
  private __once
  /**
   * 新增一个或多个监听函数
   * @param events
   * @param callback
   * @returns
   *
   * @example
   * eventObj.on('event', callback)
   * eventObj.on('event1 event2', callback)
   * eventObj.on({ event1: callback1, event2: callback2 })
   */
  on(events: string | object, callback?: Handler): void
  /**
   * 移除单个、多个或全部监听事件
   * @param events
   * @param callback
   *
   * @example
   * eventObj.off('event')
   * eventObj.off('event', callback)
   * eventObj.off('event1 event2')
   * eventObj.off({ event1: callback1, event2: callback2 })
   * eventObj.off()
   *
   */
  off(events?: string | object, callback?: Handler): void
  /**
   * 添加一个或多个单次事件
   * @param events
   * @param callback
   * @returns
   *
   * @example
   * eventObj.once('event', callback)
   * eventObj.once('event1 event2', callback)
   * eventObj.once({ event1: callback1, event2: callback2 })
   */
  once(events: string | object, callback?: Handler): void
  /**
   * 触发事件
   * @param event
   * @param value
   * @returns
   */
  emit(event: string, value: any): void
}

/**
 * 颜色hex转Rgb
 * @param hexColor
 * @returns
 *
 * @example
 * hexToRgb('#FFFFFF')
 * // => 'rgb(255,255,255)'
 */
declare function hexToRgb(hexColor: string): string | undefined
/**
 * 颜色hex转Rgba
 * @param hexColor
 * @returns
 *
 * @example
 * hexToRgba('#FFFFFF'))
 * // => 'rgba(255,255,255,1)'
 */
declare function hexToRgba(hexColor: string): string | undefined
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
declare function rgbToHex(
  rgb: string,
  toUpperCase?: boolean
): string | undefined
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
declare function rgbaToHex(
  rgba: string,
  toUpperCase?: boolean
): string | undefined

/**
 * 判断https
 * @param url
 * @returns
 */
declare function isHttps(url?: string): boolean
/**
 * 判断http
 * @param url
 * @returns
 */
declare function isHttp(url?: string): boolean
/**
 * 判断网络状态
 * @returns
 */
declare function isOnline(): boolean

/**
 * 生成随机数,默认0-100
 * @param min 最小数
 * @param max 最大数
 * @returns
 */
declare function randomNumber(min?: number, max?: number): number
/**
 * 随机生成一个UID
 * @param size : number;
 * @returns
 */
declare function randomUID(size?: number): string

/**
 * 判断奇偶性
 * @param num
 * @returns
 */
declare function isEvenOrOdd(num: number): number

/**
 * 深拷贝
 * @param dst
 * @param src
 * @returns
 */
declare function deepCopy(dst: any, src: any): any

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
declare function isHexColor(color: string): boolean
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
declare function isRgbColor(color: string): boolean
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
declare function isRgbaColor(color: string): boolean
/**
 * 判断是否是颜色表达式
 * @param color : string;
 * @returns
 */
declare function isColor(color: string): boolean

/**
 * 宽松判断国内手机号
 * @param string
 * @returns
 *
 * @example
 * isIphoneNumber('18951221696')
 * // => true
 * isIphoneNumber('+8618951221696')
 * // => true
 * isIphoneNumber('008618951221696')
 * // => true
 *
 */
declare function isIphoneNumber(string: string): boolean
/**
 * 判断座机号码（带分机号码）
 * @param string
 * @returns
 *
 * @example
 * isTelNumber('025-3456789')
 * // => true
 * isTelNumber('025-3456789-23')
 * // => true
 * isTelNumber('0814-34567891')
 * // => true
 */
declare function isTelNumber(string: string): boolean
/**
 * 判断身份证号
 * @param string
 * @returns
 *
 * @example
 * isIdCard('430723200010014567')
 * // => true
 * isIdCard('43072320001001456X')
 * // => true
 * isIdCard('43072320001001456x')
 * // => true
 * isIdCard('430723200010014')
 * // => true
 */
declare function isIdCard(string: string): boolean
/**
 * 判断身份证是否有效
 * @param string
 * @returns
 *
 * @example
 * isValidIdCard('11010119900307221X')
 * // => true
 */
declare function isValidIdCard(string: string): boolean
/**
 * 判断邮箱
 * @param string
 * @returns
 *
 * @example
 * isEmail('example@example.com')
 * // => true
 */
declare function isEmail(string: string): boolean
/**
 * 判断Url
 * @param string
 * @returns
 *
 * @example
 * isUrl('http://example.com')
 * // => true
 */
declare function isUrl(string: string): boolean
/**
 * 判断英文
 * @param string
 * @returns
 */
declare function isEnglish(string: string): boolean
/**
 * 判断中文
 * @param string
 * @returns
 */
declare function isChinese(string: string): boolean
/**
 * 判断车牌号
 * @param string
 * @returns
 *
 * @example
 * isNumberPlate('京A66666')
 * // => true
 * isNumberPlate('京AD66666')
 * // => true
 */
declare function isNumberPlate(string: string): boolean
/**
 * 判断base64
 * @param string
 * @returns
 *
 * @example
 * isBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA')
 * // => true
 */
declare function isBase64(string: string): boolean
/**
 * 判断银行卡号(包含对公对私)
 * @param string
 * @returns
 */
declare function isBankCardNumber(string: string): boolean
/**
 * 强密码校验
 * @desc 强密码校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * @param string
 * @returns
 */
declare function isStrongPwd(string: string): boolean
/**
 * 检测密码强度
 * @param string
 * @returns
 *
 * @example
 * checkPwdStrength('123')
 * // => 0
 * checkPwdStrength('123456')
 * // => 1
 * checkPwdStrength('123456a')
 * // => 2
 * checkPwdStrength('123456aA')
 * // => 3
 * checkPwdStrength('123456aA@')
 * // => 4
 */
declare function checkPwdStrength(string: string): number

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
declare function dateFormat(
  time?: string | number | Date,
  format?: string
): string

/**
 * 获取url参数
 * @param  url
 * @param key
 * @returns
 * @example
 *
 * getUrlParams('https://example.com?a=1&b=1');
 * // => {a:'1',b:'1'}
 * getUrlParams('https://example.com?a=1&b=1','a');
 * // => '1'
 * getUrlParams('https://example.com?a=1&b=1&a=2');
 * // => {a:['1','2'],b:'1'}
 * getUrlParams('https://example.com?a=1&b=1&a=2','a');
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

/**
 * uaParser
 * fork from https://github.com/faisalman/ua-parser-js
 * @copyright @faisalman
 */
interface UaInfoInstance {
  name?: string
  version?: string
  major?: number | string
  architecture?: string
  vendor?: string
  model?: string
  type?: string
}
declare class UAParser {
  [x: string]: string | object
  constructor(ua?: string)
  getBrowser: () => UaInfoInstance
  getCPU: () => UaInfoInstance
  getDevice: () => UaInfoInstance
  getEngine: () => UaInfoInstance
  getOS: () => UaInfoInstance
  getUA: () => string | object
  setUA: (ua: string) => void
  getResult: () => {
    ua: any
    browser: any
    engine: any
    os: any
    device: any
    cpu: any
  }
}

export {
  EventEmitter,
  UAParser,
  addClass,
  arrayToTree,
  average,
  byteToString,
  checkPwdStrength,
  classof,
  createDom,
  dateFormat,
  debounce,
  deepCopy,
  enterFullscreen,
  exitFullscreen,
  findDom,
  getUrlParams,
  hasClass,
  hexToRgb,
  hexToRgba,
  isArray,
  isBankCardNumber,
  isBase64,
  isBigInt,
  isBoolean,
  isChinese,
  isColor,
  isDate,
  isEmail,
  isEnglish,
  isEvenOrOdd,
  isFullScreen,
  isFullScreenEnabled,
  isFunction,
  isHexColor,
  isHttp,
  isHttps,
  isIdCard,
  isIphoneNumber,
  isNaN,
  isNil,
  isNull,
  isNumber,
  isNumberPlate,
  isObject,
  isOnline,
  isRegExp,
  isRgbColor,
  isRgbaColor,
  isString,
  isStrongPwd,
  isSymbol,
  isTelNumber,
  isUndefined,
  isUrl,
  isValidIdCard,
  makeDurationPretty,
  randomNumber,
  randomUID,
  removeClass,
  rgbToHex,
  rgbaToHex,
  stringToByte,
  stringifyQueryString,
  sum,
  throttle,
  toggleClass,
  uniq
}
