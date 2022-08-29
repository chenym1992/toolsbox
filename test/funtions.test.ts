import {
  debounce,
  deepCopy,
  EventEmitter,
  hexToRgb,
  hexToRgba,
  isHttp,
  isHttps,
  rgbaToHex,
  rgbToHex,
  throttle
} from '../src'

describe('【Funtions Api】', () => {
  test('#1 throttle', () => {
    jest.useFakeTimers()
    const funcSpy = jest.fn()
    const throttledFunc = throttle(funcSpy, 100)
    for (let i = 0; i < 100; i++) {
      throttledFunc()
      jest.advanceTimersByTime(5)
    }
    expect(funcSpy).toHaveBeenCalledTimes(5)
  })

  test('#2 debounce', () => {
    jest.useFakeTimers()
    const funcSpy = jest.fn()
    const debouncedFunc = debounce(funcSpy, 100)
    for (let i = 0; i < 100; i++) {
      debouncedFunc()
      if (i < 50) {
        jest.advanceTimersByTime(5)
      } else if (i < 75) {
        jest.advanceTimersByTime(105)
      }
    }
    expect(funcSpy).toHaveBeenCalledTimes(25)
  })

  test('#3 eventEmitter', () => {
    const bus = new EventEmitter()
    bus.once('click', res => {
      expect(res).toBe('123')
    })
    bus.on({
      click: (res: any) => {
        expect(res).toBe('123')
      },
      click2: (res: any) => {
        expect(res).toBe('1235')
      }
    })
    bus.emit('click', '123')
    bus.emit('click2', '1235')
  })

  test('#4 convertColors', () => {
    expect(hexToRgb('#FFFFFF')).toBe('rgb(255,255,255)')
    expect(hexToRgba('#FFFFFF')).toBe('rgba(255,255,255,1)')
    expect(hexToRgba('#FFFFFF0F')).toBe('rgba(255,255,255,0.06)')
    expect(rgbToHex('rgb(0,0,15)')).toBe('#00000F')
    expect(rgbaToHex('rgba(0,0,15,0.1)')).toBe('#00000F19')
    expect(rgbaToHex('rgba(0,0,15,11)')).toBe('#00000F')
    expect(rgbaToHex('rgba(0,0,15,1)')).toBe('#00000F')
  })

  test('#5  network', () => {
    expect(isHttps('https://test.com')).toBeTruthy()
    expect(isHttp('http://test.com')).toBeTruthy()
  })

  test('#6  deepCopy', () => {
    const orin = {
      a: 1,
      b: 2,
      c: 3,
      d: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      f: { name: 'WebKit', version: '537.36' },
      g: function () {
        return 15
      }
    }
    expect(deepCopy({}, orin)).toEqual(orin)
  })
})
