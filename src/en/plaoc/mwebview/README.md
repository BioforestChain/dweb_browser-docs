---
title: MWebView
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

MWebView is responsible for managing multi-page navigation in the app. On Android, it manages multiple [WebView](https://developer.android.com/reference/android/webkit/WebView) instances, on iOS it manages multiple [wkwebview](https://developer.apple.com/documentation/webkit/wkwebview) instances, and on desktop, it manages [BrowserView](https://www.electronjs.org/docs/latest/api/browser-view) instances.

> For detailed code examples, please refer to: [MWebView](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Webview.vue)

## MWebView WebComponent API

To use the WebComponent, you need to mount the DOM node and then you can call the respective APIs.

```html
<body>
  <dweb-mwebview></dweb-mwebview>
  <script type="module">
    import "@plaoc/plugins";
    const mwebview = document.querySelector("dweb-mwebview")!
    // Open a new page
    const open = async () => {
     mwebview.open("https://docs.dweb-browser.org/")
    }
  </script>
</body>
```

### open

Opens a new page.

- Method signature

```ts
open(url: string): Promise<WebViewItem>
```

**Returns:** <code>Promise&lt;<a href="#webviewitem">WebViewItem</a>&gt;</code>


### close

Destroys the specified webview.

- Method signature

```ts
close(webview_id: string): Promise<boolean>
```

### activate

Activates MWebView.

```ts
activate(): Promise<boolean>
```

### closeApp

Closes the entire application by closing the frontend only. The concept of closing the frontend will be further elaborated upon in the programmable backend.
After closing the frontend, the app can continue performing tasks in the background.

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

| Property         | Type                | Description   | Since |
| ---------------- | ------------------- | ------------- | ----- |
| **`webview_id`** | <code>string</code> | ID of the webview | 1.0.0 |