/**
 * uaParser
 * fork from https://github.com/faisalman/ua-parser-js
 * @copyright @faisalman
 */

import {
  ARCHITECTURE,
  CONSOLE,
  EMBEDDED,
  MAJOR,
  MOBILE,
  MODEL,
  NAME,
  regexes,
  SMARTTV,
  TABLET,
  TYPE,
  UA_MAX_LENGTH,
  VENDOR,
  VERSION,
  WEARABLE
} from './const'
import { enumerize, majorize, rgxMapper, trim } from './helper'

interface UaInfoInstance {
  name?: string
  version?: string
  major?: number | string
  architecture?: string
  vendor?: string
  model?: string
  type?: string
}

export class UAParser {
  [x: string]: string | object
  constructor(ua?: string) {
    this.ua = ua || window?.navigator?.userAgent
    this.BROWSER = enumerize([NAME, VERSION, MAJOR])
    this.CPU = enumerize([ARCHITECTURE])
    this.DEVICE = enumerize([
      MODEL,
      VENDOR,
      TYPE,
      CONSOLE,
      MOBILE,
      SMARTTV,
      TABLET,
      WEARABLE,
      EMBEDDED
    ])
    this.ENGINE = enumerize([NAME, VERSION])
    this.OS = enumerize([NAME, VERSION])
  }
  getBrowser = () => {
    const _browser: UaInfoInstance = {}
    _browser[NAME] = undefined
    _browser[VERSION] = undefined
    rgxMapper.call(_browser, this.ua, regexes.browser)
    _browser.major = majorize(_browser[VERSION])
    return _browser
  }
  getCPU = () => {
    const _cpu: UaInfoInstance = {}
    _cpu[ARCHITECTURE] = undefined
    rgxMapper.call(_cpu, this.ua, regexes.cpu)
    return _cpu
  }
  getDevice = () => {
    const _device: UaInfoInstance = {}
    _device[VENDOR] = undefined
    _device[MODEL] = undefined
    _device[TYPE] = undefined
    rgxMapper.call(_device, this.ua, regexes.device)
    return _device
  }
  getEngine = () => {
    const _engine: UaInfoInstance = {}
    _engine[NAME] = undefined
    _engine[VERSION] = undefined
    rgxMapper.call(_engine, this.ua, regexes.engine)
    return _engine
  }
  getOS = () => {
    const _os: UaInfoInstance = {}
    _os[NAME] = undefined
    _os[VERSION] = undefined
    rgxMapper.call(_os, this.ua, regexes.os)
    return _os
  }
  getUA = () => {
    return this.ua
  }
  setUA = (ua: string) => {
    this.ua = ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua
  }
  getResult = function () {
    return {
      ua: this.getUA(),
      browser: this.getBrowser(),
      engine: this.getEngine(),
      os: this.getOS(),
      device: this.getDevice(),
      cpu: this.getCPU()
    }
  }
}
