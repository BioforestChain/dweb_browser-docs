---
title: MWebviewPlugin.activate()
category:
  - Plugin
tag:
  - MWebviewPlugin
  - activate
---

激活 mwebview

```js
MWebviewPlugin.activate()
```

## 参数

  - 无

## 返回值

  返回一个Promise，resolve兑现一个boolean;
  激活成功兑现 true;
  激活失败兑现 false;

## 示例
```js
import { mwebviewPlugin } from "@plaoc/plugin";
mwebviewPlugin.activate()
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| activate     | ✅       | ✅  | ✅         | X       |

## 相关链接

[MWebviewPlugin](./index.md)


