import { isColor, isHexColor, isRgbaColor, isRgbColor } from '../src'

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
})
