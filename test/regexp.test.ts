import {
  checkPwdStrength,
  isBase64,
  isChinese,
  isColor,
  isEmail,
  isEnglish,
  isHexColor,
  isIdCard,
  isIphoneNumber,
  isNumberPlate,
  isRgbaColor,
  isRgbColor,
  isStrongPwd,
  isTelNumber,
  isUrl,
  isValidIdCard
} from '../src'

describe('Regexp Funtions Api】', () => {
  test('#1 isColor', () => {
    expect(isColor('#AAA')).toBeTruthy()
    expect(isColor('#AAAAAA')).toBeTruthy()
    expect(isColor('RGB(255,15,12)')).toBeTruthy()
    expect(isColor('RGBA(255,15,12,0.1)')).toBeTruthy()
  })

  test('#2 isHexColor', () => {
    expect(isHexColor('#AAA')).toBeTruthy()
    expect(isHexColor('#AAAA')).toBeTruthy()
    expect(isHexColor('#AAAAAA')).toBeTruthy()
    expect(isHexColor('#AAAAAA00')).toBeTruthy()
  })

  test('#3 isRgbColor', () => {
    expect(isRgbColor('RGB(255,15,12)')).toBeTruthy()
    expect(isRgbColor('RGBA(255,15,12,1)')).toBeFalsy()
  })

  test('#4 isRgbaColor', () => {
    expect(isRgbaColor('RGB(255,15,12)')).toBeFalsy()
    expect(isRgbaColor('RGBA(255,15,12,0.1)')).toBeTruthy()
    expect(isRgbaColor('RGBA(255,15,12,11)')).toBeTruthy()
  })

  test('#5 isIphoneNumber', () => {
    expect(isIphoneNumber('18951221696')).toBeTruthy()
    expect(isIphoneNumber('+8618951221696')).toBeTruthy()
    expect(isIphoneNumber('008618951221696')).toBeTruthy()
  })

  test('#6 isTelNumber', () => {
    expect(isTelNumber('025-3456789')).toBeTruthy()
    expect(isTelNumber('025-3456789-23')).toBeTruthy()
    expect(isTelNumber('0814-34567891')).toBeTruthy()
  })

  test('#7 isIdCard', () => {
    expect(isIdCard('430723200010014567')).toBeTruthy()
    expect(isIdCard('43072320001001456X')).toBeTruthy()
    expect(isIdCard('43072320001001456x')).toBeTruthy()
    expect(isIdCard('430723200010014')).toBeTruthy()
    expect(isValidIdCard('43072320001001456X')).toBeFalsy()
    // 需要真实身份证号
    // expect(isValidIdCard('460027197306180612')).toBeTruthy()
  })

  test('#8 isEmail', () => {
    expect(isEmail('example@example.com')).toBeTruthy()
  })

  test('#9 isUrl', () => {
    expect(isUrl('http://example.com')).toBeTruthy()
  })

  test('#10 isEnglish', () => {
    expect(isEnglish('example')).toBeTruthy()
  })

  test('#11 isChinese', () => {
    expect(isChinese('中国人')).toBeTruthy()
  })

  test('#12 isNumberPlate', () => {
    expect(isNumberPlate('京A66666')).toBeTruthy()
    expect(isNumberPlate('京AD66666')).toBeTruthy()
  })

  test('#13 isBase64', () => {
    expect(
      isBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA')
    ).toBeTruthy()
  })

  test('#14 isStrongPwd', () => {
    expect(isStrongPwd('123456aA@')).toBeTruthy()
  })

  test('#14 checkPwdStrength', () => {
    expect(checkPwdStrength('123')).toBe(0)
    expect(checkPwdStrength('123456')).toBe(1)
    expect(checkPwdStrength('123456a')).toBe(2)
    expect(checkPwdStrength('123456A')).toBe(2)
    expect(checkPwdStrength('123456aA')).toBe(3)
    expect(checkPwdStrength('123456aA@')).toBe(4)
  })
})
