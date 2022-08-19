import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: `fe-toolsbox`,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
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
      { text: 'API文档', link: '/guide/array', activeMatch: '/guide/' },
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
              link: '/guide/array'
            },
            {
              text: 'dom',
              link: '/guide/dom'
            },
            {
              text: 'funtions',
              link: '/guide/funtions'
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
