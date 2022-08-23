import { UAParser } from '../src'

describe('Device Functions Api】', () => {
  test('#1 UAParser', () => {
    const parser = new UAParser()
    expect(parser.getBrowser()).toEqual({
      major: '19',
      name: 'jsdom',
      version: '19.0.0'
    })
    expect(parser.getCPU()).toEqual({ architecture: undefined })
    expect(parser.getDevice()).toEqual({
      model: undefined,
      type: undefined,
      vendor: undefined
    })
    expect(parser.getEngine()).toEqual({ name: 'WebKit', version: '537.36' })
    expect(parser.getOS()).toEqual({ name: undefined, version: undefined })
    expect(parser.getResult()).toEqual({
      browser: { major: '19', name: 'jsdom', version: '19.0.0' },
      cpu: { architecture: undefined },
      device: { model: undefined, type: undefined, vendor: undefined },
      engine: { name: 'WebKit', version: '537.36' },
      os: { name: undefined, version: undefined },
      ua: 'Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/19.0.0'
    })
  })
})
