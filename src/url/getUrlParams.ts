/**
 * 获取url参数
 * @param  url
 * @param key
 * @returns
 * @example
 *
 * getUrlParam('https://example.com?a=1&b=1');
 * // => {a:1,b:1}
 * getUrlParam('https://example.com?a=1&b=1',a);
 * // => 1
 * getUrlParam('https://example.com?a=1&b=1&a=2');
 * // => {a:[1,2],b=1}
 * getUrlParam('https://example.com?a=1&b=1&a=2',a);
 * // => [1,2]
 */
export default function getUrlParams(url: string, key: string): any {
  url = url || window?.location?.href
  if (!url || url.split('?').length < 2 || !url.split('&').length) {
    return key ? void 0 : {}
  }
  const parameters = url.split('?')[1].split('&')
  const query = {}
  parameters.forEach(item => {
    const key = item.split('=')[0]
    const param = decodeURIComponent(item.split('=')[1])
    if (
      Object.keys(query).indexOf(key) > -1 &&
      typeof query[key] === 'string'
    ) {
      const arr = [query[key], param]
      query[key] = arr
    } else if (typeof query[key] === 'object') {
      query[key].push(param)
    } else {
      query[key] = param
    }
  })
  return key ? query[key] : query
}
