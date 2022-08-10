import { byteToString, stringToByte } from '../src'

describe('【Funtions Api】', () => {
  test('#1 stringToByte', () => {
    expect(stringToByte('123')).toEqual([49, 50, 51])
  })

  test('#2 byteToString', () => {
    expect(byteToString([49, 50, 51])).toBe('123')
  })
})
