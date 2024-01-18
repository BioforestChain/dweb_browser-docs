# 什么是 dweb-browser

dweb-browser 是一个遵循 Dweb 标准构建起来的浏览器平台，并将浏览器的能力、以及浏览器相关的系统原生系统能力通过各种 dweb 模块暴露出来。目前我们实现了 Android、IOS、MacOS、Windows、Linux 这些主流平台的支持。
它包含一下这些核心模块：

- `js.browser.dweb`

它是一个 javascript-runtime，使用的是 WebWorker 作为底层实现。因此 WebWorker 中的各种标准都可以开箱即用。

- `jmm.browser.dweb`

它是一个动态 dweb 模块管理器，基于此可以实现类似 PWA 的应用功能

- `mwebview.browser.dweb`

它的全称是 mutil-webview（多 web 视图）的渲染器，可以使用这个渲染器同时渲染多个 Web 视图。比如说可以用它实现一个网页浏览器。

- `nativeui.browser.dweb`

它是一个 dweb-browser 自己定义的窗口标准，它被集成到 mwebview 中，因此可以让 mwebview 的视图获得窗口管理的能力。

- `*.sys.dweb`

和浏览器相关的一些系统标准也在 dweb-browser 上被实现。

## 什么是 dweb？

Dweb 是一种去中心化的 Web 共识标准。它直接体现在您的域名上，如： `example.dweb`
然而正是因为 dweb 这个跟域名并不在互联网上真实存在，也就意味着它不归属于任何组织，也就是说，如何解释`example.dweb`这个域名，完全由您自己（的设备）执行决策。
dweb 共识标准由几个部分联合组成：

### 通讯标准

借鉴于 http 协议，我们使用 JSON 与 CBOR 这种 web 数据格式定义了两个模块的通讯标准，而遵循这种给予消息的通讯的模块，我们将其称为 dweb-micro-module（中文：“dweb 模块”）。
这种通讯标准，我们使用`file:`协议头配合`.dweb`跟域名来进行定义它的 URL，比如说：`file://dns.sys.dweb/`。

### 路由标准

`dns.sys.dweb` 是 dweb 的共识标准的核心部分，它定义了两个 dweb 模块 的 互联、注册、查询 等功能，是 dweb 模块接入到 dweb 世界的标准。

### 系统标准

这里涵盖了常见操作系统模块的一些标准，包含各个平台独立的标准与统一抽象的标准：

- `file.sys.dweb`
- `os.sys.dweb`
- `camera.sys.dweb`
  - `camera.harmonyos-sys.dweb`
  - `camera.android-sys.dweb`
  - `camera.ios-sys.dweb`
  - `camera.windows-sys.dweb`
- `status-bar.sys.dweb`
  - `status-bar.android-sys.dweb`
  - `status-bar.ios-sys.dweb`
- `toast.sys.dweb`
- `share.sys.dweb`
- `http.sys.dweb`
- `https.sys.dweb`
- `http3.sys.dweb`
- `permission.sys.dweb`
- `process.sys.dweb`
- `account.sys.dweb`
- _等等_

这些 `*sys.dweb` 的标准属于行业共识，我们不会去篡改它，只会随着原生系统的更新去跟进它，因此它是长期稳定的，会被作为应用开发的标准库被使用。

### 深度链接标准

`dweb-deeplink` 是一种以 `dweb:{domain}/pathname?search` 为格式的链接，它为 dweb 模块之间提供了一种定义共识的平台，比如说模块之间可以依赖共识而不是依赖实际的 dweb 模块。
举个具体的例子，比如说实现分享功能：我可以在我的分享按钮中绑定：`dweb:share?title=hello_world&files=http...`，那么 dweb 内核就会去寻找哪个模块声明了该`dweb:share`的实现，并将请求路由到该模块去。如果共识被多个模块同时实现，那么在不同的平台上会通过平台标准的交互来进行偏好选择。

在有命令行的环境里，`dweb-deeplink` 还可以通过命令行来进行访问：`dweb-browser install app --url=xx`会被解析成：`dweb:install/app?url=xx`

> 注意：这里的 `dweb-browser` 只是一个实现 dweb 协议的软件，社区中可能会有其它实现。

### 生命周期标准

dweb 模块可以通过“路由标准”进行互联，那么相对应的，就有两个基本的生命周期：

1. `onConnect` 模块之间达成连接时触发，可以是别人连自己，也可以是自己连别人，都会触发该生命周期，因为模块之间是对等的、全双工的。
1. `onActivity` 模块接受到特定的消息：`activity-event`，那么就会触发该生命周期，该生命周期通常被用于执行一些特定的任务，比如激活窗口。

> 更多的生命周期，会在不同平台不同场景所被定义，但那些生命周期属于上层应用标准，不再属于 dweb 核心标准。
> 两个应用之间如果想要了解对方应用实现了哪些标准，可以使用查询对方的 dweb-deeplink 来实现

### 小结

可以看得出来，相比于传统的 web-api 设计，dweb 更加的自由。核心原因是因为 dweb 模块之间完全使用消息通讯，这就给 dweb 模块带来的部署带来了无限了可能。你可以使用沙盒模块来保护隐私，甚至可以使用网络的来将来其它设备的模块部署到本地使用。

## 什么是 plaoc

plaoc 是基于 dweb-browser 平台的一个对标 Cordova、Capacitor、Tauri 的“跨平台 Web 应用”开发工具包

## 什么是 bfs

bfs 是基于 dweb-browser 平台构建的一系列应用群，目的是给人与人之间提供要素流动的工具。
它完全基于分布式、开源开放的理念，没有平台能够桎梏您的数据。
基于共识，您可以私有化部署 dweb 直接相关的一切软件，事实上，它也是如此这般在您的设备上工作。

它包含当不仅限于以下共识与应用：

1. `authn.bfs.dweb`
   《身份验证》共识
1. `chain.bfs.dweb`
   《生物链林》共识
   1. `bfm.chain.bfs.dweb`
   1. `ccc.chain.bfs.dweb`
   1. `bft.chain.bfs.dweb`
1. `matrix.bfs.dweb`
   《去中心化的网络服务》共识
1. `cloud.bfs.dweb`
   《去中心化的存储服务》共识
1. `pay.bfs.dweb`
   《点对点转移》共识
1. `wallet.bfs.dweb`
   《连接 web3 与生物链林 的钱包》共识
   1. `cot.wallet.bfs.dweb` COT 钱包
1. `dp.bfs.dweb`
   《点对点数字化产品交易》共识
1. `blog.bfs.dweb`
   《分布式图文媒体》共识
1. `chat.bfs.dweb`
   《分布式实时通讯》共识
1. `finance.bfs.dweb`
   《分布式金融》共识
1. `office.bfs.dweb`
   《分布式办公协作》共识
   1. `ark.office.bfs.dweb` 方舟

### cli

- 安装

```bash
npm install -g @plaoc/cli
```

- 打包成 app

`plaoc bundle ./dir`

会打包成以下的文件夹结构，并输出压缩文件 `.zip` 和一个 `metadata.json`,详情请到[plaoc cli](./plaoc/cli)查看详细文档。

- 开发者模式

`plaoc preview http://localhost:1231` 或者 `plaoc preview ./dir`
该命令会输出命令：

```bash
metadata:       http://127.0.0.1:8096/metadata.json
metadata:       http://172.30.90.207:8096/metadata.json
```

- 使用开发者工具进行开发

```bash
#window
 & "D:\DownLoads\Dweb Browser-x.x.x.exe" install --url http://172.30.93.43:8096/metadata.json
#macos
open /Applications/Dweb\ Browser.app --args install --url http://127.0.0.1:8096/metadata.json
```