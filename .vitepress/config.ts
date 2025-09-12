import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Neo Developer",
  description: "新生代开发者指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '开始阅读', link: '/chapter-0' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '第零章 开始之前', link: '/chapter-0' },
          { text: '第一章 BBFM', link: '/chapter-1' },
          { text: '第二章 常用工具', link: '/chapter-2' },
          { text: '第三章 扩展内容', link: '/chapter-3' }
        ]
      },
      {
        text: '编程基础',
        items: [
          { text: 'Web 后端：Golang', link: '/golang' },
          { text: 'Web 前端：Typescript', link: '/typescript' },
          { text: '人工智能：Python', link: '/python' },
          { text: '系统：Rust', link: '/rust' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/binbatlab/neo-developer' }
    ],
    editLink: {
      pattern: 'https://github.com/binbatlab/neo-developer/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    }
  }
})
