---
title: DwebBrowser bundle
category:
  - Service 
tag:
  - Service 
---

plaoc 前后端打包工具。

## 安装

 - 首先需要安装plaoc命令行工具。

```bash
npm install -g @plaoc/cli
```

## 开发app

需要搭配开发者工具使用，这也是一个app的预览模式。(dist是我们编译完成的源码目录)

### 指定编译完的目录

```bash
plaoc serve ./dist
```

输出如下信息：

```bash
metadata:       http://127.0.0.1:8096/metadata.json
metadata:       http://172.30.93.43:8096/metadata.json
```

生成`metadata.json`之后，我们就可以在开发者工具进行调试/开发，[开发者工具](../developer-tool/README.md)。

::: warning
您需要在包含有`manifest.json`的文件夹内运行，plaoc命令，如果您不在`manifest.json`文件夹下，可以使用`--dir`指定目录。
比如：
```bash
deno serve --dir ./demo ./demo/dist
```
:::

### 动态编译模式

> 推荐使用这种方式，进行动态编译，这样开发者工具能伴随着代码修改进行变化。

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

输出如下信息：

```bash
metadata:       http://127.0.0.1:8096/metadata.json
metadata:       http://172.30.93.43:8096/metadata.json
```

#### 选项

- `--dir`：用来指定开发目录，即指定您创建`manifest.json`的根目录。
- `--port`: 用来指定启动的服务端口。
- `--mode`: 服务的处理模式，可以输入`www`,`live`,`prod`。
  - `--mode www`: 将文件夹作为 usr/www 的只读文件进行启动。
  - `--mode live`: 将本地文件夹使用动态服务器进行启, usr/www 会存在一个 index.html 中来进行跳转。
  - `--mode prod`: 对将打包后的文件直接进行服务启动。

#### 示例

```bash
plaoc serve  ./plaoc/demo/dist --dir ./plaoc/demo --mode www 
```

## 打包/发布 app

### 打包app

按照流程开发完成之后就可以对开发的源码进行打包

```bash
plaoc bundle ./dist
```
会打包成以下的文件夹结构，并输出压缩文件 `.zip` 和一个 `metadata.json`,详情请查看下面文档详情。

- bundle
  - appId.version.zip
  - metadata.json



#### 选项

- `--out`: 指定打包完的目录名称，默认为`bundle`。
- `--version`: 指定app的版本，能覆盖`manifest.json`里面的配置。
- `--id`: 指定app的id，能覆盖`manifest.json`里面的配置。
- `--dir`：用来指定开发目录，即指定您创建`manifest.json`的根目录。
#### 示例

```bash
plaoc bundle  ./dist --dir ./ --version 0.0.2
```

### 发布app

每个app都需要发布到自己的域名下面，域名跟开发填写到`manifest.json`的appId是绑定到一起的，假设我的appId是:

- game.dweb.browser.org.dweb

那么我就直接把上述打包的两个文件，放到`dweb.browser.org`根目录，部署就完成了。

用户下载应用的时候，只需要提供任意方式访问`https://dweb.browser.org/metadata.json`就可以。

- 提供json地址的二维码，让用户扫码下载。
- 在官网上通过`XMLHttpRequest`方式，请求这个json,用户在官网点击下载。




