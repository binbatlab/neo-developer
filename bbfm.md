# BBFM

BinBat 实习生一个月强制自学内容 BBFM（BinBat First Month）

* * *

为了保障所有的沟通都是有效的，项目沟通，过于基础的知识将不会解释

比如：任何项目再沟通时是不会去解释私有 IP 地址和公有 IP 地址区别，这些默认内容你已经知道

BBFM 完成时间时间为一个月，考虑部分有实习生还有其他事情，最长不得超过三个月

超出未完成被视为不适合在这个领域发展

## 第一周：Linux 基础

读书和实践：[《鸟哥的 Linux 私房菜（基础篇）》](https://linux.vbird.org/linux_basic/)

**测试标准：自己编译 Linux 内核**
1. 现场讲解自己编译内核的可重现式操作笔记
2. 使用自己编译的内核启动

::: tip
可重现式操作笔记要保障，**其他人拿到你的笔记可以完整复现你的状态**
:::

## 第二周：服务器

读书和实践：[《鸟哥的 Linux 私房菜（服务器篇）》](https://linux.vbird.org/linux_server/)

**测试标准：自己搭建 www 服务器，并用 PHP 写一个文件上传和下载功能**

### Secure Shell (SSH) 

使用 SSH 连接远程服务器

[SSH 教程](https://wangdoc.com/ssh/)

## 第三周：编程基础

我们目前主要用着三种语言：Golang，Typescript，Rust

- Golang (Web 后端，数据库)（默认：如果你不知道选什么，那就选这个）
- Typescript (Web 前端，用户界面，可视化)
- Rust (系统，考虑到 Rust 自身的复杂性，默认禁止选择这项)

读书：[《Go 语言设计与实现》](https://draveness.me/golang/)

实践：自己找资料实现 Web 应用

::: tip
如果没有任何想法，那就去实现一个 Blog
:::

**测试标准：现场功能演示**

## 第四周：代码管理和协作

读书：[《GitHub 入门与实践》](https://git-scm.com/book/zh/v2)

使用 `git bisect` 找出问题，购买域名。配置 https 指向上周开发的网站。给开源项目提交 PR (Pull Request)

**测试标准：**

- 现场演示有 https 到站点
- PR (Pull Request) 被 merged

::: warning
按照一般情况，等很多天，反复修改，甚至 PR 并不一定会被合并，属于非常常见情况

所以要尽可能多提 PR 和尽早提 PR，这样才可能在时限内完成
:::

[浅显易懂的Git教程](https://liaoxuefeng.com/books/git/introduction/index.html)

### GitHub 和 PR

[![如何参与开源项目 - 细说 GitHub 上的 PR 全过程](https://svg.bookmark.style/api?url=https://blog.devstream.io/posts/open-a-pr-in-github/&mode=dark&style=horizontal)](https://blog.devstream.io/posts/open-a-pr-in-github/)

[Angular提交信息规](https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/)

[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

[Conventional提交规范](https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Conventional%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83/)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### git bisect

二分查找引入问题的 commit

### 关于版本号

[语义化版本规范](https://semver.org/lang/zh-CN/)

[常见软件版本号详解](https://zhuanlan.zhihu.com/p/508354840)

