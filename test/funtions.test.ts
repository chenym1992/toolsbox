import { byteToString, debounce, stringToByte, throttle } from '../src'

describe('【Funtions Api】', () => {
  test('#1 stringToByte', () => {
    expect(stringToByte('123')).toEqual([49, 50, 51])
  })

  test('#2 byteToString', () => {
    expect(byteToString([49, 50, 51])).toBe('123')
  })

  test('#3 throttle', () => {
    jest.useFakeTimers()
    const funcSpy = jest.fn()
    const throttledFunc = throttle(funcSpy, 100)
    for (let i = 0; i < 100; i++) {
      throttledFunc()
      jest.advanceTimersByTime(5)
    }
    expect(funcSpy).toHaveBeenCalledTimes(5)
  })

  test('#4 debounce', () => {
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
})
