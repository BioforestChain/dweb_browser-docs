---
title: DwebBrowser bundle
category:
  - Service 
tag:
  - Service 
---

plaoc 前后端打包工具。

## 安装

```bash
deno install -A https://deno.land/x/plaoc/cli/plaoc.ts
```

## 打包app (bundle/build)

```bash
plaoc bundle ./dist
```
会打包成以下的文件夹结构，并输出压缩文件 `.zip` 和一个 `metadata.json`,详情请查看下面文档详情。

- bundle
  - appId.version.zip
  - metadata.json

### 选项

- `--out`: 指定打包完的目录名称，默认为`bundle`。
- `--version`: 指定app的版本，能覆盖`manifest.json`里面的配置。
- `--id`: 指定app的id，能覆盖`manifest.json`里面的配置。
- `--dir`：用来指定开发目录，即指定您创建`manifest.json`的根目录。
### 示例

```bash
plaoc bundle  ./dist --dir ./ --version 0.0.2
```

## 开发者模式 （serve/preview）

需要搭配开发者工具使用，这也是一个app的预览模式。(dist是我们编译完成的源码目录)

```bash
plaoc serve ./dist
```

它也可以指定一个编译完的url，比如使用vite生成的url:

```bash
npx vite --host
```

输出如下信息：

```bash
  VITE v4.3.9  ready in 76 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://172.30.90.207:5173/
```

那么我就可以直接执行以下命令进行开发预览。

```bash
plaoc serve  http://172.30.90.207:5173/
```

### 选项

- `--dir`：用来指定开发目录，即指定您创建`manifest.json`的根目录。
- `--port`: 用来指定启动的服务端口。
- `--mode`: 服务的处理模式，可以输入`www`,`live`,`prod`。
  - `--mode www`: 将文件夹作为 usr/www 的只读文件进行启动。
  - `--mode live`: 将本地文件夹使用动态服务器进行启, usr/www 会存在一个 index.html 中来进行跳转。
  - `--mode prod`: 对将打包后的文件直接进行服务启动。

### 示例

```bash
plaoc preview  ./plaoc/demo/dist --dir ./plaoc/demo --mode www 
```