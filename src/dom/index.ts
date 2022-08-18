export * from './class'

/**
 * 是否在全屏状态
 * @returns
 */
export function isFullScreen() {
  return (
    document.fullscreenElement ||
    (document as any).webkitFullScreenElement ||
    (document as any).mozFullScreenElement ||
    (document as any).msFullScreenElement
  )
}

/**
 * 是否支持全屏
 * @returns
 */
export function isFullScreenEnabled() {
  return (
    (document as Document).fullscreenEnabled ||
    (document as any).webkitFullscreenEnabled ||
    (document as any).mozFullScreenEnabled ||
    (document as any).msFullscreenEnabled
  )
}

/**
 * 进入全屏
 * @tips MAC、IOS下的Safari浏览器不支持非交互全屏
 * @param element
 * @returns
 */
export function enterFullscreen(element: HTMLElement = document.body) {
  if (!isFullScreenEnabled()) {
    return Promise.reject(new Error('全屏模式被禁用'))
  }
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if ((element as any).mozRequestFullScreen) {
    ;(element as any).mozRequestFullScreen()
  } else if ((element as any).msRequestFullscreen) {
    ;(element as any).msRequestFullscreen()
  } else if ((element as any).webkitRequestFullscreen) {
    ;(element as any).webkitRequestFullScreen()
  }
}

/**
 * 退出全屏
 */
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if ((document as any).msExitFullscreen) {
    ;(document as any).msExitFullscreen()
  } else if ((document as any).mozCancelFullScreen) {
    ;(document as any).mozCancelFullScreen()
  } else if ((document as any).webkitExitFullscreen) {
    ;(document as any).webkitExitFullscreen()
  }
}
