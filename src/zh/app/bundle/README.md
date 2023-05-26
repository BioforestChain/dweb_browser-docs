---
title: DwebBrowser bundle
category:
  - Service APP
tag:
  - Service APP
---

DwebBrowser前后端打包工具，把您开发的包打包成`.plaoc`形式。

附加的功能：

1. 链上APPID认证申请。
2. 上传到DwebBrowser DAPP 商城。

---------------------------

### @bfsx/bundle

```
 全局安装指令
 # npm方式
   npm i @bfsx/bundle -g

 # yarn方式
   yarn global add @bfsx/bundle
```

#### 使用
> bfsa -V
```shell
0.0.3
```
---------------------------

> bfsa help

```shell
Usage: bfsa [options] [command]

.plaoc application install service.

Options:
  -V, --version     output the version number
  -h, --help        display help for command

Commands:
  bundle [options]  bfsa bundle project to .plaoc
  help [command]    display help for command
```
--------------------------

> bfsa bundle -h

```shell
Usage: bfsa bundle [options]

bfsa bundle project to .plaoc

Options:
  -f, --front-path <string>  frontend application path.
  -b, --back-path <string>   backend application path.
  -i, --bfs-appid <string>   bfsAppId: app unique identification，new app ignore.
  -h, --help                 display help for command
```
`-f` 前端项目打包地址

`-b` 后端项目打包地址

`-i` 已经上架的应用，需要传入bfsAppId，避免重新生成新的bfsAppId
