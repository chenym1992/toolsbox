/*!
 * Build Time: 2022-08-10T03:20:54.087Z
 * Toolsbox.js v0.0.1
 * (c) 2014-2022 chenym1992
 * Released under the MIT License.
 */
'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

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
  var _a
  url =
    url ||
    ((_a = window === null || window === void 0 ? void 0 : window.location) ===
      null || _a === void 0
      ? void 0
      : _a.href)
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
    } else if (typeof query[key] === 'object') {
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
  var _loop_1 = function (key) {
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
    _loop_1(key)
  }
  return paramsArray.join('&')
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
  if (typeof obj !== 'object') return typeof obj
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

exports.byteToString = byteToString
exports.classof = classof
exports.getUrlParams = getUrlParams
exports.isArray = isArray
exports.isBigInt = isBigInt
exports.isBoolean = isBoolean
exports.isDate = isDate
exports.isFunction = isFunction
exports.isNaN = isNaN
exports.isNil = isNil
exports.isNull = isNull
exports.isNumber = isNumber
exports.isObject = isObject
exports.isRegExp = isRegExp
exports.isString = isString
exports.isSymbol = isSymbol
exports.isUndefined = isUndefined
exports.stringToByte = stringToByte
exports.stringifyQueryString = stringifyQueryString
