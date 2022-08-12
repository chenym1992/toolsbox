import {
  byteToString,
  debounce,
  EventEmitter,
  stringToByte,
  throttle
} from '../src'

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

  test('#5 eventEmitter', () => {
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
})
