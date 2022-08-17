/**
 * 是否存在指定class
 * @param className
 * @param el
 * @returns
 *
 * @example
 * //<span class='test'></span>
 * hasClass('test',document.querySelector('span'))
 * // => true
 */
export function hasClass(className: string, el: HTMLElement) {
  return el.classList.contains(className)
}

/**
 * 添加class
 * @param className
 * @param el
 *
 * @example
 * //<span></span>
 * addClass('test',document.querySelector('span'))
 * => <span class='test'></span>
 * addClass('test test2',document.querySelector('span'))
 * => <span class='test test2'></span>
 */
export function addClass(className: string, el: HTMLElement) {
  if (/\s+/.test(className)) {
    el.className += ' ' + className
  } else {
    el.classList.add(className)
  }
}

/**
 * 切换class
 * @param className
 * @param el
 *
 * @example
 * //<span class='test'></span>
 * toggleClass('test',document.querySelector('span'))
 * //=> <span></span>
 * toggleClass('test',document.querySelector('span'))
 * //<span class='test'></span>
 */
export function toggleClass(className: string, el: HTMLElement) {
  el.classList.toggle(className)
}
