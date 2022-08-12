import { makeDurationPretty } from '../src'

describe('【Time Funtions Api】', () => {
  test('#1 makeDurationPretty', () => {
    expect(makeDurationPretty(12)).toBe('12秒')
  })
})
