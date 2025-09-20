# 系统：Rust

先按照《Rust 语言圣经》的实战例子先实践

<Card
  url="https://course.rs/about-book.html"
  title="Rust 语言圣经 (Rust Course)"
  describe="Rust 语言真的好：连续八年成为全世界最受欢迎的语言、没有 GC 也无需手动内存管理、性能比肩 C++/C 还能直接调用它们的代码、安全性极高 - 总有公司说使用 Rust 后以前的大部分 bug 都将自动消失、全世界最好的包管理工具 Cargo 等等。但..."
/>

《Rust 程序设计语言》这本更像一个手册，先去实践，不懂的再来翻手册

<Card
  url="https://kaisery.github.io/trpl-zh-cn/title-page.html"
  title="Rust 程序设计语言 简体中文版"
  describe="本书的英文原版作者为 Steve Klabnik 和 Carol Nichols，并由 Rust 社区补充完善。本简体中文译本由 Rust 中文社区翻译。"
/>

<Card
  url="https://lotabout.me/2017/rust-error-handling/"
  title="简谈 Rust 中的错误处理 | 三点水"
  describe="在学习 Rust 的过程中，错误处理是一个必需要迈过的坎。主要原因是所有的标准库都以统一的方式处理错误，我们就来谈一谈 Rust 中是如何处理错误的吧。"
/>

## 代码规范

<Card
  url="https://wangchujiang.com/rust-cn-document-for-docker/style-guide-cn/index.html"
  title="Rust 语言风格指南"
  describe="通过坚持使用既定的风格指南（如本指南），开发者无需制定特别的风格规则，也无需与其他开发者争论应使用何种样式规则，从而节省了时间、沟通成本和精神耗损。"
/>


### 关于 `use` 关键词的代码风格

```rust
use std::{future::Future, sync::Arc};

use axum::{Router, extract::Request, middleware, response::IntoResponse, routing::get};
use http::{StatusCode, Uri};
use tokio::net::TcpListener;
use tower_http::{cors::CorsLayer, trace::TraceLayer};
use tracing::{Level, error, info_span};

use auth::{AuthState, access::access_middleware, validate_middleware};

use crate::config::Config;
use crate::route::{AppState, admin, session, whep, whip};
```

请用空行分组后按照 Alphabets 顺序排序，当然 `rustfmt` 会自动帮助我们排序

通常建议顺序: (按照作用域大到小)
- `std` 组
- 第三方库组
- 自定义库组
- 当前 `crate` 组

### `Cargo.toml` 里面的依赖顺序

```toml
[dependencies]
webrtc = { git = "https://github.com/webrtc-rs/webrtc", rev = "4da5280" }

api = { path = "libs/api" }
cli = { path = "libs/cli" }

mime_guess = { workspace = true, optional = true }

http = { workspace = true }
http-body = { workspace = true }

axum = "0.8"
axum-extra = "0.10"
http-body-util = "0.1.2"
tower-http = "0.6"
```


当然，`Cargo.toml` 里面的依赖顺序也同理分组后按照 Alphabets 顺序: (按照需要重点关注组的顺序)
- 特殊版本依赖组（比如：用 git 版）`webrtc = { git = "https://github.com/webrtc-rs/webrtc", rev = "4da5280" }`
- 本地依赖组 `api = { path = "libs/api" }`
- `workspace` 组和 `optional` 组 `mime_guess = { workspace = true, optional = true }`
- 普通依赖组 `axum = "0.8"`

