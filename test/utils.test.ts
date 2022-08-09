import { classof, isNaN } from '../src/utils/index'

describe('【Utils Funtions Api】', () => {
  test('#1 classof', () => {
    expect(classof(2022)).toBe('number')
    expect(classof('2022')).toBe('string')
    expect(classof(true)).toBe('boolean')
    expect(classof(undefined)).toBe('undefined')
    expect(classof(null)).toBe('null')
    expect(classof(Symbol('123'))).toBe('symbol')
    expect(classof(1n)).toBe('bigint')
    expect(classof({ a: 1 })).toBe('object')
    expect(classof(classof)).toBe('function')
    expect(classof([1, 2, 3])).toBe('array')
    expect(classof(new Date())).toBe('date')
    expect(classof(/^s/)).toBe('regexp')
  })

  test('#2 isNaN', () => {
    expect(isNaN(undefined)).toBeFalsy()
    expect(isNaN(new Number(NaN))).toBeTruthy()
    expect(isNaN(NaN)).toBeTruthy()
  })
})
