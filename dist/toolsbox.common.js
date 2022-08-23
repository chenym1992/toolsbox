/*!
 * Toolsbox.js v0.0.10
 * (c) 2014-2022 chenym1992
 * Released under the MIT License.
 */
'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object)

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object)
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable
      })),
      keys.push.apply(keys, symbols)
  }

  return keys
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {}
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          )
        })
  }

  return target
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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator']

  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it
      var i = 0

      var F = function () {}

      return {
        s: F,
        n: function () {
          if (i >= o.length)
            return {
              done: true
            }
          return {
            done: false,
            value: o[i++]
          }
        },
        e: function (e) {
          throw e
        },
        f: F
      }
    }

    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }

  var normalCompletion = true,
    didErr = false,
    err
  return {
    s: function () {
      it = it.call(o)
    },
    n: function () {
      var step = it.next()
      normalCompletion = step.done
      return step
    },
    e: function (e) {
      didErr = true
      err = e
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return()
      } finally {
        if (didErr) throw err
      }
    }
  }
}

/**
 * 扁平数据结构转Tree
 * @param items
 * @param options
 * @returns
 */
function arrayToTree(items) {
  var options =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          id: 'id',
          pid: 'pid',
          children: 'children'
        }
  var id = options.id,
    pid = options.pid,
    children = options.children
  var result = [] // 存放结果集

  var itemMap = {} //

  var _iterator = _createForOfIteratorHelper(items),
    _step

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var item = _step.value
      var idItem = item[id]
      var pidItem = item[pid]

      if (!itemMap[idItem]) {
        itemMap[idItem] = _defineProperty({}, children, [])
      }

      itemMap[idItem] = _objectSpread2(
        _objectSpread2({}, item),
        {},
        _defineProperty({}, children, itemMap[idItem][children])
      )
      var treeItem = itemMap[idItem]

      if (!!!pidItem) {
        result.push(treeItem)
      } else {
        if (!itemMap[pidItem]) {
          itemMap[pidItem] = _defineProperty({}, children, [])
        }

        itemMap[pidItem][children].push(treeItem)
      }
    }
  } catch (err) {
    _iterator.e(err)
  } finally {
    _iterator.f()
  }

  return result
}

/**
 * 数组求和
 * @param array
 * @returns
 *
 * @example
 * sum([1,2,3,4])
 * // => 10
 */
function sum(array) {
  return array.reduce(function (pre, cur) {
    return pre + cur
  })
}
/**
 * 数组求平均数
 * @param array
 * @returns
 */

function average(array) {
  return sum(array) / array.length
}
/**
 * 数组去重
 * @param array
 * @returns
 *
 * @example
 * uniq([2,1,3,3])
 * // => [2,1,3]
 */

function uniq(array) {
  return Array.from(new Set(array))
}

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
function hasClass(className, el) {
  return el.classList.contains(className)
}
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

function addClass(className, el) {
  if (/\s+/.test(className)) {
    el.className += ' ' + className
  } else {
    el.classList.add(className)
  }
}
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

function toggleClass(className, el) {
  el.classList.toggle(className)
}
/**
 * 删除指定class
 * @param className
 * @param el
 */

function removeClass(className, el) {
  el.className = el.className.replace(className, '')
}

/**
 * 是否在全屏状态
 * @returns
 */

function isFullScreen() {
  return (
    document.fullscreenElement ||
    document.webkitFullScreenElement ||
    document.mozFullScreenElement ||
    document.msFullScreenElement
  )
}
/**
 * 是否支持全屏
 * @returns
 */

function isFullScreenEnabled() {
  return (
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  )
}
/**
 * 进入全屏
 * @tips MAC、IOS下的Safari浏览器不支持非交互全屏
 * @param element
 * @returns
 */

function enterFullscreen() {
  var element =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : document.body

  if (!isFullScreenEnabled()) {
    return Promise.reject(new Error('全屏模式被禁用'))
  }

  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}
/**
 * 退出全屏
 */

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}
/**
 * 创建dom
 * @param el
 * @param tpl
 * @param attrs
 * @param cname
 * @returns
 */

function createDom() {
  var el =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div'
  var tpl =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
  var attrs =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
  var cname =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ''
  var dom = document.createElement(el)
  dom.className = cname
  dom.innerHTML = tpl
  Object.keys(attrs).forEach(function (item) {
    var key = item
    var value = attrs[item]

    if (el === 'video' || el === 'audio') {
      if (value) {
        dom.setAttribute(key, value)
      }
    } else {
      dom.setAttribute(key, value)
    }
  })
  return dom
}
/**
 * 查找dom
 * @param el
 * @param selector
 * @returns
 */

function findDom() {
  var el =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document
  var selector = arguments.length > 1 ? arguments[1] : undefined
  var dom

  try {
    dom = el.querySelector(selector)
  } catch (e) {
    if (selector.indexOf('#') === 0) {
      dom = el.getElementById(selector.slice(1))
    }
  }

  return dom
}

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

              if (callback) {
                set.add(callback)
              }
            }
          }
        } else {
          events.split(' ').forEach(function (event) {
            var set = _this3.__once.get(event)

            if (!set) {
              set = new Set()

              _this3.__once.set(event, set)
            }

            if (callback) {
              set.add(callback)
            }
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
function isHexColor(color) {
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

function isRgbColor(color) {
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

function isRgbaColor(color) {
  return /^[rR][gG][Bb][Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*(\d+|0\.\d+)\s*\)/.test(
    color
  )
}
/**
 * 判断是否是颜色表达式
 * @param color : string;
 * @returns
 */

function isColor(color) {
  return isHexColor(color) || isRgbColor(color) || isRgbaColor(color)
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

function hexToRgb(hexColor) {
  if (isHexColor(hexColor)) {
    var color = hexColor.slice(1) // 去掉'#'号

    var rgb = [
      parseInt('0x' + color.slice(0, 2)),
      parseInt('0x' + color.slice(2, 4)),
      parseInt('0x' + color.slice(4, 6))
    ]
    return 'rgb('.concat(rgb.toString(), ')')
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

function hexToRgba(hexColor) {
  if (isHexColor(hexColor)) {
    var color = hexColor.slice(1) // 去掉'#'号

    var transparency = color.slice(6, 8)
    var rgba = [
      parseInt('0x'.concat(color.slice(0, 2))),
      parseInt('0x'.concat(color.slice(2, 4))),
      parseInt('0x'.concat(color.slice(4, 6))),
      !!transparency
        ? (parseInt('0x'.concat(transparency)) / 256).toFixed(2)
        : 1
    ]
    return 'rgba('.concat(rgba.toString(), ')')
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

function rgbToHex(rgb) {
  var toUpperCase =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true

  if (isRgbColor(rgb)) {
    var _rgb$match

    var hex =
      (_rgb$match = rgb.match(/\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*/g)) ===
        null || _rgb$match === void 0
        ? void 0
        : _rgb$match.map(function (v) {
            if (parseInt(v) < 16) {
              return '0'.concat(parseInt(v).toString(16))
            }

            return parseInt(v).toString(16)
          })
    return toUpperCase
      ? '#'
          .concat(hex === null || hex === void 0 ? void 0 : hex.join(''))
          .toUpperCase()
      : '#'.concat(hex === null || hex === void 0 ? void 0 : hex.join(''))
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

function rgbaToHex(rgba) {
  var toUpperCase =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true

  if (isRgbaColor(rgba)) {
    var hex = rgba
      .slice(5, -1)
      .split(',')
      .map(function (v, idx) {
        if (idx > 2) {
          var transparency = +v * 256

          if (transparency < 16) {
            return '0'.concat(parseInt(transparency + '').toString(16))
          } else if (transparency < 256) {
            return parseInt(transparency + '').toString(16)
          } else {
            return ''
          }
        }

        if (parseInt(v) < 16) {
          return '0'.concat(parseInt(v).toString(16))
        }

        return parseInt(v).toString(16)
      })
    return toUpperCase
      ? '#'
          .concat(hex === null || hex === void 0 ? void 0 : hex.join(''))
          .toUpperCase()
      : '#'.concat(hex === null || hex === void 0 ? void 0 : hex.join(''))
  }
}

/**
 * 判断https
 * @param url
 * @returns
 */
function isHttps(url) {
  url = url || location.href
  return url.indexOf('https://') === 0
}
/**
 * 判断http
 * @param url
 * @returns
 */

function isHttp(url) {
  url = url || location.href
  return url.indexOf('http://') === 0
}
/**
 * 判断网络状态
 * @returns
 */

function isOnline() {
  return navigator.onLine
}

/**
 * 生成随机数,默认0-100
 * @param min 最小数
 * @param max 最大数
 * @returns
 */

function randomNumber() {
  var min =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
  var max =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100
  return Math.floor(min + Math.random() * (max + 1 - min))
}
/**
 * 随机生成一个UID
 * @param size : number;
 * @returns
 */

function randomUID() {
  var size =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21

  if (isHttps() && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return crypto.getRandomValues(new Uint8Array(size)).reduce(function (t, e) {
    return (t +=
      (e &= 63) < 36
        ? e.toString(36)
        : e < 62
        ? (e - 26).toString(36).toUpperCase()
        : e > 62
        ? '-'
        : '_')
  }, '')
}

/**
 * 判断奇偶性
 * @param num
 * @returns
 */
function isEvenOrOdd(num) {
  return num & 1
}

/**
 * 深拷贝
 * @param dst
 * @param src
 * @returns
 */

function deepCopy(dst, src) {
  if (isObject(src) && isObject(dst)) {
    Object.keys(src).forEach(function (key) {
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
function isIphoneNumber(string) {
  return /^(?:(?:\+|00)86)?1\d{10}$/.test(string)
}
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

function isTelNumber(string) {
  return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(string)
}
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

function isIdCard(string) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(string)
}
/**
 * 判断身份证是否有效
 * @param string
 * @returns
 *
 * @example
 * isValidIdCard('11010119900307221X')
 * // => true
 */

function isValidIdCard(string) {
  if (!isIdCard(string)) {
    console.log('你输入的身份证长度或格式错误')
    return false
  } //身份证城市

  var CityObject = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  }

  if (!CityObject[string.substring(0, 2)]) {
    console.log('你的身份证地区非法')
    return false
  } // 出生日期验证

  var Birthday =
      string.substring(6, 10) +
      '-' +
      string.substring(10, 12) +
      '-' +
      string.substring(12, 14),
    date = new Date(Birthday)

  if (
    Birthday !=
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  ) {
    console.log('身份证上的出生日期非法')
    return false
  } // 身份证号码校验

  var sum = 0
  var weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  var codes = '10X98765432'

  for (var i = 0; i < string.length - 1; i++) {
    sum += +string[i] * weights[i]
  }

  var lastCode = codes[sum % 11] //计算出来的最后一位身份证号码

  if (string[string.length - 1] != lastCode) {
    console.log('你输入的身份证号非法')
    return false
  }

  return true
}
/**
 * 判断邮箱
 * @param string
 * @returns
 *
 * @example
 * isEmail('example@example.com')
 * // => true
 */

function isEmail(string) {
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(string)
}
/**
 * 判断Url
 * @param string
 * @returns
 *
 * @example
 * isUrl('http://example.com')
 * // => true
 */

function isUrl(string) {
  return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
    string
  )
}
/**
 * 判断英文
 * @param string
 * @returns
 */

function isEnglish(string) {
  return /^[a-zA-Z]+$/.test(string)
}
/**
 * 判断中文
 * @param string
 * @returns
 */

function isChinese(string) {
  return /^[\u4e00-\u9fa5]+$/.test(string)
}
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

function isNumberPlate(string) {
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(
    string
  )
}
/**
 * 判断base64
 * @param string
 * @returns
 *
 * @example
 * isBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA')
 * // => true
 */

function isBase64(string) {
  return /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(
    string
  )
}
/**
 * 判断银行卡号(包含对公对私)
 * @param string
 * @returns
 */

function isBankCardNumber(string) {
  return /^[1-9]\d{9,29}$/.test(string)
}
/**
 * 强密码校验
 * @desc 强密码校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * @param string
 * @returns
 */

function isStrongPwd(string) {
  return /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(
    string
  )
}
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

function checkPwdStrength(string) {
  var strength = 0

  if (string.length < 6) {
    return strength
  }

  if (/[0-9]/.test(string)) {
    strength++
  }

  if (/[a-z]/.test(string)) {
    strength++
  }

  if (/[A-Z]/.test(string)) {
    strength++
  }

  if (/[\.\|\-_!@#$%^&*? ]/.test(string)) {
    strength++
  }

  return strength
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
 * getUrlParams('https://example.com?a=1&b=1');
 * // => {a:'1',b:'1'}
 * getUrlParams('https://example.com?a=1&b=1','a');
 * // => '1'
 * getUrlParams('https://example.com?a=1&b=1&a=2');
 * // => {a:['1','2'],b:'1'}
 * getUrlParams('https://example.com?a=1&b=1&a=2','a');
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

/**
 * device helper functions
 */
/**
 * 数组枚举化
 * @param arr
 * @returns
 */

function enumerize(arr) {
  var enums = {}

  for (var i = 0; i < arr.length; i++) {
    enums[arr[i].toUpperCase()] = arr[i]
  }

  return enums
}
/**
 * 字符串转小写
 * @param str
 * @returns
 */

function lowerize(str) {
  return str.toLowerCase()
}
/**
 * 判断字符串是否包含某字符串(忽略大小写)
 * @param str1
 * @param str2
 * @returns
 */

function has(str1, str2) {
  return lowerize(str2).indexOf(lowerize(str1)) !== -1
}
/**
 * 获取浏览器版本号
 * @param version
 * @returns
 */

function majorize(version) {
  return version === null || version === void 0
    ? void 0
    : version.replace(/[^\d\.]/g, EMPTY).split('.')[0]
}
/**
 * 去除空白行
 * @param str
 * @param len
 * @returns
 */

function trim(str, len) {
  str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY)
  return isUndefined(len) ? str : str.substring(0, UA_MAX_LENGTH)
}
function rgxMapper(ua, arrays) {
  var i = 0,
    j,
    k,
    p,
    q,
    matches,
    match // loop through all regexes maps

  while (i < arrays.length && !matches) {
    var regex = arrays[i],
      // even sequence (0,2,4,..)
      props = arrays[i + 1] // odd sequence (1,3,5,..)

    j = k = 0 // try matching uastring with regexes

    while (j < regex.length && !matches) {
      matches = regex[j++].exec(ua)

      if (!!matches) {
        for (p = 0; p < props.length; p++) {
          match = matches[++k]
          q = props[p] // check if given property is actually array

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
function strMapper(str, map) {
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

var EMPTY = '',
  UA_MAX_LENGTH = 350,
  UNKNOWN = '?',
  MAJOR = 'major',
  MODEL = 'model',
  NAME = 'name',
  TYPE = 'type',
  VENDOR = 'vendor',
  VERSION = 'version',
  ARCHITECTURE = 'architecture',
  CONSOLE = 'console',
  MOBILE = 'mobile',
  TABLET = 'tablet',
  SMARTTV = 'smarttv',
  WEARABLE = 'wearable',
  EMBEDDED = 'embedded',
  AMAZON = 'Amazon',
  APPLE = 'Apple',
  ASUS = 'ASUS',
  BLACKBERRY = 'BlackBerry',
  BROWSER = 'Browser',
  CHROME = 'Chrome',
  EDGE = 'Edge',
  FIREFOX = 'Firefox',
  GOOGLE = 'Google',
  HUAWEI = 'Huawei',
  LG = 'LG',
  MICROSOFT = 'Microsoft',
  MOTOROLA = 'Motorola',
  OPERA = 'Opera',
  SAMSUNG = 'Samsung',
  SONY = 'Sony',
  XIAOMI = 'Xiaomi',
  ZEBRA = 'Zebra',
  FACEBOOK = 'Facebook'
var oldSafariMap = {
    '1.0': '/8',
    1.2: '/1',
    1.3: '/3',
    '2.0': '/412',
    '2.0.2': '/416',
    '2.0.3': '/417',
    '2.0.4': '/419',
    '?': '/'
  },
  windowsVersionMap = {
    ME: '4.90',
    'NT 3.11': 'NT3.51',
    'NT 4.0': 'NT4.0',
    2000: 'NT 5.0',
    XP: ['NT 5.1', 'NT 5.2'],
    Vista: 'NT 6.0',
    7: 'NT 6.1',
    8: 'NT 6.2',
    8.1: 'NT 6.3',
    10: ['NT 6.4', 'NT 10.0'],
    RT: 'ARM'
  }
var regexes = {
  browser: [
    [
      /\b(?:crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
    ],
    [VERSION, [NAME, 'Chrome']],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i // Microsoft Edge
    ],
    [VERSION, [NAME, 'Edge']],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i, // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i // Opera
    ],
    [NAME, VERSION],
    [
      /opios[\/ ]+([\w\.]+)/i // Opera mini on iphone >= 8.0
    ],
    [VERSION, [NAME, OPERA + ' Mini']],
    [
      /\bopr\/([\w\.]+)/i // Opera Webkit
    ],
    [VERSION, [NAME, OPERA]],
    [
      // Mixed
      /(kindle)\/([\w\.]+)/i, // Kindle
      /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, // Lunascape/Maxthon/Netfront/Jasmine/Blazer
      // Trident based
      /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, // Avant/IEMobile/SlimBrowser
      /(ba?idubrowser)[\/ ]?([\w\.]+)/i, // Baidu Browser
      /(?:ms|\()(ie) ([\w\.]+)/i, // Internet Explorer
      // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
      /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
      /(weibo)__([\d\.]+)/i // Weibo
    ],
    [NAME, VERSION],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i // UCBrowser
    ],
    [VERSION, [NAME, 'UC' + BROWSER]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i, // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i
    ],
    [VERSION, [NAME, 'WeChat(Win) Desktop']],
    [
      /micromessenger\/([\w\.]+)/i // WeChat
    ],
    [VERSION, [NAME, 'WeChat']], //jsdom
    [
      /jsdom\/([\w\.]+)/i // jsdom
    ],
    [VERSION, [NAME, 'jsdom']],
    [
      /konqueror\/([\w\.]+)/i // Konqueror
    ],
    [VERSION, [NAME, 'Konqueror']],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i // IE11
    ],
    [VERSION, [NAME, 'IE']],
    [
      /yabrowser\/([\w\.]+)/i // Yandex
    ],
    [VERSION, [NAME, 'Yandex']],
    [
      /(avast|avg)\/([\w\.]+)/i // Avast/AVG Secure Browser
    ],
    [[NAME, /(.+)/, '$1 Secure ' + BROWSER], VERSION],
    [
      /\bfocus\/([\w\.]+)/i // Firefox Focus
    ],
    [VERSION, [NAME, FIREFOX + ' Focus']],
    [
      /\bopt\/([\w\.]+)/i // Opera Touch
    ],
    [VERSION, [NAME, OPERA + ' Touch']],
    [
      /coc_coc\w+\/([\w\.]+)/i // Coc Coc Browser
    ],
    [VERSION, [NAME, 'Coc Coc']],
    [
      /dolfin\/([\w\.]+)/i // Dolphin
    ],
    [VERSION, [NAME, 'Dolphin']],
    [
      /coast\/([\w\.]+)/i // Opera Coast
    ],
    [VERSION, [NAME, OPERA + ' Coast']],
    [
      /miuibrowser\/([\w\.]+)/i // MIUI Browser
    ],
    [VERSION, [NAME, 'MIUI ' + BROWSER]],
    [
      /fxios\/([-\w\.]+)/i // Firefox for iOS
    ],
    [VERSION, [NAME, FIREFOX]],
    [
      /\bqihu|(qi?ho?o?|360)browser/i // 360
    ],
    [[NAME, '360 ' + BROWSER]],
    [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
    [[NAME, /(.+)/, '$1 ' + BROWSER], VERSION],
    [
      // Oculus/Samsung/Sailfish/Huawei Browser
      /(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
    ],
    [[NAME, /_/g, ' '], VERSION],
    [
      /(electron)\/([\w\.]+) safari/i, // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, // Tesla
      /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i // QQBrowser/Baidu App/2345 Browser
    ],
    [NAME, VERSION],
    [
      /(metasr)[\/ ]?([\w\.]+)/i, // SouGouBrowser
      /(lbbrowser)/i, // LieBao Browser
      /\[(linkedin)app\]/i // LinkedIn App for iOS & Android
    ],
    [NAME],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i // Facebook App for iOS & Android
    ],
    [[NAME, FACEBOOK], VERSION],
    [
      /safari (line)\/([\w\.]+)/i, // Line App for iOS
      /\b(line)\/([\w\.]+)\/iab/i, // Line App for Android
      /(chromium|instagram)[\/ ]([-\w\.]+)/i // Chromium/Instagram
    ],
    [NAME, VERSION],
    [
      /\bgsa\/([\w\.]+) .*safari\//i // Google Search Appliance on iOS
    ],
    [VERSION, [NAME, 'GSA']],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i // Chrome Headless
    ],
    [VERSION, [NAME, CHROME + ' Headless']],
    [
      / wv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
    ],
    [[NAME, CHROME + ' WebView'], VERSION],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i // Android Browser
    ],
    [VERSION, [NAME, 'Android ' + BROWSER]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [NAME, VERSION],
    [
      /version\/([\w\.]+) .*mobile\/\w+ (safari)/i // Mobile Safari
    ],
    [VERSION, [NAME, 'Mobile Safari']],
    [
      /version\/([\w\.]+) .*(mobile ?safari|safari)/i // Safari & Safari Mobile
    ],
    [VERSION, NAME],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
    ],
    [NAME, [VERSION, strMapper, oldSafariMap]],
    [/(webkit|khtml)\/([\w\.]+)/i],
    [NAME, VERSION],
    [
      // Gecko based
      /(navigator|netscape\d?)\/([-\w\.]+)/i // Netscape
    ],
    [[NAME, 'Netscape'], VERSION],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i // Firefox Reality
    ],
    [VERSION, [NAME, FIREFOX + ' Reality']],
    [
      /ekiohf.+(flow)\/([\w\.]+)/i, // Flow
      /(swiftfox)/i, // Swiftfox
      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
      /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
      /(firefox)\/([\w\.]+)/i, // Other Firefox-based
      /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, // Mozilla
      // Other
      /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
      /(links) \(([\w\.]+)/i // Links
    ],
    [NAME, VERSION]
  ],
  cpu: [
    [
      /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i // AMD64 (x64)
    ],
    [[ARCHITECTURE, 'amd64']],
    [
      /(ia32(?=;))/i // IA32 (quicktime)
    ],
    [[ARCHITECTURE, lowerize]],
    [
      /((?:i[346]|x)86)[;\)]/i // IA32 (x86)
    ],
    [[ARCHITECTURE, 'ia32']],
    [
      /\b(aarch64|arm(v?8e?l?|_?64))\b/i // ARM64
    ],
    [[ARCHITECTURE, 'arm64']],
    [
      /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i // ARMHF
    ],
    [[ARCHITECTURE, 'armhf']],
    [
      // PocketPC mistakenly identified as PowerPC
      /windows (ce|mobile); ppc;/i
    ],
    [[ARCHITECTURE, 'arm']],
    [
      /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i // PowerPC
    ],
    [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
    [
      /(sun4\w)[;\)]/i // SPARC
    ],
    [[ARCHITECTURE, 'sparc']],
    [
      /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
    ],
    [[ARCHITECTURE, lowerize]]
  ],
  device: [
    [
      //////////////////////////
      // MOBILES & TABLETS
      // Ordered by popularity
      /////////////////////////
      // Samsung
      /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
    ],
    [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
    [
      /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
      /samsung[- ]([-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
    [
      // Apple
      /\((ip(?:hone|od)[\w ]*);/i // iPod/iPhone
    ],
    [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
    [
      /\((ipad);[-\w\),; ]+apple/i, // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
    [
      // Huawei
      /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
    ],
    [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
    [
      /(?:huawei|honor)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
    [
      // Xiaomi
      /\b(poco[\w ]+)(?: bui|\))/i, // Xiaomi POCO
      /\b; (\w+) build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
      /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, // Xiaomi Hongmi
      /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, // Xiaomi Redmi
      /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
    ],
    [
      [MODEL, /_/g, ' '],
      [VENDOR, XIAOMI],
      [TYPE, MOBILE]
    ],
    [
      /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i // Mi Pad tablets
    ],
    [
      [MODEL, /_/g, ' '],
      [VENDOR, XIAOMI],
      [TYPE, TABLET]
    ],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]],
    [
      // Vivo
      /vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]],
    [
      // Realme
      /\b(rmx[12]\d{3})(?: bui|;|\))/i
    ],
    [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ](\w*)/i,
      /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
    ],
    [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
    [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [MODEL, [VENDOR, LG], [TYPE, TABLET]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
    [
      // Lenovo
      /(ideatab[-\w ]+)/i,
      /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
    ],
    [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]],
    [
      // Nokia
      /(?:maemo|nokia).*(n900|lumia \d+)/i,
      /nokia[-_ ]?([-\w\.]*)/i
    ],
    [
      [MODEL, /_/g, ' '],
      [VENDOR, 'Nokia'],
      [TYPE, MOBILE]
    ],
    [
      // Google
      /(pixel c)\b/i // Google Pixel C
    ],
    [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
    [
      /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i // Google Pixel
    ],
    [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
    [
      // Sony
      /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
    [
      [MODEL, 'Xperia Tablet'],
      [VENDOR, SONY],
      [TYPE, TABLET]
    ],
    [
      // OnePlus
      / (kb2005|in20[12]5|be20[12][59])\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi)( bui|\))/i, // Kindle Fire without Silk
      /(kf[a-z]+)( bui|\)).+silk\//i // Kindle Fire HD
    ],
    [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i // Fire Phone
    ],
    [
      [MODEL, /(.+)/g, 'Fire Phone $1'],
      [VENDOR, AMAZON],
      [TYPE, MOBILE]
    ],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i // BlackBerry PlayBook
    ],
    [MODEL, VENDOR, [TYPE, TABLET]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i // BlackBerry 10
    ],
    [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
    [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
    [
      // HTC
      /(nexus 9)/i // HTC Nexus 9
    ],
    [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [MODEL, [VENDOR, 'Sharp'], [TYPE, MOBILE]],
    [
      // MIXED
      /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
      /(hp) ([\w ]+\w)/i, // HP iPAQ
      /(asus)-?(\w+)/i, // Asus
      /(microsoft); (lumia[\w ]+)/i, // Microsoft Lumia
      /(lenovo)[-_ ]?([-\w]+)/i, // Lenovo
      /(jolla)/i, // Jolla
      /(oppo) ?([\w ]+) bui/i // OPPO
    ],
    [VENDOR, MODEL, [TYPE, MOBILE]],
    [
      /(archos) (gamepad2?)/i, // Archos
      /(hp).+(touchpad(?!.+tablet)|tablet)/i, // HP TouchPad
      /(kindle)\/([\w\.]+)/i, // Kindle
      /(nook)[\w ]+build\/(\w+)/i, // Nook
      /(dell) (strea[kpr\d ]*[\dko])/i, // Dell Streak
      /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, // Le Pan Tablets
      /(trinity)[- ]*(t\d{3}) bui/i, // Trinity Tablets
      /(gigaset)[- ]+(q\w{1,9}) bui/i, // Gigaset Tablets
      /(vodafone) ([\w ]+)(?:\)| bui)/i // Vodafone
    ],
    [VENDOR, MODEL, [TYPE, TABLET]],
    [
      /(surface duo)/i // Surface Duo
    ],
    [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i // Fairphone
    ],
    [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]],
    [
      /(u304aa)/i // AT&T
    ],
    [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]],
    [
      /\bsie-(\w*)/i // Siemens
    ],
    [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]],
    [
      /\b(rct\w+) b/i // RCA Tablets
    ],
    [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]],
    [
      /\b(venue[\d ]{2,7}) b/i // Dell Venue Tablets
    ],
    [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]],
    [
      /\b(q(?:mv|ta)\w+) b/i // Verizon Tablet
    ],
    [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]],
    [
      /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i // Barnes & Noble Tablet
    ],
    [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]],
    [/\b(tm\d{3}\w+) b/i],
    [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]],
    [
      /\b(k88) b/i // ZTE K Series Tablet
    ],
    [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]],
    [
      /\b(nx\d{3}j) b/i // ZTE Nubia
    ],
    [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]],
    [
      /\b(gen\d{3}) b.+49h/i // Swiss GEN Mobile
    ],
    [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]],
    [
      /\b(zur\d{3}) b/i // Swiss ZUR Tablet
    ],
    [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]],
    [
      /\b((zeki)?tb.*\b) b/i // Zeki Tablets
    ],
    [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]],
    [
      /\b([yr]\d{2}) b/i,
      /\b(dragon[- ]+touch |dt)(\w{5}) b/i // Dragon Touch Tablet
    ],
    [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]],
    [
      /\b(ns-?\w{0,9}) b/i // Insignia Tablets
    ],
    [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]],
    [
      /\b((nxa|next)-?\w{0,9}) b/i // NextBook Tablets
    ],
    [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]],
    [
      /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i // Voice Xtreme Phones
    ],
    [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]],
    [
      /\b(lvtel\-)?(v1[12]) b/i // LvTel Phones
    ],
    [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]],
    [
      /\b(ph-1) /i // Essential PH-1
    ],
    [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]],
    [
      /\b(v(100md|700na|7011|917g).*\b) b/i // Envizen Tablets
    ],
    [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]],
    [
      /\b(trio[-\w\. ]+) b/i // MachSpeed Tablets
    ],
    [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]],
    [
      /\btu_(1491) b/i // Rotor Tablets
    ],
    [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]],
    [
      /(shield[\w ]+) b/i // Nvidia Shield Tablets
    ],
    [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]],
    [
      /(sprint) (\w+)/i // Sprint Phones
    ],
    [VENDOR, MODEL, [TYPE, MOBILE]],
    [
      /(kin\.[onetw]{3})/i // Microsoft Kin
    ],
    [
      [MODEL, /\./g, ' '],
      [VENDOR, MICROSOFT],
      [TYPE, MOBILE]
    ],
    [
      /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i // Zebra
    ],
    [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
    [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(ouya)/i, // Ouya
      /(nintendo) ([wids3utch]+)/i // Nintendo
    ],
    [VENDOR, MODEL, [TYPE, CONSOLE]],
    [
      /droid.+; (shield) bui/i // Nvidia
    ],
    [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]],
    [
      /(playstation [345portablevi]+)/i // Playstation
    ],
    [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i // Microsoft Xbox
    ],
    [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i // Samsung
    ],
    [VENDOR, [TYPE, SMARTTV]],
    [/hbbtv.+maple;(\d+)/i],
    [
      [MODEL, /^/, 'SmartTV'],
      [VENDOR, SAMSUNG],
      [TYPE, SMARTTV]
    ],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i // LG SmartTV
    ],
    [
      [VENDOR, LG],
      [TYPE, SMARTTV]
    ],
    [
      /(apple) ?tv/i // Apple TV
    ],
    [VENDOR, [MODEL, APPLE + ' TV'], [TYPE, SMARTTV]],
    [
      /crkey/i // Google Chromecast
    ],
    [
      [MODEL, CHROME + 'cast'],
      [VENDOR, GOOGLE],
      [TYPE, SMARTTV]
    ],
    [
      /droid.+aft(\w)( bui|\))/i // Fire TV
    ],
    [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
    [
      /\(dtv[\);].+(aquos)/i // Sharp
    ],
    [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]],
    [
      /(bravia[\w- ]+) bui/i // Sony
    ],
    [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
    [
      /(mitv-\w{5}) bui/i // Xiaomi
    ],
    [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i // HbbTV devices
    ],
    [
      [VENDOR, trim],
      [MODEL, trim],
      [TYPE, SMARTTV]
    ],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i // SmartTV from Unidentified Vendors
    ],
    [[TYPE, SMARTTV]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /((pebble))app/i // Pebble
    ],
    [VENDOR, MODEL, [TYPE, WEARABLE]],
    [
      /droid.+; (glass) \d/i // Google Glass
    ],
    [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
    [/droid.+; (wt63?0{2,3})\)/i],
    [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
    [
      /(quest( 2)?)/i // Oculus Quest
    ],
    [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i // Tesla
    ],
    [VENDOR, [TYPE, EMBEDDED]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i // Android Phones from Unidentified Vendors
    ],
    [MODEL, [TYPE, MOBILE]],
    [
      /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i // Android Tablets from Unidentified Vendors
    ],
    [MODEL, [TYPE, TABLET]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i // Unidentifiable Tablet
    ],
    [[TYPE, TABLET]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i // Unidentifiable Mobile
    ],
    [[TYPE, MOBILE]],
    [
      /(android[-\w\. ]{0,9});.+buil/i // Generic Android Device
    ],
    [MODEL, [VENDOR, 'Generic']]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i // EdgeHTML
    ],
    [VERSION, [NAME, EDGE + 'HTML']],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
    ],
    [VERSION, [NAME, 'Blink']],
    [
      /(presto)\/([\w\.]+)/i, // Presto
      /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
      /ekioh(flow)\/([\w\.]+)/i, // Flow
      /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, // KHTML/Tasman/Links
      /(icab)[\/ ]([23]\.[\d\.]+)/i // iCab
    ],
    [NAME, VERSION],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i // Gecko
    ],
    [VERSION, NAME]
  ],
  os: [
    [
      // Windows
      /microsoft (windows) (vista|xp)/i // Windows (iTunes)
    ],
    [NAME, VERSION],
    [
      /(windows) nt 6\.2; (arm)/i, // Windows RT
      /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, // Windows Phone
      /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
    ],
    [NAME, [VERSION, strMapper, windowsVersionMap]],
    [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
    [
      [NAME, 'Windows'],
      [VERSION, strMapper, windowsVersionMap]
    ],
    [
      // iOS/macOS
      /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, // iOS
      /cfnetwork\/.+darwin/i
    ],
    [
      [VERSION, /_/g, '.'],
      [NAME, 'iOS']
    ],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+haiku)/i // Mac OS
    ],
    [
      [NAME, 'Mac OS'],
      [VERSION, /_/g, '.']
    ],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i // Android-x86/HarmonyOS
    ],
    [VERSION, NAME],
    [
      // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
      /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
      /(blackberry)\w*\/([\w\.]*)/i, // Blackberry
      /(tizen|kaios)[\/ ]([\w\.]+)/i, // Tizen/KaiOS
      /\((series40);/i // Series 40
    ],
    [NAME, VERSION],
    [
      /\(bb(10);/i // BlackBerry 10
    ],
    [VERSION, [NAME, BLACKBERRY]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i // Symbian
    ],
    [VERSION, [NAME, 'Symbian']],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
    ],
    [VERSION, [NAME, FIREFOX + ' OS']],
    [
      /web0s;.+rt(tv)/i,
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i // WebOS
    ],
    [VERSION, [NAME, 'webOS']],
    [
      // Google Chromecast
      /crkey\/([\d\.]+)/i // Google Chromecast
    ],
    [VERSION, [NAME, CHROME + 'cast']],
    [
      /(cros) [\w]+ ([\w\.]+\w)/i // Chromium OS
    ],
    [[NAME, 'Chromium OS'], VERSION],
    [
      // Console
      /(nintendo|playstation) ([wids345portablevuch]+)/i, // Nintendo/Playstation
      /(xbox); +xbox ([^\);]+)/i, // Microsoft Xbox (360, One, X, S, Series X, Series S)
      // Other
      /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, // Joli/Palm
      /(mint)[\/\(\) ]?(\w*)/i, // Mint
      /(mageia|vectorlinux)[; ]/i, // Mageia/VectorLinux
      /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
      /(hurd|linux) ?([\w\.]*)/i, // Hurd/Linux
      /(gnu) ?([\w\.]*)/i, // GNU
      /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
      /(haiku) (\w+)/i // Haiku
    ],
    [NAME, VERSION],
    [
      /(sunos) ?([\w\.\d]*)/i // Solaris
    ],
    [[NAME, 'Solaris'], VERSION],
    [
      /((?:open)?solaris)[-\/ ]?([\w\.]*)/i, // Solaris
      /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, // AIX
      /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
      /(unix) ?([\w\.]*)/i // UNIX
    ],
    [NAME, VERSION]
  ]
}

var UAParser = /*#__PURE__*/ _createClass(function UAParser(_ua) {
  var _this = this,
    _window,
    _window$navigator

  _classCallCheck(this, UAParser)

  _defineProperty(this, 'getBrowser', function () {
    var _browser = {}
    _browser[NAME] = undefined
    _browser[VERSION] = undefined
    rgxMapper.call(_browser, _this.ua, regexes.browser)
    _browser.major = majorize(_browser[VERSION])
    return _browser
  })

  _defineProperty(this, 'getCPU', function () {
    var _cpu = {}
    _cpu[ARCHITECTURE] = undefined
    rgxMapper.call(_cpu, _this.ua, regexes.cpu)
    return _cpu
  })

  _defineProperty(this, 'getDevice', function () {
    var _device = {}
    _device[VENDOR] = undefined
    _device[MODEL] = undefined
    _device[TYPE] = undefined
    rgxMapper.call(_device, _this.ua, regexes.device)
    return _device
  })

  _defineProperty(this, 'getEngine', function () {
    var _engine = {}
    _engine[NAME] = undefined
    _engine[VERSION] = undefined
    rgxMapper.call(_engine, _this.ua, regexes.engine)
    return _engine
  })

  _defineProperty(this, 'getOS', function () {
    var _os = {}
    _os[NAME] = undefined
    _os[VERSION] = undefined
    rgxMapper.call(_os, _this.ua, regexes.os)
    return _os
  })

  _defineProperty(this, 'getUA', function () {
    return _this.ua
  })

  _defineProperty(this, 'setUA', function (ua) {
    _this.ua = ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua
  })

  _defineProperty(this, 'getResult', function () {
    return {
      ua: this.getUA(),
      browser: this.getBrowser(),
      engine: this.getEngine(),
      os: this.getOS(),
      device: this.getDevice(),
      cpu: this.getCPU()
    }
  })

  this.ua =
    _ua ||
    ((_window = window) === null || _window === void 0
      ? void 0
      : (_window$navigator = _window.navigator) === null ||
        _window$navigator === void 0
      ? void 0
      : _window$navigator.userAgent)
  this.BROWSER = enumerize([NAME, VERSION, MAJOR])
  this.CPU = enumerize([ARCHITECTURE])
  this.DEVICE = enumerize([
    MODEL,
    VENDOR,
    TYPE,
    CONSOLE,
    MOBILE,
    SMARTTV,
    TABLET,
    WEARABLE,
    EMBEDDED
  ])
  this.ENGINE = enumerize([NAME, VERSION])
  this.OS = enumerize([NAME, VERSION])
})

exports.EventEmitter = EventEmitter
exports.UAParser = UAParser
exports.addClass = addClass
exports.arrayToTree = arrayToTree
exports.average = average
exports.byteToString = byteToString
exports.checkPwdStrength = checkPwdStrength
exports.classof = classof
exports.createDom = createDom
exports.dateFormat = dateFormat
exports.debounce = debounce
exports.deepCopy = deepCopy
exports.enterFullscreen = enterFullscreen
exports.exitFullscreen = exitFullscreen
exports.findDom = findDom
exports.getUrlParams = getUrlParams
exports.hasClass = hasClass
exports.hexToRgb = hexToRgb
exports.hexToRgba = hexToRgba
exports.isArray = isArray
exports.isBankCardNumber = isBankCardNumber
exports.isBase64 = isBase64
exports.isBigInt = isBigInt
exports.isBoolean = isBoolean
exports.isChinese = isChinese
exports.isColor = isColor
exports.isDate = isDate
exports.isEmail = isEmail
exports.isEnglish = isEnglish
exports.isEvenOrOdd = isEvenOrOdd
exports.isFullScreen = isFullScreen
exports.isFullScreenEnabled = isFullScreenEnabled
exports.isFunction = isFunction
exports.isHexColor = isHexColor
exports.isHttp = isHttp
exports.isHttps = isHttps
exports.isIdCard = isIdCard
exports.isIphoneNumber = isIphoneNumber
exports.isNaN = isNaN
exports.isNil = isNil
exports.isNull = isNull
exports.isNumber = isNumber
exports.isNumberPlate = isNumberPlate
exports.isObject = isObject
exports.isOnline = isOnline
exports.isRegExp = isRegExp
exports.isRgbColor = isRgbColor
exports.isRgbaColor = isRgbaColor
exports.isString = isString
exports.isStrongPwd = isStrongPwd
exports.isSymbol = isSymbol
exports.isTelNumber = isTelNumber
exports.isUndefined = isUndefined
exports.isUrl = isUrl
exports.isValidIdCard = isValidIdCard
exports.makeDurationPretty = makeDurationPretty
exports.randomNumber = randomNumber
exports.randomUID = randomUID
exports.removeClass = removeClass
exports.rgbToHex = rgbToHex
exports.rgbaToHex = rgbaToHex
exports.stringToByte = stringToByte
exports.stringifyQueryString = stringifyQueryString
exports.sum = sum
exports.throttle = throttle
exports.toggleClass = toggleClass
exports.uniq = uniq
