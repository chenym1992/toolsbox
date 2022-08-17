/**
 * 判断https
 * @param url
 * @returns
 */
export function isHttps(url?: string) {
  url = url || location.href
  return url.indexOf('https://') === 0
}

/**
 * 判断http
 * @param url
 * @returns
 */
export function isHttp(url?: string) {
  url = url || location.href
  return url.indexOf('http://') === 0
}

/**
 * 判断网络状态
 * @returns
 */
export function isOnline() {
  return navigator.onLine
}
