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

### Req/Res

### Pub/Sub

[理解【观察者模式】和【发布订阅】的区别](https://barnett617.github.io/wilson-blog/posts/2021-06-28-observer-pattern/)
## 可观测性

![observability](./observability.png)

<Card
  url="https://segmentfault.com/a/1190000040745253"
  title="What is observability?｜一文读懂什么是系统可观测性"
  describe="可观测性使团队能够更有效地监控现代系统，并帮助他们找到并连接复杂链中的影响，并将其追溯到原因。此外，它还使系统管理员、IT 运营分析师和开发⼈员能够了解他们的整个架构。"
/>

### PLG (Prometheus + Loki + Grafana)

[【PLG 系列】Loki 生态系统入门指南](https://blog.xizhibei.me/zh-cn/2024/07/08/plg-1-introducation/)

### ELK (Elasticsearch + Logstash + Kibana)

[理解ELK入门](https://juejin.cn/post/7134521506692300830)

### opentelemetry

[云原生可观测框架 OpenTelemetry 基础知识](https://www.cnblogs.com/hacker-linner/p/17613281.html)

### 性能之巅

### BPF

## 测试

[软件测试](https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%B5%8B%E8%AF%95)

黑盒测试 vs 白盒测试

[TesterHome](https://testerhome.com/)

### 单元测试

### 集成测试

### E2E 测试

### 性能测试

### 代码覆盖率

[代码覆盖率 WikiPedia](https://zh.wikipedia.org/zh-cn/%E4%BB%A3%E7%A2%BC%E8%A6%86%E8%93%8B%E7%8E%87)

[代码覆盖率是一个无用的管理指标](https://www.infoq.cn/article/1kurzhz4kxye2bpqml7v)

### TDD

[测试驱动开发（TDD）](https://tdd.shujuwajue.com/)

### 回归测试

### APUE (Advanced Programming in the UNIX)

## 编程语言

模块化系统和包管理器

[前端工具链之包管理器 - 过去与未来的npm](https://chlorinec.top/post/development/npm/)


编译和解释

[你知道「编译」与「解释」的区别吗？](https://huang-jerryc.com/2016/11/20/do-you-konw-the-different-between-compiler-and-interpreter/)


### GC (Garbage Collector)

[趣谈 GC 技术，解密垃圾回收的玄学理论](https://www.infoq.cn/article/uppg13u1fzitjwqtlywm)

[浅谈编程语言中的 GC](https://www.chenxutalk.top/posts/bugs/%E6%B5%85%E8%B0%88%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E4%B8%AD%E7%9A%84gc/)

[闲扯几句 GC 的话题](https://blog.codingnow.com/2011/05/gc_performance.html)

异步运行时

反射

元编程

IP 域名自动映射工具

[Welcome to sslip.io](https://sslip.io/)

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

