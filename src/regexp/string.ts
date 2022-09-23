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
export function isIphoneNumber(string: string) {
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
export function isTelNumber(string: string) {
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
export function isIdCard(string: string) {
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
export function isValidIdCard(string: string) {
  if (!isIdCard(string)) {
    console.log('你输入的身份证长度或格式错误')
    return false
  }
  //身份证城市
  const CityObject = {
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
  }

  // 出生日期验证
  const Birthday =
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
    // console.log('身份证上的出生日期非法')
    return false
  }

  // 身份证号码校验
  let sum = 0
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const codes = '10X98765432'

  for (var i = 0; i < string.length - 1; i++) {
    sum += +string[i] * weights[i]
  }
  const lastCode = codes[sum % 11] //计算出来的最后一位身份证号码
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
export function isEmail(string: string) {
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
export function isUrl(string: string) {
  return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
    string
  )
}

/**
 * 判断英文
 * @param string
 * @returns
 */
export function isEnglish(string: string) {
  return /^[a-zA-Z]+$/.test(string)
}

/**
 * 判断中文
 * @param string
 * @returns
 */
export function isChinese(string: string) {
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
export function isNumberPlate(string: string) {
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
export function isBase64(string: string) {
  return /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(
    string
  )
}

/**
 * 判断银行卡号(包含对公对私)
 * @param string
 * @returns
 */
export function isBankCardNumber(string: string) {
  return /^[1-9]\d{9,29}$/.test(string)
}

/**
 * 强密码校验
 * @desc 强密码校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * @param string
 * @returns
 */
export function isStrongPwd(string: string) {
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
export function checkPwdStrength(string: string) {
  let strength = 0
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
