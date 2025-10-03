# 第三章 扩展内容

::: danger 注意
建议最后阅读本章节，本文清单内容稍微复杂了一点
:::

### Linux

鸟哥那本书内容虽全但有点老，可以结合这本 Linux 101 内容

<Card
  url="https://101.lug.ustc.edu.cn/"
  title="Linux 101"
  describe="本书由中国科学技术大学 Linux 用户协会的数名优秀成员协力编写，用于配套和延展“Linux 101”校内社团活动。其面向 Linux 零基础读者，从计算机操作系统和 Linux 的起源讲起，深入浅出带领读者一步步逐渐掌握最必要的 Linux 实用知识，并在其中感悟到社区开源文化的魅力。"
/>

Offtopic 一下，来品鉴一下经典文章：

<Card
  url="https://dywang.csie.cyut.edu.tw/dywang/download/pdf/linux-wangyin.pdf"
  title="完全用Linux工作 -- 王垠"
  describe="我已經半年沒有使用 Windows 的方式工作了。Linux高效的完成了我所有的工作。"
/>

## DevOps

[![什么是 DevOps？](https://svg.bookmark.style/api?url=https://learn.microsoft.com/zh-cn/devops/what-is-devops&mode=dark&style=horizontal)](https://learn.microsoft.com/zh-cn/devops/what-is-devops)

### 单元测试

<Card
  url="https://www.duyixian.cn/2021/05/24/unittest/"
  title="单元测试：概念、作用与实践"
  describe="最近公司越来越多的项目开始推动单元测试，而我在公司里很早就在进行单元测试实践。就用这篇文章作为一次内部技术分享的主题，同时也代表我自己对单元测试的认识和实践。"
/>

<Card
  url="https://www.piglei.com/articles/5-tips-on-unit-testing/"
  title="有关单元测试的 5 个建议  | Piglei"
  describe="在长期编写单元测试的过程中，我总结了 5 个与单元测试有关的建议，希望它们能帮你更好的理解单元测试这回事。"
/>

### CI/CD 和 DevOps

[![一文带你看懂 CI/CD 是什么？](https://svg.bookmark.style/api?url=https://www.redhat.com/zh/topics/devops/what-is-ci-cd&mode=dark&style=horizontal)](https://www.redhat.com/zh/topics/devops/what-is-ci-cd)


### 设计模式

**设计模式需要大量实践才能理解，代码量太少的话建议代码量够多时，再会头来再看**

<Card
  url="https://design-patterns.readthedocs.io/zh-cn/latest/"
  title="图说设计模式"
  describe="软件模式是将模式的一般概念应用于软件开发领域，即软件开发的 总体指导思路或参照样板。软件模式并非仅限于设计模式，还包括 架构模式、分析模式和过程模式等，实际上，在软件生存期的每一 个阶段都存在着一些被认同的模式。"
/>

## 架构

<Card
  url="https://www.ruanyifeng.com/blog/2016/09/software-architecture.html"
  title="软件架构入门"
  describe="O'Reilly 出版过一本免费的小册子《Software Architecture Patterns》（PDF）， 介绍了五种最常见的软件架构，是非常好的入门读物。我读后受益匪浅，下面就是我的笔记。"
/>

### Req/Res

### Pub/Sub

## 可观测性

![observability](./observability.png)

<Card
  url="https://segmentfault.com/a/1190000040745253"
  title="What is observability?｜一文读懂什么是系统可观测性"
  describe="可观测性使团队能够更有效地监控现代系统，并帮助他们找到并连接复杂链中的影响，并将其追溯到原因。此外，它还使系统管理员、IT 运营分析师和开发⼈员能够了解他们的整个架构。"
/>

### PLG (Prometheus + Loki + Grafana)

<Card
  url="https://blog.xizhibei.me/zh-cn/2024/07/08/plg-1-introducation/"
  title="【PLG 系列】Loki 生态系统入门指南"
  describe="我们一般把之前基于 ElasticSearch、Logstash、Kibana 的日志聚合系统简称为 ELK，那么如今我们也可以把 Promtail、Loki、Grafana 的日志聚合系统简称为 PLG。"
/>

### ELK (Elasticsearch + Logstash + Kibana)

<Card
  url="https://juejin.cn/post/7134521506692300830"
  title="理解ELK入门"
  describe=""
/>

### opentelemetry

<Card
  url="https://www.cnblogs.com/hacker-linner/p/17613281.html"
  title="云原生可观测框架 OpenTelemetry 基础知识"
  describe="OpenTelemetry 指定了如何收集遥测数据并将其发送到后端平台。通过提供通用的数据格式和 API, OpenTelemetry 使组织更容易共享和重用遥测数据，从而与各种可观测性工具和平台集成。"
/>

### 性能之巅

经典图书

<Card
  url="https://book.douban.com/subject/35934902/"
  title="性能之巅（第2版）：系统、企业与云可观测性"
  describe="《性能之巅（第2版）：系统、企业与云可观测性》着力讲述 Linux 的性能，但所论述的性能问题适用于所有的操作系统。你将了解到系统是如何工作与执行的，还将学习到如何分析和改进系统及应用程序性能的方法。"
/>

### eBPF

<Card
  url="https://coolshell.cn/articles/22320.html"
  title="eBPF 介绍"
  describe="这文章主要还是简单的介绍eBPF 是用来干什么的，并通过几个示例来介绍是怎么玩的，这个技术非常非常之强，Linux 操作系统的观测性实在是太强大了，并在 BCC 加持下变得一览无余。"
/>

## 测试

<Card
  url="https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%B5%8B%E8%AF%95"
  title="软件测试"
  describe=""
/>

<Card
  url="https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E8%BD%AF%E4%BB%B6%E6%B5%8B%E8%AF%9552%E8%AE%B2"
  title="软件测试52讲"
  describe="软件测试，可以说是软件开发的最后一道防线，也是产品上线前最为重要的一个环节。"
/>

<Card
  url="https://testerhome.com/"
  title="TesterHome"
  describe="测试之家（TesterHome）由一线测试工程师发起和运营，社区的主旨是公益，开源，分享，落地。"
/>

### 代码覆盖率

<Card
  url="https://zh.wikipedia.org/zh-cn/%E4%BB%A3%E7%A2%BC%E8%A6%86%E8%93%8B%E7%8E%87"
  title="代码覆盖率 WikiPedia"
  describe=""
/>

<Card
  url="https://www.infoq.cn/article/1kurzhz4kxye2bpqml7v"
  title="代码覆盖率是一个无用的管理指标"
  describe=""
/>

### TDD

<Card
  url="https://tdd.shujuwajue.com/"
  title="测试驱动开发（TDD）"
  describe="TDD（Test-Driven Development）是敏捷开发中的一项核心实践和技术，也是一种设计方法论，其基本思想是：在明确要开发某个功能后，在开发功能代码之前，先编写测试代码，然后编写功能代码并用测试代码进行验证，如此循环直到完成全部功能的开发。"
/>

### APUE (Advanced Programming in the UNIX)

经典图书

<Card
  url="https://book.douban.com/subject/25900403/"
  title="UNIX环境高级编程（第3版）"
  describe=""
/>

## 编程语言高级特性

编译和解释

<Card
  url="https://huang-jerryc.com/2016/11/20/do-you-konw-the-different-between-compiler-and-interpreter/"
  title="你知道「编译」与「解释」的区别吗？"
  describe="最近在看一些编译过程的知识点，看的比较多的是英文文献。在这之间经常遇到的两个单词让我着实迷惑：Compiler, Interpreter中文翻译分别是：编译器，解释器。"
/>

### GC (Garbage Collector)

<Card
  url="https://www.infoq.cn/article/uppg13u1fzitjwqtlywm"
  title="趣谈 GC 技术，解密垃圾回收的玄学理论"
  describe="大多数程序员在日常开发中常常会碰到 GC 的问题：OOM 异常、GC 停顿等，这些异常直接导致糟糕的用户体验，如果不能得到及时处理，还会严重影响应用程序的性能。"
/>

<Card
  url="https://www.chenxutalk.top/posts/bugs/%E6%B5%85%E8%B0%88%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E4%B8%AD%E7%9A%84gc/"
  title="浅谈编程语言中的 GC"
  describe="GC(Garbage Collection) 垃圾回收，是编程语言中自动管理内存的一种机制，它能够自动识别并释放不再使用的内存空间，从而避免内存泄漏。GC 是编程语言中非常重要的一部分，对于提高程序的性能和稳定性具有重要意义。"
/>

<Card
  url="https://blog.codingnow.com/2011/05/gc_performance.html"
  title="闲扯几句 GC 的话题"
  describe="今天跟同事闲扯的时候谈到 GAE SDK 刚刚支持了 Go 语言。这对于 Go 语言爱好者来说是个让人欢心鼓舞的消息。几乎所有人都相信它能比 Python 的执行效率高一些。从开发效率上来说，不会比 Python 差，那么 Go 语言的支持可能是比 Java 更好的选择（开发效率和执行性能的均衡）？"
/>

### 异步运行时

<Card
  url="https://zhuanlan.zhihu.com/p/6034765895"
  title="rust 之Tokio"
  describe="Tokio是Rust编程语言的一个异步运行时。提供了编写网络应用所需的构建模块。提供了针对各种系统的灵活性，从有几十个内核的大型服务器到小型嵌入式设备。"
/>

<Card
  url="https://zhuanlan.zhihu.com/p/349933471"
  title="自底向上理解 Go 的异步抢占"
  describe="本文从底层硬件到内核再到Go语言运行时来理解 Go 的异步抢占"
/>

<Card
  url="https://blog.csdn.net/weixin_52092151/article/details/119788483"
  title="带你了解事件循环机制(Event Loop)"
  describe="本文深入探讨了JavaScript的事件循环机制，特别是浏览器中的事件循环。JavaScript作为单线程语言，通过事件循环来管理同步和异步任务的执行。文章阐述了GUI渲染线程、JS引擎线程、定时触发器线程、事件触发线程和异步HTTP请求线程的工作原理，并详细解释了宏任务和微任务的区别以及它们在事件循环中的执行顺序。通过一个具体的示例，展示了任务队列中宏任务和微任务的执行流程，帮助读者理解JavaScript的异步执行模型。"
/>

Erlang 的 OTP 也可以看成是一种异步运行时

<Card
  url="https://blog.csdn.net/weixin_33660045/article/details/148773592"
  title="深入理解Erlang OTP：设计原理与实践"
  describe=""
/>

### 反射

<Card
  url="https://draven.co/golang/docs/part2-foundation/ch04-basic/golang-reflect/"
  title="Go 语言设计与实现 -- 4.3 反射"
  describe="虽然在大多数的应用和服务中并不常见，但是很多框架都依赖 Go 语言的反射机制简化代码。因为 Go 语言的语法元素很少、设计简单，所以它没有特别强的表达能力，但是 Go 语言的 reflect 包能够弥补它在语法上reflect.Type的一些劣势。"
/>

<Card
  url="https://geektutu.com/post/hpg-reflect.html"
  title="Go Reflect 提高反射性能"
  describe="标准库 reflect 为 Go 语言提供了运行时动态获取对象的类型和值以及动态创建对象的能力。反射可以帮助抽象和简化代码，提高开发效率。"
/>

<Card
  url="https://www.cnblogs.com/vipchenwei/p/6991209.html"
  title="详解python之反射机制"
  describe=""
/>

### 元编程

> 元编程：代码编写代码

<Card
  url="https://blog.icytown.com/posts/lang/meta-programming/"
  title="浅谈元编程"
  describe="本文将浅入浅出介绍一下元编程的概念，以及探索一下各语言的元编程技术。"
/>

## 技术团队博客分享

<Card
  url="https://tech.meituan.com/"
  title="美团技术团队"
  describe="美团技术团队以浓厚的学习和分享氛围享誉业界：每周都会有内部技术讲座与分享，还有荟萃业界专家的TopTalk、科技创新公开课，藏书过万的P2P图书馆，帮助同学拓展视野，追求卓越。"
/>

<Card
  url="https://tech.qimao.com/"
  title="七猫技术团队"
  describe="七猫是一家专注互联网文化娱乐行业的年轻企业，成立于2017年。作为国内领先的正版免费数字阅读与原创培育平台，旗下产品主要有七猫免费小说App、七猫中文网等。现平台月活跃用户数超过5000万，用户规模位列数字阅读行业第一梯队。"
/>

## 杂谈

<Card
  url="https://github.com/skyline75489/what-happens-when-zh_CN"
  title="What-happens-when 的中文翻译"
  describe="这个仓库试图回答一个古老的面试问题：当你在浏览器中输入 google.com 并且按下回车之后发生了什么？"
/>

