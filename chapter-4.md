# 第四章 AI 工具与工程

::: tip 持续更新
AI 时代发展迅速，本章节内容持续更新中
:::

## AI 编程助手

不管你喜不喜欢，AI 编程助手正在深刻改变开发者的工作方式。与其抗拒，不如先用起来再做判断。

### Claude Code

Claude Code 是 Anthropic 官方的 CLI 编程助手，定位于在本地代码仓库里直接执行高权限、有上下文感知的工程任务，而不只是聊天。它可以读写文件、运行命令、调用工具，是目前能力最强的 AI 编程 Agent 之一。

<Card
  url="https://www.runoob.com/ai-agent/claude-code.html"
  title="Claude Code 入门教程 | 菜鸟教程"
  describe="Claude Code 是 Anthropic 官方推出的 AI 编程助手，直接在终端中运行，能够读取和修改文件、执行命令、与代码库交互。本教程从安装配置到日常使用进行详细讲解。"
/>

<Card
  url="https://code.claude.com/docs/zh-CN/quickstart"
  title="快速开始 - Claude Code 官方文档"
  describe="官方中文快速入门，5 分钟上手 Claude Code。"
/>

### CC Switch

CC Switch 是一款开源跨平台桌面应用，用于统一管理 Claude Code、Codex、Gemini CLI 等 AI 编程工具的配置。通过可视化界面实现 API 供应商一键切换，告别手动编辑 JSON/TOML 配置文件的繁琐操作，同时支持 MCP 服务器管理和 Skills 安装。

<Card
  url="https://www.runoob.com/ai-agent/cc-switch.html"
  title="CC Switch 一键切换 API | 菜鸟教程"
  describe="CC Switch 是一款开源跨平台的桌面应用，专为 AI 编程助手用户设计，支持 Claude Code、Codex、Gemini CLI 等主流工具的供应商配置一键切换，让开发者轻松在 DeepSeek、OpenAI、OpenRouter 等不同后端之间无缝切换。"
/>

### CodeGraph

CodeGraph 为 Claude Code、Cursor 等 AI 编程助手预先构建本地代码知识图谱（基于 SQLite），包含符号定义、调用关系、导入依赖。Agent 查询图谱而非反复扫描文件，官方数据显示平均节省 16% Token 成本、减少 58% 工具调用次数。支持 20+ 编程语言，文件变更时自动同步。

<Card
  url="https://github.com/colbymchenry/codegraph"
  title="CodeGraph - 为 AI 编程助手预构建代码知识图谱"
  describe="在本地建立代码的符号、调用关系和依赖图谱，让 Claude Code、Cursor 等 AI Agent 一次查询即可获取相关上下文，平均减少 58% 工具调用、节省 16% Token 消耗。支持 20+ 语言，文件变更自动同步。"
/>

### 其他主流 AI 编程工具

- **GitHub Copilot**：集成在 IDE 里，入门门槛最低，适合第一次尝试 AI 辅助编程
- **Cursor**：基于 VSCode 的 AI 编辑器，有对话、补全、代码库理解等功能
- **Windsurf**：Codeium 推出的 AI 编辑器，界面体验流畅

## 提示词工程

> 与其把 AI 当成搜索引擎，不如学会和它对话。

提示词工程（Prompt Engineering）是指通过设计和优化输入提示，引导大模型输出更准确结果的方法论。对于日常开发来说，掌握基本的提示词技巧能显著提升 AI 工具的使用效果。

<Card
  url="https://www.promptingguide.ai/zh"
  title="提示工程指南"
  describe="本指南涵盖了提示工程的基础知识、进阶技术，以及关于如何使用提示来与大语言模型进行交互和构建应用的指南和参考资料。"
/>

<Card
  url="https://www.runoob.com/ai-agent/prompt-engineering.html"
  title="提示词工程 | 菜鸟教程"
  describe="提示词工程通过设计优化输入提示词，引导大模型生成更精准的答案。本教程介绍核心概念、常用技巧以及实际应用示例。"
/>

## 大语言模型

### LLM 基础概念

如果你不知道 Transformer 是什么，Token 是怎么算的，先补一下这些基础——不需要懂数学推导，但要知道大概在发生什么事。

<Card
  url="https://zhuanlan.zhihu.com/p/624740065"
  title="通俗理解大语言模型（LLM）"
  describe="用最简单的语言解释大语言模型的工作原理、Token 的概念、上下文窗口以及模型的能力边界。"
/>

### 调用 API

绝大多数 AI 产品底层都是调用模型 API，学会用 API 调用 LLM 是现代开发者的基本技能。

<Card
  url="https://www.runoob.com/ai-agent/prompt-engineering.html"
  title="AI API 入门 | 菜鸟教程"
  describe="从零开始学会如何通过 HTTP 请求调用 AI 模型 API，理解 system prompt、message 结构和流式输出。"
/>

## AI 应用开发

### RAG 检索增强生成

RAG（Retrieval-Augmented Generation，检索增强生成）是目前构建企业级 AI 应用最主流的方案。核心思路是：不把所有知识塞进模型，而是在推理时从外部知识库检索相关内容，再喂给模型生成答案。

<Card
  url="https://www.elastic.co/cn/what-is/retrieval-augmented-generation"
  title="什么是检索增强生成 (RAG)？| Elastic"
  describe="检索增强生成（RAG）是一种结合了信息检索技术与语言生成模型的技术。通过从外部知识库中检索相关信息，将其作为上下文输入到大语言模型中，从而生成更准确、更可靠的输出。"
/>

<Card
  url="https://zhuanlan.zhihu.com/p/678983137"
  title="检索增强生成 (RAG) 入门指南 - 知乎"
  describe="从零基础讲解 RAG 的工作流程：文档切割、向量化、存入向量数据库、检索、拼接 Prompt、生成答案。"
/>

### MCP 模型上下文协议

MCP（Model Context Protocol）是 Anthropic 提出的开放协议，定义了 AI 模型和外部工具、数据源之间交换上下文的标准方式。Claude Code 的工具调用能力就建立在 MCP 之上。

<Card
  url="https://zhuanlan.zhihu.com/p/29001189476"
  title="MCP (Model Context Protocol)，一篇就够了 - 知乎"
  describe="从技术原理到实际案例，详解 MCP 如何连接 GitHub、数据库等外部资源，以及如何自己开发一个 MCP Server。"
/>

<Card
  url="https://github.com/liaokongVFX/MCP-Chinese-Getting-Started-Guide"
  title="MCP 编程极速入门（中文）"
  describe="GitHub 上最受欢迎的 MCP 中文入门指南，涵盖核心概念、客户端/服务端开发、工具集成，附带完整代码示例。"
/>

## Skill 工程

Skills 是 Claude Code 的插件化扩展系统，通过声明式配置将领域知识、标准化工作流注入 AI，让 Claude 在面对特定任务时表现得更像一个专业工具而非通用助手。

<Card
  url="https://cloud.tencent.cn/developer/article/2624374"
  title="Claude Code Skill 最佳实战：EP01 初识 Skill | 腾讯云"
  describe="从零讲解什么是 Skill、三级加载架构、Skill 与 CLAUDE.md 和 Slash Commands 的区别，手把手带你创建一个规范 Git 提交信息的 Skill，30 分钟即可上手。"
/>

<Card
  url="https://www.w3cschool.cn/aicodingskills/claudecode-skills-practice.html"
  title="Claude Code Skills 全量实战 | w3cschool"
  describe="完整讲解 Skill 文件夹结构、SKILL.md 编写规范、发现→激活→执行→反馈四层运行机制，附带 Python 代码审查技能的完整可运行示例。"
/>

<Card
  url="https://github.com/xu-xiang/everything-claude-code-zh"
  title="everything-claude-code-zh | GitHub"
  describe="Anthropic 黑客松获胜作品的中文翻译版，包含 13 个 Agents + 56 个 Skills + 32 个 Commands 的完整配置集合，覆盖 TypeScript、Python、Go、Spring Boot 等，可作为 Skill 编写的参考模板。"
/>

## Harness 工程

Harness 是 Claude Code 的运行时配置与自动化系统，通过 settings.json 管理项目权限、Hooks 生命周期钩子、环境变量等行为，让 AI 编程助手在团队协作和 CI/CD 流程中可控可预期。

<Card
  url="https://code.claude.com/docs/zh-CN/hooks-guide"
  title="使用 Hooks 自动化工作流 | Claude Code 官方中文文档"
  describe="官方中文教程，从创建第一个 Hook 到各类自动化场景（自动格式化、安全拦截、事件通知），入门必读。"
/>

<Card
  url="https://www.cnblogs.com/gyc567/p/19512820"
  title="Claude Code 高级配置完整指南 | 博客园"
  describe="基于 everything-claude-code 开源仓库，全面讲解 settings.json 中 agents、skills、hooks、MCP 等配置项的写法与实际效果，适合系统了解 Harness 的全貌。"
/>

<Card
  url="https://cloud.tencent.cn/developer/article/2655015"
  title="2026 最强 Hooks、Skills、Agents 实战 | 腾讯云"
  describe="讲解 Hooks（自动化守卫）+ Skills（知识注入）+ Agents（并行执行）三层协作架构，包含完整的 .claude/ 目录结构模板和 CLAUDE.md 最佳实践。"
/>

### Agent

Agent 是指能够感知环境、规划步骤、调用工具并执行多步任务的 AI 程序。Claude Code 本身就是一个 Agent——它能自主决定读哪些文件、运行什么命令来完成你的请求。

<Card
  url="https://zhuanlan.zhihu.com/p/683490814"
  title="AI Agent 综述：从概念到实践"
  describe="系统介绍 AI Agent 的定义、核心组件（规划、记忆、工具调用）以及主流框架，帮助理解 Agent 与普通 LLM 调用的本质区别。"
/>
