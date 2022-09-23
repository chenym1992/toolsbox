import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: `fe-toolsbox`,
  head: [
    ['link', { rel: 'icon', href: '/toolsbox/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'fe-toolsbox' }]
  ],
  base: '/toolsbox/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenym1992/toolsbox' }
    ],

    footer: {
      message: 'fe-toolsbox 前端业务常用工具库',
      copyright:
        'Copyright © 2022-present chenym1992 & fe-toolsbox Contributors'
    },

    nav: [
      { text: '使用指南', link: '/guide/', activeMatch: '/guide/' },
      { text: 'API文档', link: '/guide/', activeMatch: '/guide/' },
      {
        text: version,
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/chenym1992/toolsbox/blob/main/CHANGELOG.md'
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南🌟',
          items: [
            {
              text: '开始',
              link: '/guide/'
            }
          ]
        },
        {
          text: 'API 文档📦',
          items: [
            {
              text: 'array',
              items: [
                {
                  text: 'index',
                  link: '/guide/array'
                },
                {
                  text: 'arrayToTree',
                  link: '/guide/array-to-tree'
                }
              ]
            },
            {
              text: 'device',
              items: [
                {
                  text: 'UAParser',
                  link: '/guide/device-ua-parser'
                }
              ]
            },
            {
              text: 'dom',
              items: [
                {
                  text: 'document',
                  link: '/guide/dom/document'
                },
                {
                  text: 'fullscreen',
                  link: '/guide/dom/fullscreen'
                },
                {
                  text: 'class',
                  link: '/guide/dom/class'
                }
              ]
            },
            {
              text: 'funtions',
              items: [
                {
                  text: 'helper',
                  link: '/guide/funtions/helper'
                },
                {
                  text: 'deepCopy',
                  link: '/guide/funtions/deepCopy'
                },
                {
                  text: 'byteToString',
                  link: '/guide/funtions/byteToString'
                },
                {
                  text: 'stringToByte',
                  link: '/guide/funtions/stringToByte'
                },
                {
                  text: 'throttle',
                  link: '/guide/funtions/throttle'
                },
                {
                  text: 'debounce',
                  link: '/guide/funtions/debounce'
                },
                {
                  text: 'eventEmitter',
                  link: '/guide/funtions/eventEmitter'
                },
                {
                  text: 'convertColors',
                  link: '/guide/funtions/convertColors'
                },
                {
                  text: 'random',
                  link: '/guide/funtions/random'
                },
                {
                  text: 'network',
                  link: '/guide/funtions/network'
                },
                {
                  text: 'dataURLtoBlob',
                  link: '/guide/funtions/dataURLtoBlob'
                },
                {
                  text: 'imageAndCanvas',
                  link: '/guide/funtions/imageAndCanvas'
                }
              ]
            },
            {
              text: 'regexp',
              items: [
                {
                  text: 'color',
                  link: '/guide/regexp-color'
                },
                {
                  text: 'string',
                  link: '/guide/regexp-string'
                }
              ]
            },
            {
              text: 'time',
              link: '/guide/time'
            },
            {
              text: 'url',
              link: '/guide/url'
            },
            {
              text: 'utils',
              link: '/guide/utils'
            }
          ]
        }
      ]
    }
  }
})
