import { dateFormat, makeDurationPretty } from '../src'

describe('【Time Funtions Api】', () => {
  test('#1 makeDurationPretty', () => {
    expect(makeDurationPretty(12)).toBe('12秒')
  })
  test('#2 dateFormat', () => {
    expect(dateFormat(new Date(), 'YYYY')).toBe('2022')
  })
})
