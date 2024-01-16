---
outline: deep
---

# @plaoc/cli

这是 plaoc 命令行工具，负责 plaoc app 的开发，打包，发布。

这个 cli 工具还兼具了发布工具和验证 app 的功能，并且可以使用`plaoc run`和服务端配合，进行快速的打包发布应用。

## 安装

- 首先需要安装 plaoc 命令行工具。

::: code-group
```bash [PNPM]
  pnpm add -g @plaoc/cli
```

```bash [YARN]
  yarn global add @plaoc/cli
```

```bash [NPM]
  npm i -g @plaoc/cli
```

:::


> 也可以使用 npx plaoc 执行命令

假设工程目录如下所示：

```bash
  plaoc-app
  ├── ......其他工程文件
  ├── manifest.json
  └── plaoc.json
```

## 开发模式

开发模式主要跟`dweb_browser`桌面版配合进行动态开发，命令如下：

```bash
plaoc serve http://localhost:5173
```

以上命令将会打印如下：

```bash
metadata:       http://127.0.0.1:8096/metadata.json
metadata:       http://172.30.93.43:8096/metadata.json
```

这是一个纯转发的模式，plaoc将代理了您启动的 `http://localhost:5173` 开发服务。

### 指定启动端口

一般用于启动多个app的情况，您可以使用 `--port` 指定开启的端口，默认的端口为 8096。

```bash
plaoc serve http://localhost:5173 --port 8097
```

### 指定`manifest.json`目录

假设您当前不在项目根目录，您需要使用 `--dir` 来指定 `manifest.json` 的地址，以便识别app的配置信息。

```bash
plaoc serve http://localhost:5173  --dir ./plaoc-app1
```

## 打包项目

正常打包命令如下：

```bash
plaoc bundle ./dist
```

`./dist`目录为您打包的源码目录。并且您需要确保您当前运行 plaoc 命令的文件夹跟您的`manifest.json`文件夹同级。

如果不在同一目录，可以参考下面的 `--dir` 目录进行指定。

::: warning
注意，不可以使用 plaoc bundle `http://localhost:5173` 打包一个动态服务。
:::

### 指定`manifest.json`目录

如果您的`manifest.json`跟打包的目录不在同一文件夹下，可以使用 `--dir` 指定到`manifest.json`文件夹下。

假设工程目录如下所示：

```bash
  plaoc-main
  ├── ......其他工程文件
  ├── plaoc-app1
    ├── ./dist  //项目打包完的源码文件
    ├── manifest.json
  ├── plaoc-app2
    ├── ./dist  //项目打包完的源码文件
    └── manifest.json
```

假设您目录下有多个项目，就可以像下面这样指定目录去打包。

```bash
plaoc bundle ./plaoc-app1/dist --dir ./plaoc-app1
```

> ps： 您也可以使用`plaoc bundle --help` 查看。

### 指定输出打包输出的文件位置

可以使用 `--out` 指定输出目录名称，默认为`bundle`。

```bash
plaoc bundle ./dist --out ./bundleDir
```

#### 指定输出的 appId

可以使用 `--id` 指定 app 的 id。

```bash
plaoc bundle ./dist --id new.plaoc.org.dweb
```

注意指定的 id 需要以 `.dweb` 结尾，并且和配置的 `home` 相同域名。

### 指定输出的 app 版本

可以使用 `--version` 指定 app 的版本。

```bash
plaoc bundle ./dist --version 0.2.3
```
