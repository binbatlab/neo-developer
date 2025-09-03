## Web 后端：Golang

### golang

<Card
  url="https://learnku.com/docs/the-way-to-go"
  title="《Go 入门指南》 | Go 技术论坛"
  describe="《Go 入门指南》是 《The Way to Go》的中文译本，本书专为 Golang 初学者量身定制。"
/>

**这两个稍微有点老，都是 Unknwon 的作品（Gogs 的作者）**

<Card
  url="https://github.com/Unknwon/go-study-index"
  title="Go 语言学习资料索引"
  describe=""
/>

<Card
  url="https://github.com/Unknwon/go-fundamental-programming"
  title="Go 编程基础"
  describe="《Go 编程基础》是一套针对 Google 出品的 Go 语言的视频语音教程，主要面向新手级别的学习者"
/>

### Go std

golang 的 std 非常的棒，教科书级的设计，同时也很丰富

<Card
  url="https://pkg.go.dev/std"
  title="Standard library - Go Packages"
  describe=""
/>

### 测试：golang 单元测试

<Card
  url="https://juejin.cn/post/7172037988950474759"
  title="Go 单测入门篇：Golang 单元测试基本使用 - 掘金"
  describe="Go 语言的单元测试默认采用官方自带的测试框架，通过引入 testing 包以及 执行 go test 命令来实现单元测试功能。"
/>


### 数据库：PostgreSQL

数据库基础自己找资料吧

客户端工具推荐使用 DbGate

<Card
  url="https://dbgate.io/"
  title="DbGate - (no)SQL database client"
  describe="Database manager for MySQL, PostgreSQL, SQL Server, MongoDB, SQLite and others. Runs under Windows, Linux, Mac or as web application"
/>

<Card
  url="https://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html"
  title="PostgreSQL新手入门 - 阮一峰的网络日志"
  describe="本文介绍PostgreSQL的安装和基本用法，供初次使用者上手。以下内容基于Debian操作系统，其他操作系统实在没有精力兼顾，但是大部分内容应该普遍适用。"
/>

不建议初学者直接用 ORM。所以建议用这个

<Card
  url="https://github.com/lib/pq"
  title="GitHub - lib/pq"
  describe="Pure Go Postgres driver for database/sql"
/>

可以学习参考这个项目：

<Card
  url="https://github.com/miniflux/v2"
  title="GitHub - miniflux/v2"
  describe="Minimalist and opinionated feed reader"
/>

### 选择 Web 框架 `chi` 或者 `Gin`

<Card
  url="https://github.com/gin-gonic/gin"
  title="GitHub - gin-gonic/gin"
  describe="Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin."
/>

<Card
  url="https://github.com/go-chi/chi"
  title="GitHub - go-chi/chi"
  describe="lightweight, idiomatic and composable router for building Go HTTP services"
/>

推荐阅读：

<Card
  url="https://www.piglei.com/articles/how-to-design-config-file-for-software/"
  title="设计服务端软件配置的 4 条建议  | Piglei"
  describe="在设计和开发服务端（后端）软件时，配置文件是一个绕不开的话题。"
/>

### 代码规范

<Card
  url="https://gocn.github.io/styleguide/"
  title="Google Go 编程规范"
  describe="本系列的 Go 风格指南和相关文档整理了当前，最佳的一个编写易读和惯用方式的 Go 写法。 遵守风格指南并不是绝对的，这份文件也永远不会详尽无遗。我们的目的是尽量减少编写可读 Go 代码的猜测，以便该语言的新手可以避免常见的错误。此风格指南也用于统一 Google 内 Go 代码 review 者的风格指南。"
/>

### 自动部署：fly.io

裸机手动部署一定要先学会。后端写个 systemd unit

<Card
  url="https://linuxgeeks.github.io/2015/10/24/132143-%E8%AE%A4%E8%AF%86%E5%B9%B6%E7%AE%A1%E7%90%86systemd%E6%9C%8D%E5%8A%A1%E5%92%8C%E5%8D%95%E5%85%83/"
  title="认识并管理systemd服务和单元"
  describe="Systemd 是一系列工具的集合，其作用也远远不仅是启动操作系统，它还接管了后台服务、结束、状态查询，以及日志归档、设备管理、电源管理、定时任务等许多职责，并支持通过特定事件（如插入特定 USB 设备）和特定端口数据触发的 On-demand（按需）任务。"
/>

<Card
  url="https://www.jinbuguo.com/systemd/systemd.index.html"
  title="systemd 中文手册"
  describe=""
/>

- fly.io
- railway
- digitalocean apps
- Google App Engine
- zeabur

[![zeabur](https://svg.bookmark.style/api?url=https://zeabur.com/&mode=dark&style=horizontal)](https://zeabur.com/)

<Card
  url="https://fly.io/"
  title="Fly.io"
  describe="A Public Cloud Built For Developers Who Ship"
/>
