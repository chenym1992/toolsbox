# fe-toolsbox

[![npm version](https://img.shields.io/static/v1?label=npm&message=v0.0.3&color=blue)](www.npmjs.com/package/fe-toolsbox) [![license](https://img.shields.io/static/v1?label=license&message=MIT&color=green)](https://github.com/chenym1992/toolsbox/blob/main/LICENSE)

前端业务常用工具库

> 目的：高效率完成前端业务代码

## API 文档:package:

### functions

- [byteToString](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/byteToString.ts) 字节数组转字符串
- [stringToByte](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/stringToByte.ts) 字符串转字节数组
- [throttle](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/throttle.ts) 节流函数
- [debounce](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/debounce.ts) 防抖函数
- [EventEmitter](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/eventEmitter.ts) EventEmitter
- [convertColors](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts) 转换颜色格式
  - [hexToRgb](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L12) 颜色 hex 转 Rgb
  - [hexToRgba](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L33) 颜色 hex 转 Rgba
  - [rgbToHex](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L59) 颜色 rgb 转 hex
  - [rgbaToHex](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/convertColors.ts#L83) 颜色 rgba 转 hex

### regexp

- [isColor](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L53) 判断是否是颜色表达式
- [isHexColor](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L16) 判断 hex 颜色表达式
- [isRgbColor](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L31) 判断 RGB 颜色表达式
- [isRgbaColor](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L48) 判断 RGBA 颜色表达式

### time

- [makeDurationPretty](https://github.com/chenym1992/toolsbox/blob/main/src/time/makeDurationPretty.ts) 美化时长显示
- [dateFormat](https://github.com/chenym1992/toolsbox/blob/main/src/time/dateFormat.ts) 时间格式化

### url

- [getUrlParams](https://github.com/chenym1992/toolsbox/blob/main/src/url/getUrlParams.ts) 获取 Url 完整参数或指定字段参数
- [stringifyQueryString](https://github.com/chenym1992/toolsbox/blob/main/src/url/stringifyQueryString.ts) 简单对象序列化

### utils

- [classof](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L20) 获取任意对象基本数据类型
- [isNumber](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L32) 判断 number 类型
- [isString](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L41) 判断 string 类型
- [isBoolean](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L50) 判断 bool 类型
- [isUndefined](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L59) 判断 undefined 类型
- [isNull](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L68) 判断 null 类型
- [isSymbol](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L77) 判断 symbol 类型
- [isBigInt](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L86) 判断 bigint 类型
- [isObject](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L95) 判断 object 类型
- [isFunction](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L104) 判断 function 类型
- [isArray](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L113) 判断 array 类型
- [isDate](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L122) 判断 date 类型
- [isRegExp](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L31) 判断 regexp 类型
- [isNaN](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L140) 判断 NaN
- [isNil](https://github.com/chenym1992/toolsbox/blob/main/src/utils/index.ts#L149) 判断 null||undefined
