---
title: DwebBrowser bundle
category:
  - Service APP
tag:
  - Service APP
---

DwebBrowser 前后端打包工具，把您开发的包打包成`.jmm`形式。

## @bfex/dweb-jmm-bundler

```
 全局安装指令
 # npm方式
   npm i @bfex/dweb-jmm-bundler -g

 # yarn方式
   yarn global add @bfex/dweb-jmm-bundler

 # pnpm
   pnpm add -g @bfex/dweb-jmm-bundler
```

### 使用

```bash
jmm -i
```

### 选项

- `-h, --help`：显示帮助信息。
- `-V, --version`：显示程序版本号。
- `-d, --dest-path <string>`：前端应用程序路径。（必需）
- `-b, --front-build-path <string>`：frontBuildPath：打包的前端源代码地址。（必需）
- `-t, --app-type [appType]`：应用程序类型为[静态]和[动态]。（值：'static'，'dynamic'）
- `-i, --interact [interact]`：是否启用交互模式。（默认值：false）

### 示例

- 在项目目录中：`jmm -d ./ -b dist`
- 静态项目：`jmm -d ../dweb_browser/plaoc/demo -b dist -t static`
- 交互模式 jmm -i


<!-- 附加的功能：

1. 链上APPID认证申请。
2. 上传到DwebBrowser DAPP 商城。

--------------------------- -->
