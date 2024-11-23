# 第一章 BBFM

## BBFM

新实习生第一个月目标就是完成

确切的说，本文档提到过的东西都不会专门解释，默认你已经知道了这些

**BinBat 实习生一个月强制自学内容 BBFM（BinBat First Month）**

* * *

为了保障所有的沟通都是有效的，项目沟通，过于基础的知识将不会解释

比如：任何项目再沟通时是不会去解释私有 IP 地址和公有 IP 地址区别，这些默认内容你已经知道

BBFM 完成时间时间为一个月，考虑部分有实习生还有其他事情，最长不得超过三个月

超出未完成被视为不适合在这个领域发展

## 第一周：Linux 基础

读书和实践

<Card
  url="https://linux.vbird.org/linux_basic/"
  title="《鸟哥的 Linux 私房菜（基础篇）》"
  describe="歡迎光臨鳥哥的 Linux 私房菜，這裡介紹 Linux 的相關知識喔！"
/>


**测试标准：自己编译 Linux 内核**
1. 现场讲解自己编译内核的可重现式操作笔记
2. 使用自己编译的内核启动

::: tip 可重现式笔记
可重现式操作笔记要保障，**其他人拿到你的笔记可以完整复现你的状态**
:::

## 第二周：服务器

读书和实践

<Card
  url="https://linux.vbird.org/linux_server/"
  title="《鸟哥的 Linux 私房菜（服务器篇）》"
  describe="歡迎光臨鳥哥的 Linux 私房菜，這裡介紹 Linux 的相關知識喔！"
/>


**测试标准：自己搭建 www 服务器，并用 PHP 写一个文件上传和下载功能**

### Secure Shell (SSH) 

使用 SSH 连接远程服务器

<Card
  url="https://wangdoc.com/ssh/"
  title="SSH 教程"
  describe="SSH 是 Linux 系统的登录工具，现在广泛用于服务器登录和各种加密通信。本教程介绍 SSH（主要是它的实现 OpenSSH）的概念和基本用法，也可以当作手册查询。"
/>


## 第三周：编程基础

我们目前主要用着三种语言：Golang，Typescript，Rust

- [Golang (Web 后端，数据库)（默认：如果你不知道选什么，那就选这个）](/golang)
- [Typescript (Web 前端，用户界面，可视化)](/typescript)
- [Rust (系统，考虑到 Rust 自身的复杂性，默认禁止选择这项)](/rust)

读书：[《Go 语言设计与实现》](https://draveness.me/golang/)

实践：自己找资料实现 Web 应用

::: tip
如果没有任何想法，那就去实现一个 Blog
:::

**测试标准：现场功能演示**

## 第四周：代码管理和协作

读书

<Card
  url="https://git-scm.com/book/zh/v2"
  title="《GitHub 入门与实践》"
  describe="自诞生于 2005 年以来，Git 日臻成熟完善，在高度易用的同时，仍然保留着初期设定的目标。 它的速度飞快，极其适合管理大项目，有着令人难以置信的非线性分支管理系统"
/>


使用 `git bisect` 找出问题，购买域名。配置 https 指向上周开发的网站。给开源项目提交 PR (Pull Request)

::: tip
为了让自己的代码尽快被合并，开发首先要学会写优雅的代码。

其次要提高 PR 的可读性（写的时候尽可能拆成多个独立的可被 review 的 commit，写之后为 PR 认真写 description）。

最后是估时必须加上 PR 和提测（如有）的时间，而不是以“明天要上线了”为理由逼迫 reviewer 合并。
:::

**测试标准：**

- 现场演示有 https 到站点
- PR (Pull Request) 被 merged

::: warning
按照一般情况，等很多天，反复修改，甚至 PR 并不一定会被合并，在开源项目里属于非常常见情况

所以要尽可能多提 PR 和尽早提 PR，这样才可能在时限内完成
:::

<Card
  url="https://liaoxuefeng.com/books/git/introduction/index.html"
  title="浅显易懂的Git教程"
  describe="为什么要编写这个教程？因为我在学习Git的过程中，买过书，也在网上Google了一堆Git相关的文章和教程，但令人失望的是，这些教程不是难得令人发指，就是简单得一笔带过，或者，只支离破碎地介绍Git的某几个命令，还有直接从Git手册粘贴帮助文档的，总之，初学者很难找到一个由浅入深，学完后能立刻上手的Git教程。"
/>

### Git Commit message

<Card
  url="https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/"
  title="Angular 提交信息规"
  describe="目前最受开发人员肯定的规范是前端框架 Angular 提出的 Angular 提交信息规范"
/>

<Card
  url="http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html"
  title="Commit message 和 Change log 编写指南"
  describe=""
/>

<Card
  url="https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Conventional%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83/"
  title="Conventional 提交规范"
  describe=""
/>

<Card
  url="https://www.conventionalcommits.org/en/v1.0.0/"
  title="Conventional Commits"
  describe=""
/>

### GitHub 和 PR

[![如何参与开源项目 - 细说 GitHub 上的 PR 全过程](https://svg.bookmark.style/api?url=https://blog.devstream.io/posts/open-a-pr-in-github/&mode=dark&style=horizontal)](https://blog.devstream.io/posts/open-a-pr-in-github/)
<Card
  url="https://jimmysong.io/blog/open-source-cla/"
  title="开源社区贡献者协议 CLA 介绍"
  describe="很多从事开源人可能会注意到有些开源项目要求贡献者在提交 PR 前首先签署 CLA，只有签署了 CLA 之后 PR 才可以合并。"
/>

> 有一句名言是咋说的来着? 代码主要是给人看的, 其次才是给电脑去运行.

<Card
  url="http://editorconfig.book.trendsoft.org/"
  title="使用 .editorconfig 文件来统一编程风格"
  describe="介绍了 .editorconfig 文件及如何使用它来统一项目的编程风格, 兼谈了一些项目管理的心得."
/>

### git bisect

二分查找引入问题的 commit

### 关于版本号

<Card
  url="https://semver.org/lang/zh-CN/"
  title="语义化版本规范"
  describe=""
/>

<Card
  url="https://zhuanlan.zhihu.com/p/508354840"
  title="常见软件版本号详解"
  describe=""
/>

