import { getUrlParams, stringifyQueryString } from '../src'

describe('【Url Funtions Api】', () => {
  const testUrl = 'https://example.com?a=1&b=1&a=2'
  test('#1 getUrlParams', () => {
    expect(getUrlParams()).toEqual({})
  })
  test('#2 getUrlParams', () => {
    expect(getUrlParams(undefined, 'a')).toBeUndefined()
  })
  test('#3 getUrlParams', () => {
    expect(getUrlParams(testUrl)).toEqual({ a: ['1', '2'], b: '1' })
  })
  test('#4 getUrlParams', () => {
    expect(getUrlParams(testUrl, 'a')).toEqual(['1', '2'])
  })
  test('#5 getUrlParams', () => {
    expect(getUrlParams(testUrl, 'b')).toBe('1')
  })

  test('#6 stringifyQueryString', () => {
    expect(stringifyQueryString({ a: [1, 2, 3], b: { a: 3 }, c: 4 })).toBe(
      'a=1&a=2&a=3&b=%7B%22a%22%3A3%7D&c=4'
    )
  })
})
