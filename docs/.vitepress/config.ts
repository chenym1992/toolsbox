import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `fe-toolsbox`,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenym1992/toolsbox' }
    ],

    footer: {
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
