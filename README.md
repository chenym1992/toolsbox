# fe-toolsbox

[![npm version](https://img.shields.io/static/v1?label=npm&message=v0.0.9&color=blue)](https://www.npmjs.com/package/fe-toolsbox) [![license](https://img.shields.io/static/v1?label=license&message=MIT&color=green)](https://github.com/chenym1992/toolsbox/blob/main/LICENSE)

前端业务常用工具库

> 目的：高效率完成前端业务代码

## 安装 :wrench:
使用 npm、yarn、pnpm 安装

```shell
npm i fe-toolsbox -D
yarn add fe-toolsbox -D
pnpm add fe-toolsbox -D
```

## 快速上手:key:

```js
import { randomNumber, randomUID } from "fe-toolsbox";
randomNumber();
// 11 [0-100]
randomNumber(0,1);
// 0 | 1
randomUID()
//'9f235a5f-27e8-4e72-a854-f5b1fd027427'
```

## npm 链接:link:

[fe-toolsbox](https://www.npmjs.com/package/fe-toolsbox)

## API 文档:package:

### array

- [array](https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts) 数组
  - [sum](https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts#L10) 数组求和
  - [average](https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts#L21) 数组求平均数
  - [uniq](https://github.com/chenym1992/toolsbox/blob/main/src/array/index.ts#L34) 数组去重

### dom

- [class](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts) dom class
  - [hasClass](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L12) 是否存在指定class
  - [addClass](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L28) 添加class
  - [toggleClass](https://github.com/chenym1992/toolsbox/blob/main/src/dom/class.ts#L48) 切换class

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
- [random](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/random.ts) 转换颜色格式
  - [randomNumber](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/random.ts#L9) 生成随机数,默认0-100
  - [randomUID](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/random.ts#L18) 随机生成一个UID
- [network](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts) 转换颜色格式
  - [isHttps](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L6) 判断https
  - [isHttp](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L16) 判断http
  - [isOnline](https://github.com/chenym1992/toolsbox/blob/main/src/funtions/network.ts#L25) 判断网络状态

### regexp

- [color](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts) 颜色格式判断
  - [isColor](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L53) 判断是否是颜色表达式
  - [isHexColor](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L16) 判断 hex 颜色表达式
  - [isRgbColor](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L31) 判断 RGB 颜色表达式
  - [isRgbaColor](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/color.ts#L48) 判断 RGBA 颜色表达式
- [string](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts) 字符串格式判断
  - [isIphoneNumber](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L15) 宽松判断国内手机号
  - [isTelNumber](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L32) 判断座机号码（带分机号码）
  - [isIdCard](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L51) 判断身份证号
  - [isValidIdCard](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L64) 判断身份证是否有效
  - [isValidIdCard](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L64) 判断身份证是否有效
  - [isEmail](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L154) 判断邮箱格式
  - [isUrl](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L167) 判断Url格式
  - [isEnglish](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L178) 判断英文格式
  - [isChinese](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L187) 判断中文格式
  - [isNumberPlate](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L202) 判断车牌号格式
  - [isBase64](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L217) 判断base64格式
  - [isBankCardNumber](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L228) 判断银行卡号(包含对公对私)格式
  - [isStrongPwd](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L238) 强密码格式校验
  - [checkPwdStrength](https://github.com/chenym1992/toolsbox/blob/main/src/regexp/string.ts#L261) 检测密码强度
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
