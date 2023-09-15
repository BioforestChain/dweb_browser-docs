---
title: MWebviewPlugin.closeApp()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - closeApp
---

关闭整个应用，指挥关闭前端，服务不会被关闭

```js
MWebviewPlugin.closeApp()
```

## 参数

  - 无

## 返回值

  返回一个Promise，resolve兑现一个boolean;
  激活成功兑现 true;
  激活失败兑现 false;

## 示例
```js
import { mwebviewPlugin } from "@plaoc/plugins";
mwebviewPlugin.closeApp()
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| closeApp     | ✅       | ✅  | ✅         | X       |

## 相关链接

[MWebviewPlugin](./index.md)


