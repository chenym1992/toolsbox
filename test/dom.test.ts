import { addClass, hasClass, toggleClass } from '../src'

describe('Dom Funtions Api】', () => {
  test('#1 class', () => {
    document.body.innerHTML =
      '<div>' +
      '  <span id="username" class="test" />' +
      '  <button id="button" />' +
      '</div>'
    expect(
      hasClass('test', document.querySelector('.test') as HTMLElement)
    ).toBe(true)

    addClass('test2', document.querySelector('.test') as HTMLElement)
    expect(document.querySelector('.test')?.className).toBe('test test2')

    toggleClass('test3', document.querySelector('.test') as HTMLElement)
    expect(document.querySelector('.test')?.classList.contains('test3')).toBe(
      true
    )
    toggleClass('test3', document.querySelector('.test') as HTMLElement)
    expect(document.querySelector('.test')?.classList.contains('test3')).toBe(
      false
    )
  })
})
