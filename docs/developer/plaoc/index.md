# Plaoc

plaoc 是基于 dweb-browser 平台的一个对标 Cordova、Capacitor、Tauri 的“跨平台 Web 应用”开发工具包，包含打包工具`@plaoc/cli`，前端插件`@plaoc/plguins`。

## cli

[@plaoc/cli](https://www.npmjs.com/package/@plaoc/cli) 是 plaoc 开发并打包应用到 dweb_browser 的命令行工具。

### 安装打包工具。

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

开发 app 的时候运行 `plaoc serve`。

- 第一种方式可以指定您前端工程输出的地址，这样在您代码更新的时候，app 内部的代码也会跟着您的更新而更新。

```bash
plaoc serve http://localhost:8000
```

- 第二种是直接指定编译完的源码目录，这种方式相当于直接安装 app，适用您前端工程断开的时候也能访问。

```bash
plaoc serve ./dist
```

上面的两个命令会输出如下几行：

```bash
using metadata file: /Volumes/developer/waterbang/deno/dweb_browser/npm/@plaoc__examples/html-demo/manifest.json
metadata: 	dweb://install?url=http://127.0.0.1:8097/metadata.json
metadata: 	dweb://install?url=http://172.30.95.93:8097/metadata.json
```

第一行的 `using metadata file`将指定您的 app 配置文件目录，方便直接知晓是哪个 app。

第二行和第三行的`metadata`为 `deeplink` 的形式，在桌面端可以直接粘贴到 dweb-browser 中进行安装。
而移动端可以使用转成二维码，使用扫码的形式进行安装应用。

### 打包成可部署的 app 包

直接使用 `plaoc bundle` 指定源码目录进行打包，命令如下：

```bash
plaoc bundle ./dir
```

会打包并输出一个包含 app ID 和日期组合而成的压缩文件 `.zip` 和一个 `metadata.json`。

这两个文件使用任意的`(http/https)` 服务部署成链接的形式，放于同一文件夹中并且指向`metadata.json` 文件。组成如下形式链接，就可以在的 dweb-browser 中进行安装。

```bash
dweb://install?url=http://<domain>/metadata.json
```

## plugins

[@plaoc/plugins](https://www.npmjs.com/package/@plaoc/plugins) 能赋予 web 开发者,直接调用各个平台系统 API 的能力。

具体文档查看：[plugins 文档](https://docs.dweb-browser.org/plugins/web-components.html)
