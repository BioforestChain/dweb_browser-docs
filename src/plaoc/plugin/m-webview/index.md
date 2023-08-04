---
title: MWebviewPlugin
category:
  - Plugin
tag:
  - MWebviewPlugin
---

多webview插件；

```js
import { mwebviewPlugin } from "@plaoc/plugin";
```

## 属性

  - 无

## 方法

  - [MWebviewPlugin.open()](./open.md)

    打开一个新的webview


  - [MWebviewPlugin.close()](./close.md)

    销毁指定的webview


  - [MWebviewPlugin.activate()](./activate.md)

    激活webview


  - [MWebviewPlugin.closeApp()](./close-app.md)

    关闭整个应用，指挥关闭前端，服务不会被关闭

## 事件

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| open         | ✅      | ✅  | ✅          | X       |
| close        | ✅      | ✅  | ✅          | X       |
| activate     | ✅      | ✅  | ✅          | X       |
| closeApp     | ✅      | ✅  | ✅          | X       |

## 相关链接

[Plaoc](../index.md)


