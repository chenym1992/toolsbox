import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `fe-toolsbox`,
  base: '/toolsbox/',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenym1992/toolsbox' }
    ],

    footer: {
      message: 'fe-toolsbox 前端业务常用工具库',
      copyright:
        'Copyright © 2022-present chenym1992 & fe-toolsbox Contributors'
    },

    nav: [{ text: '使用指南', link: '/guide/', activeMatch: '/guide/' }],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/'
            }
          ]
        }
      ]
    }
  }
})
