/*!
 * Toolsbox.js v0.0.2
 * (c) 2014-2022 chenym1992
 * Released under the MIT License.
 */
/**
 * 字节数组转字符串
 * @param arr
 * @returns
 *
 * @example
 * byteToString([49, 50, 51])
 * // => '123'
 */
function byteToString(arr) {
  var out, i, len, c, char1, char2
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

/**
 * 字符串转字节数组
 * @param str
 * @returns
 *
 * @example
 * stringToByte('123')
 * // => [49, 50, 51]
 */
function stringToByte(str) {
  var bytes = []
  var len = str.length
  var c

  for (var i = 0; i < len; i++) {
    c = str.charCodeAt(i)

    if (c >= 0x010000 && c <= 0x10ffff) {
      bytes.push(((c >> 18) & 0x07) | 0xf0)
      bytes.push(((c >> 12) & 0x3f) | 0x80)
      bytes.push(((c >> 6) & 0x3f) | 0x80)
      bytes.push((c & 0x3f) | 0x80)
    } else if (c >= 0x000800 && c <= 0x00ffff) {
      bytes.push(((c >> 12) & 0x0f) | 0xe0)
      bytes.push(((c >> 6) & 0x3f) | 0x80)
      bytes.push((c & 0x3f) | 0x80)
    } else if (c >= 0x000080 && c <= 0x0007ff) {
      bytes.push(((c >> 6) & 0x1f) | 0xc0)
      bytes.push((c & 0x3f) | 0x80)
    } else {
      bytes.push(c & 0xff)
    }
  }

  return bytes
}

/**
 * 节流
 * @param fn 延迟毫秒后执行的函数
 * @param delay delay 延迟的毫秒数
 * @returns
 */
function throttle(fn) {
  var delay =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
  var start = 0
  var timer
  return function () {
    var _this = this

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    var now = +new Date()

    if (now - start < delay) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(function () {
        start = now
        fn.apply(_this, args)
      }, delay)
    } else {
      start = now
      fn.apply(this, args)
    }
  }
}

var timer
/**
 * 防抖:保证一个函数在多少毫秒内不再被触发，只会执行一次。
 * @param fn
 * @param delay
 * @returns
 */

function debounce(fn) {
  var delay =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
  return function () {
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      fn.call(this, args)
    }, delay)
  }
}

function _typeof(obj) {
  '@babel/helpers - typeof'

  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj
          }),
    _typeof(obj)
  )
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  Object.defineProperty(Constructor, 'prototype', {
    writable: false
  })
  return Constructor
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }

  return obj
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  )
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr)
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter)
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]

  return arr2
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}

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
function classof(obj) {
  if (obj === null) return 'null'
  if (_typeof(obj) !== 'object') return _typeof(obj)
  else
    return Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase()
}
/**
 * isNumber
 * @param obj
 * @returns
 */

function isNumber(obj) {
  return classof(obj) === 'number'
}
/**
 * isString
 * @param obj
 * @returns
 */

function isString(obj) {
  return classof(obj) === 'string'
}
/**
 * isBoolean
 * @param obj
 * @returns
 */

function isBoolean(obj) {
  return classof(obj) === 'boolean'
}
/**
 * isUndefined
 * @param obj
 * @returns
 */

function isUndefined(obj) {
  return classof(obj) === 'undefined'
}
/**
 * isNull
 * @param obj
 * @returns
 */

function isNull(obj) {
  return classof(obj) === 'null'
}
/**
 * isSymbol
 * @param obj
 * @returns
 */

function isSymbol(obj) {
  return classof(obj) === 'symbol'
}
/**
 * isBigInt
 * @param obj
 * @returns
 */

function isBigInt(obj) {
  return classof(obj) === 'bigint'
}
/**
 * isObject
 * @param obj
 * @returns
 */

function isObject(obj) {
  return classof(obj) === 'object'
}
/**
 * isFunction
 * @param obj
 * @returns
 */

function isFunction(obj) {
  return classof(obj) === 'function'
}
/**
 * isArray
 * @param obj
 * @returns
 */

function isArray(obj) {
  return classof(obj) === 'array'
}
/**
 * isDate
 * @param obj
 * @returns
 */

function isDate(obj) {
  return classof(obj) === 'date'
}
/**
 * isRegExp
 * @param obj
 * @returns
 */

function isRegExp(obj) {
  return classof(obj) === 'regexp'
}
/**
 * isNaN
 * @param obj
 * @returns
 */

function isNaN(obj) {
  return isNumber(obj) && obj != +obj
}
/**
 * isNil
 * @param obj
 * @returns
 */

function isNil(obj) {
  return isNull(obj) || isUndefined(obj)
}

var EventEmitter = /*#__PURE__*/ (function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter)

    _defineProperty(this, '__events', new Map())

    _defineProperty(this, '__once', new Map())
  }

  _createClass(EventEmitter, [
    {
      key: 'on',
      value:
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
        function on(events, callback) {
          var _this = this

          if (isObject(events)) {
            for (var event in events) {
              if (events.hasOwnProperty(event)) {
                var set = this.__events.get(event)

                if (!set) {
                  set = new Set()

                  this.__events.set(event, set)
                }

                set.add(events[event])
              }
            }
          } else {
            events.split(' ').forEach(function (event) {
              var set = _this.__events.get(event)

              if (!set) {
                set = new Set()

                _this.__events.set(event, set)
              }

              if (callback) {
                set.add(callback)
              }
            })
          }
        }
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
    },
    {
      key: 'off',
      value: function off(events, callback) {
        var _this2 = this

        if (isObject(events)) {
          for (var event in events) {
            if (
              events !== null &&
              events !== void 0 &&
              events.hasOwnProperty(event)
            ) {
              var set1 = this.__events.get(event)

              if (set1 && callback) {
                set1['delete'](callback)
              }

              var set2 = this.__once.get(event)

              if (set2 && callback) {
                set2['delete'](callback)
              }
            }
          }
        } else if (!!events) {
          events.split(' ').forEach(function (event) {
            var set1 = _this2.__events.get(event)

            if (set1 && callback) {
              set1['delete'](callback)
            }

            var set2 = _this2.__once.get(event)

            if (set2 && callback) {
              set2['delete'](callback)
            }
          })
        } else {
          this.__events = new Map()
          this.__once = new Map()
        }
      }
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
    },
    {
      key: 'once',
      value: function once(events, callback) {
        var _this3 = this

        if (isObject(events)) {
          for (var event in events) {
            if (events.hasOwnProperty(event)) {
              var set = this.__once.get(event)

              if (!set) {
                set = new Set()

                this.__once.set(event, set)
              }

              set.add(callback)
            }
          }
        } else {
          events.split(' ').forEach(function (event) {
            var set = _this3.__once.get(event)

            if (!set) {
              set = new Set()

              _this3.__once.set(event, set)
            }

            set.add(callback)
          })
        }
      }
      /**
       * 触发事件
       * @param event
       * @param value
       * @returns
       */
    },
    {
      key: 'emit',
      value: function emit(event, value) {
        var set1 = this.__events.get(event)

        if (!set1) return

        _toConsumableArray(set1).forEach(function (fn) {
          return fn(value)
        })

        var set2 = this.__once.get(event)

        if (!set2) return

        _toConsumableArray(set2).forEach(function (fn) {
          return fn(value)
        })

        this.__once['delete'](event)
      }
    }
  ])

  return EventEmitter
})()

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
function makeDurationPretty(duration) {
  var options =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          d: '天',
          h: '时',
          m: '分',
          s: '秒'
        }

  if (duration <= 0) {
    return 0
  }

  var d = options.d,
    h = options.h,
    m = options.m,
    s = options.s
  var days = duration / 60 / 60 / 24
  var daysRound = Math.floor(days)
  var daysStr = ''.concat(daysRound > 0 ? ''.concat(daysRound).concat(d) : '') // hours

  var hours = duration / 60 / 60 - 24 * daysRound
  var hoursRound = Math.floor(hours)
  var hoursStr = ''.concat(
    hoursRound > 0 ? ''.concat(hoursRound).concat(h) : ''
  ) // minutes

  var minutes = duration / 60 - 24 * 60 * daysRound - 60 * hoursRound
  var minutesRound = Math.floor(minutes)
  var minutesStr = ''.concat(
    minutesRound > 0 ? ''.concat(minutesRound).concat(m) : ''
  ) // seconds

  var seconds =
    duration -
    24 * 60 * 60 * daysRound -
    60 * 60 * hoursRound -
    60 * minutesRound
  var secondsRound = Math.floor(seconds)
  var secondsStr = ''.concat(
    secondsRound > 0 ? ''.concat(secondsRound).concat(s) : ''
  )
  var durationStr = ''
    .concat(daysStr)
    .concat(hoursStr)
    .concat(minutesStr)
    .concat(secondsStr)
  return durationStr
}

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
function dateFormat(time) {
  var format =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'YYYY-MM-DD HH:mm:ss'
  var date = time ? new Date(time) : new Date(),
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
function getUrlParams(url, key) {
  var _window, _window$location

  url =
    url ||
    ((_window = window) === null || _window === void 0
      ? void 0
      : (_window$location = _window.location) === null ||
        _window$location === void 0
      ? void 0
      : _window$location.href)

  if (!url || url.split('?').length < 2 || !url.split('&').length) {
    return key ? void 0 : {}
  }

  var parameters = url.split('?')[1].split('&')
  var query = {}
  parameters.forEach(function (item) {
    var key = item.split('=')[0]
    var param = decodeURIComponent(item.split('=')[1])

    if (
      Object.keys(query).indexOf(key) > -1 &&
      typeof query[key] === 'string'
    ) {
      var arr = [query[key], param]
      query[key] = arr
    } else if (_typeof(query[key]) === 'object') {
      query[key].push(param)
    } else {
      query[key] = param
    }
  })
  return key ? query[key] : query
}

/**
 * 简单对象序列化
 * @param obj
 * @returns
 *
 * @example
 * stringifyQueryString({a:[1,2,3],b:{a:3},c:4})
 */

function stringifyQueryString(obj) {
  var paramsArray = []

  var _loop = function _loop(key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var val = obj[key]

      if (isArray(val)) {
        val.forEach(function (v) {
          paramsArray.push(''.concat(key, '=').concat(v))
        })
      } else if (isObject(val)) {
        paramsArray.push(
          ''.concat(key, '=').concat(encodeURIComponent(JSON.stringify(val)))
        )
      } else {
        paramsArray.push(''.concat(key, '=').concat(val))
      }
    }
  }

  for (var key in obj) {
    _loop(key)
  }

  return paramsArray.join('&')
}

export {
  EventEmitter,
  byteToString,
  classof,
  dateFormat,
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
