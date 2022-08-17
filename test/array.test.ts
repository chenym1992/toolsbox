import { average, sum, uniq } from '../src'

describe('【Array Funtions Api】', () => {
  test('#1 sum', () => {
    expect(sum([1, 2, 3, 4])).toBe(10)
  })
  test('#2 average', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5)
  })
  test('#3 uniq', () => {
    expect(uniq([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4])
  })
})
