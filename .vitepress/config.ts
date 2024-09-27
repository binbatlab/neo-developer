import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Neo Developer",
  description: "新生代开发者指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '开始阅读', link: '/main' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '开始阅读', link: '/main' },
          { text: 'BBFM', link: '/bbfm' },
          { text: '关于本文档', link: '/about' }
        ]
      }
    ]
  }
})
