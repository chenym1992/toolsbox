import getUrlParams from '../src/url/getUrlParams'

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
})
