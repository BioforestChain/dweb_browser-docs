---
title: Plaoc app
category:
  - Plaoc
tag:
  - Android
  - IOS
  - MacOS
  - Windows
  - Linux
---

我们定义运行于`dweb-browser`浏览器上面的应用，统一称为`Plaoc App`，您可以理解为`dweb_browser` 是微信 `plaoc app` 是里面运行的小程序。

因为`dweb-browser` 目前我们实现了 Android、IOS、MacOS、Windows、Linux 这些主流平台的支持，那么也就意味着您的 web 应用，可以背靠 plaoc 直接实现多端发布。

plaoc 是 web3 的产物，应用都会相对独立，因此，每个 plaoc 应用打包完都可以使用自己应用网站进行发布。
当然，您的网站也可以是一个应用中心，包含了您的应用矩阵，应用的发布将变得高效。

## 开发 Plaoc app 流程

您首选需要在您的应用根目录下创建 `manifest.json` 文件，您可以认为`manifest.json`等同于 `PWA`的`manifest.json`。
它主要声明了一些应用的参数和在用户安装的时候做一些展示。

```bash
  plaoc-app
  ├── ......其他工程文件
  └── manifest.json
```

以下配置文件的示例,直接复制以下内容粘贴到根目录下的`manifest.json`，[点击查看字段详情](../plaoc/interface/bfs-meta-data/index.md);

```json
{
  "id": "game.dweb.waterbang.top.dweb",
  "name": "game",
  "short_name": "vue3-game",
  "description": "这是一个实例应用，包含了dweb_plugins全部组件的实例。",
  "logo": "https://www.bfmeta.info/imgs/logo3.webp",
  "images": [
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "author": ["bfs", "bfs@bfs.com"],
  "version": "1.0.0",
  "change_log": "新添加了一键弹弹弹的功能！",
  "home": "https://dweb.waterbang.top",
  "categories": ["application"],
  "lang": "zh-Hans",
  "languages": []
}
```

现在您的 app 已经声明成为 Plaoc app 了。

## 如何开始开发

### 首先安装@plaoc/cli

> 或者不愿意污染全局环境可以使用 npx 运行
>
> 示例： `npx plaoc bundle ./usr/www`

@plaoc/cli 是 plaoc 的开发工具，能帮助应用运行，打包，发布。
具体的命令提示可以使用`--help`或者[文档](./cli.md)查看。

- 执行安装命令:

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

### 启动工程

本示例使用 vite 启动工程：

```bash
  npx vite --host
```

终端输出

```bash
 VITE v4.4.9  ready in 88 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://172.30.95.28:5173/
```

### 构建应用数据链接

使用上面安装的 plaoc 命令构建：

```bash
  plaoc serve http://172.30.95.28:5173/
  #or
  npx plaoc serve http://172.30.95.28:5173/
```

终端输出

```bash
  metadata:       http://127.0.0.1:8096/metadata.json
  metadata:       http://172.30.95.28:8096/metadata.json
```

> 可以使用 `plaoc serve --help` 查看更进一步的功能。

### 启动开发

您首先需要根据您的操作系统下载[dweb-browser 桌面端](https://github.com/BioforestChain/dweb_browser/releases)。

接下来使用指令运行 `dweb-browser`来启动开发者模式。

::: code-group

```bash [Windows]
& "D:\DownLoads\Dweb Browser-x.x.x.exe" install --url http://172.30.93.43:8096/metadata.json
```

```bash [MacOS]
open /Applications/Dweb\ Browser.app --args install --url http://127.0.0.1:8096/metadata.json
```

:::

现在您就能看到开发和调试界面了，您应该也发现了，您刚刚下载的也是 dweb-browser 的桌面版。

### 打包 plaoc-app

开发完成后也是依然是用@plaoc/cli 打包 app，命令如下：

```bash
plaoc bundle ./dist
```

> ./dist 为打包输出的源码目录

### 发布

上传到公开的 plaoc 应用商城或者上传到您 app 的官网。有关于 app 官网如何提供下载或者应用商城如何提供下载，访问：[应用商城](./app-store.md)。

您手机中如果已经安装了 Dweb Browser app，可以先将您打包完两个文件上传到同一文件夹，然后把`metadata.json`地址生成二维码。

```bash
dweb://install?url=http://example.com/app1/metadata.json
```

然后使用手机支持`deep_link`的功能进行扫描上面链接生成的二维码。扫描完成之后会跳转到下载 app 的界面。

- 华为 -> 智慧视觉
- 小米 -> 小爱视觉
- oppo -> 使用系统浏览器扫码
- vivo -> Jovi 扫描
