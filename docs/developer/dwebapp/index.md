---
outline: deep
---

# DwebApp

DwebBrowser 提供了一种应用开发标准，我们统一称为 DwebApp，但是并不是所有人都需要直接接触这个标准来开发自己的。

因此我们提供了 plaoc 这个工具，来帮助前端开发者将他们的 WebApp 打包成 DwebApp。
未来我们会提供更多的工具，来帮助其它领域的开发者迁移他们的应用到 Dweb 平台上。

plaoc 遵循 web 规范，提供一系列的 Api/WebComponent，来满足应用开发所需要的常见需求。
包括应用之间的相互通信。

基于 DwebBrowser 已经实现了 Android、IOS、MacOS、Windows、Linux 这些主流平台的支持。
那么也就意味着您的 Web 应用，可以背靠 plaoc 直接实现多端发布。

## 开发 Dwebapp 流程

您首选需要在您的应用根目录下创建 `manifest.json` 文件，您可以认为`manifest.json`等同于 `PWA`的`manifest.json`。
它主要声明了一些应用的参数和在用户安装的时候做一些展示。

文件结构如下：

```bash
  dweb-app
  ├── ......其他工程文件
  └── manifest.json
```

以下配置文件的示例,直接复制以下内容粘贴到根目录下的`manifest.json`，[点击查看字段详情](./manifest.md);

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
  "change_log": "changelog",
  "home": "https://dweb.waterbang.top",
  "categories": ["application"],
  "lang": "zh-Hans",
  "languages": []
}
```

现在您的 app 已经声明成为 Dweb app 了。

## 如何开始开发

### 首先安装@plaoc/cli

> 或者不愿意污染全局环境可以使用 npx 运行
>
> 示例打包项目： `npx plaoc bundle ./dist`

@plaoc/cli 是 plaoc 的开发工具，能帮助应用运行，打包，发布。
具体的命令提示可以使用`--help`或者[文档](../plaoc/cli/index.md)查看。

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
  ➜  Network: http://192.168.0.100:5173/
```

### 构建应用数据链接

使用上面安装的 plaoc 命令构建：

```bash
  # 选取您的设备可以访问的地址
  plaoc serve http://192.168.0.100:5173/
  #or
  npx plaoc serve http://192.168.0.100:5173/
```

终端输出

```bash
using metadata file: /../manifest.json
metadata: 	dweb://install?url=http://127.0.0.1:8096/metadata.json
metadata: 	dweb://install?url=http://192.168.0.100:8096/metadata.json
```

> 可以使用 `plaoc serve --help` 查看更进一步的功能。

### 启动开发

您首先需要根据您的操作系统下载 [DwebBrowser 桌面版](https://github.com/BioforestChain/dweb_browser/releases)。

接下来只需打开`DwebBrowser` 把下面的`deeplink` 粘贴到搜索框，就能安装 app 了。

```bash
dweb://install?url=http://192.168.0.100:8096/metadata.json
```

安装完成之后，如果需要查看调试界面，可以右击 app，点击打开调试界面就可以了。

### 打包 dweb-app

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
