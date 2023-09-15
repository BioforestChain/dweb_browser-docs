---
title: MWebviewPlugin.open()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - open
---

打开一个新的webview

```js
MWebviewPlugin.open(url)
```

## 参数

  - url

    需要载入的地址；
    参数值是一个字符串；

## 返回值

  返回一个Promise，resolve兑现一个[WebViewItem](../../interface/webview-item/index.md)对象；

## 示例
```js
import { mwebviewPlugin } from "@plaoc/plugins";
mwebviewPlugin.open(`http://xxx`)
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| open         | ✅       | ✅  | ✅         | X       |

## 相关链接

[MWebviewPlugin](./index.md)


