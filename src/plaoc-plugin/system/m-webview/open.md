---
title: MWebviewPlugin.open()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - open
---

在 app 内部打开一个新的窗口页面。

## 示例

```ts
import { mwebviewPlugin } from "@plaoc/plugins";
mwebviewPlugin.open(`http://xxx`);
```

## 函数签名

```ts
open(url: string): Promise<WebViewItem>
```

### 参数

- url

传递打开的网址。

### 返回值

- WebViewItem

返回的`webview_id`是打开的页面 ID,`wid`是窗口 ID。
可以根据 `webview_id` 对页面执行关闭操作。

```ts
interface WebViewItem {
  webview_id: string;
  wid: string;
}
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop |
| :------------: | :-----: | :-: | :-----: |
|      open      |   ✅    | ✅  |   ✅    |

