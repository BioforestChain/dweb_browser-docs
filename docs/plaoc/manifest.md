---
outline: deep
---

# Manifest

dweb app 的 `manifest.json` 文件详情解释，您可以理解为是 PWA 的 `manifest.json`。

这里主要提供 dweb app 的所有的配置信息，归属性验证，和一些展示在安装界面的信息。

- [Manifest](#manifest)
  - [Reference](#reference)
      - [Parameter](#parameter)
  - [Example](#example)

## Reference

#### Parameter

- `id`：**_string_**。规范是：`${name}.${host}.dweb`。每个`app`都有一个唯一的`id`，每个域名可以挂载多个`app`。示例: `"game.dweb.waterbang.top.dweb"`。
- `version`：**_string_**。应用的版本号。
- `baseURI`：**_string?_**。如果没有设置，默认使用`metadata.json`链接的`baseURI`。

- `server`：**_MainServer_**。plaoc 应用程序入口设置。

```ts
interface MainServer {
  root: string /* 程序的启动目录 */;
  entry: string /* 程序的启动文件 */;
}
```

- `logo`：**_string_**。应用安装展示的`logo`图标。
- `minTarget`：**_number_**。`Dweb Browser`最低支持的`Semantic Version`的`Major`版本号。
- `maxTarget`：**_number?_**。`Dweb Browser`最高支持的`Semantic Version`的`Major`版本号。

- `name`：**_string_**。应用显示的名字。同`W3C`的`WebApp`标准的[name](https://w3c.github.io/manifest/#dfn-name)。
- `short_name`：**_string_**。应用显示的简短名字。同`W3C`的`WebApp`标准的[short_name](https://w3c.github.io/manifest/#dfn-short_name)。
- `description`：**_string_**。应用简介。同`W3C`的`WebApp`标准的[description](https://w3c.github.io/manifest/#description-member)。
- `dir`：**_string?_**。用于文本对齐方式。同`W3C`的`WebApp`标准的[dir](https://w3c.github.io/manifest/#dir-member)。
- `lang`：**_string?_**。为清单的具有方向性的成员的值指定主要语言（因为知道语言也有助于方向性）。同`W3C`的`WebApp`标准的[lang](https://w3c.github.io/manifest/#lang-member)。
- `icons`：**_string_**。icon 图标集。同`W3C`的`WebApp`标准的[icons](https://w3c.github.io/manifest/#icons-member)。
<!-- - `description`：string。应用显示的简短名字。同`W3C`的`WebApp`标准的[description](https://w3c.github.io/manifest/#description-member)。
- `description`：string。应用显示的简短名字。同`W3C`的`WebApp`标准的[description](https://w3c.github.io/manifest/#description-member)。
- `description`：string。应用显示的简短名字。同`W3C`的`WebApp`标准的[description](https://w3c.github.io/manifest/#description-member)。
- `description`：string。应用显示的简短名字。同`W3C`的`WebApp`标准的[description](https://w3c.github.io/manifest/#description-member)。 -->

- `homepage_url`：**_string_**。应用官网首页地址。同`Chrome`的`manifest`标准的[homepage_url](https://developer.chrome.com/docs/extensions/mv3/manifest/homepage_url/)。

- `bundle_*`：**_string_**。使用`@plaoc/cli`工具自动生成的打包地址及安全相关校验信息等。
- `public_key_url`：**_string?_**。该链接必须使用和`id`同域名的网站链接。
  ::: info 说明：请求回来是一个“算法+公钥地址”的格式 `{algorithm}:hex;{publicKey}`
  比如说 `rsa-sha256:hex;2...1`
  :::

- `languages`：**_string[]?_**。支持的语言。[语言代码](http://www.lingoes.net/zh/translator/langcode.htm)。
- `images`：**_string[]?_**。安装应用时的展示图。
- `change_log`：**_string_**。安装应用时展示的更新日志。
- `author`：**_string[]_**。安装应用时展示的作者信息。
- `release_date`：**_string_**。安装应用时展示的发布日期。
- `dweb_deeplinks`：**_string[]?_**。规范是：`dweb://${operation}`。`Dweb Browser`的`deeplinks`功能，可用于外部唤醒应用。
- `categories`：**_string[]_**。当前推荐使用`["application"]`，后续会开放更多。
- `display`：**_"fullscreen" | "standalone" | "minimal-ui" | "browser" | undefined_**。应用的显示模式。
- `orientation`：**_"any" | "landscape" | "landscape-primary" | "landscape-secondary" | "natural" | "portrait" | "portrait-primary" | "portrait-secondary" | undefined_**。应用的窗口的默认方向。
- **......还有一些字段暂未启用。**

## Example

```json
{
  "id": "game.dweb.waterbang.top.dweb",
  "server": {
    "root": "/usr",
    "entry": "/server/plaoc.server.js"
  },
  "minTarget": 2,
  "maxTarget": 2,
  "name": "vue3-game",
  "short_name": "game",
  "description": "这是一个实例应用，包含了dweb_plugins全部组件的实例。",
  "logo": "https://www.bfmeta.info/imgs/logo3.webp",
  "bundle_url": "./game.dweb.waterbang.top.dweb-1.3.0.zip",
  "bundle_hash": "sha256:56e8a7569519364d03c04bd11147b16693db107878b4f27b827617e5f4dfb650",
  "bundle_size": 3112387,
  "bundle_signature": "",
  "public_key_url": "",
  "release_date": "Fri Jan 12 2024 14:54:14 GMT+0800 (Central Standard Time)",
  "change_log": "这是更新日志",
  "images": [
    "http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp",
    "http://qiniu-waterbang.waterbang.top/bfm/defi.png",
    "http://qiniu-waterbang.waterbang.top/bfm/nft.png"
  ],
  "author": ["bfs", "bfs@bfs.com"],
  "version": "1.3.0",
  "categories": ["application", "kids-games"],
  "languages": [],
  "homepage_url": "https://dweb.waterbang.top",
  "plugins": [],
  "permissions": [],
  "dir": "ltr",
  "lang": "",
  "icons": [],
  "screenshots": [],
  "display": "fullscreen",
  "orientation": "any",
  "theme_color": "",
  "background_color": "",
  "shortcuts": [],
  "dweb_protocols": []
}
```
