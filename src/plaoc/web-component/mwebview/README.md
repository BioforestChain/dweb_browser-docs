---
title: MWebView
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

mwebview 负责管理 app 的多页面管理，在 android 上体现的是管理多[WebView](https://developer.android.com/reference/android/webkit/WebView),
ios 上是管理多个[wkwebview](https://developer.apple.com/documentation/webkit/wkwebview),
桌面端则是管理[BrowserView](https://www.electronjs.org/docs/latest/api/browser-view)。

> 具体查看示例代码： [MWebView](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Webview.vue)

## MWebView WebComponent API

使用 WebComponent 需要先挂载 DOM 节点，然后就能调用相应 API。

```html
<body>
  <dweb-mwebview></dweb-mwebview>
  <script type="module">
    import "@plaoc/plugins";
    const mwebview = document.querySelector("dweb-mwebview")!
    // 打开一个新页面
    const open = async () => {
     mwebview.open("https://docs.dweb-browser.org/")
    }
  </script>
</body>
```

### open

打开一个新页面。

- 调用签名

```ts
open(url: string): Promise<WebViewItem>
```

**Returns:** <code>Promise&lt;<a href="#webviewitem">WebViewItem</a>&gt;</code>


### close

销毁指定的 webview。

- 调用签名

```ts
close(webview_id: string): Promise<boolean>
```

### activite

激活mwebview。

```ts
activate(): Promise<boolean>
```

### closeApp

关闭整个应用，只会关闭前端。这个关闭前端的概念，将在可编程后端之后，有进一步的体现。
这可以在关闭前端页面之后，app继续在后台做一些事情。

```ts
closeApp(): Promise<boolean>
```

## MWebView Plugin API

```ts
import { mwebviewPlugin } from "@plaoc/plugins";
mwebviewPlugin.activate();
mwebviewPlugin.open("https://docs.dweb-browser.org/")
```

## Interfaces

### WebViewItem

| Prop             | Type                | Description   | Since |
| ---------------- | ------------------- | ------------- | ----- |
| **`webview_id`** | <code>string</code> | webview 的 id | 1.0.0 |
