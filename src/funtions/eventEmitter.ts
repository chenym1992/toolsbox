import { isObject } from '../utils/index'

type Handler<T = any> = (val: T) => void

export class EventEmitter {
  private __events: Map<string, Set<Handler>> = new Map()
  private __once: Map<string, Set<Handler>> = new Map()

  /**
   * 新增一个或多个监听函数
   * @param events
   * @param callback
   * @returns
   *
   * @example
   * eventObj.on('event', callback)
   * eventObj.on('event1 event2', callback)
   * eventObj.on({ event1: callback1, event2: callback2 })
   */
  on(events: string | object, callback?: Handler) {
    if (isObject(events)) {
      for (const event in events as object) {
        if (events.hasOwnProperty(event)) {
          let set = this.__events.get(event)
          if (!set) {
            set = new Set()
            this.__events.set(event, set)
          }
          set.add(events[event])
        }
      }
    } else {
      ;(events as string).split(' ').forEach(event => {
        let set = this.__events.get(event)
        if (!set) {
          set = new Set()
          this.__events.set(event, set)
        }
        if (callback) {
          set.add(callback)
        }
      })
    }
  }

  /**
   * 移除单个、多个或全部监听事件
   * @param events
   * @param callback
   *
   * @example
   * eventObj.off('event')
   * eventObj.off('event', callback)
   * eventObj.off('event1 event2')
   * eventObj.off({ event1: callback1, event2: callback2 })
   * eventObj.off()
   *
   */
  off(events?: string | object, callback?: Handler) {
    if (isObject(events)) {
      for (const event in events as object) {
        if (events?.hasOwnProperty(event)) {
          let set1 = this.__events.get(event)
          if (set1 && callback) {
            set1.delete(callback)
          }
          let set2 = this.__once.get(event)
          if (set2 && callback) {
            set2.delete(callback)
          }
        }
      }
    } else if (!!events) {
      ;(events as string).split(' ').forEach(event => {
        let set1 = this.__events.get(event)
        if (set1 && callback) {
          set1.delete(callback)
        }
        let set2 = this.__once.get(event)
        if (set2 && callback) {
          set2.delete(callback)
        }
      })
    } else {
      this.__events = new Map()
      this.__once = new Map()
    }
  }

  /**
   * 添加一个或多个单次事件
   * @param events
   * @param callback
   * @returns
   *
   * @example
   * eventObj.once('event', callback)
   * eventObj.once('event1 event2', callback)
   * eventObj.once({ event1: callback1, event2: callback2 })
   */
  once(events: string | object, callback: Handler) {
    if (isObject(events)) {
      for (const event in events as object) {
        if (events.hasOwnProperty(event)) {
          let set = this.__once.get(event)
          if (!set) {
            set = new Set()
            this.__once.set(event, set)
          }
          set.add(callback)
        }
      }
    } else {
      ;(events as string).split(' ').forEach(event => {
        let set = this.__once.get(event)
        if (!set) {
          set = new Set()
          this.__once.set(event, set)
        }
        set.add(callback)
      })
    }
  }

  /**
   * 触发事件
   * @param event
   * @param value
   * @returns
   */
  emit(event: string, value: any) {
    const set1 = this.__events.get(event)
    if (!set1) return
    ;[...set1].forEach(fn => fn(value))

    const set2 = this.__once.get(event)
    if (!set2) return
    ;[...set2].forEach(fn => fn(value))
    this.__once.delete(event)
  }
}
