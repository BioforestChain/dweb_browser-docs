---
title: SharePlugin.canShare()
category:
  - Plugin
tag:
  - SahrePlugin
  - canShare
---

是否可以分享

```js
SharePlugin.canShare()
```

## 参数

  - 无

## 返回值

  返回一个Promise,resolve兑现一个boolean;

## 示例
```js
import { sharePlugin } from "@plaoc/plugins";
;(async() => {
  const b = await sharePlugin.canShare()
})();

```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| canShare     | ✅       | ✅  | ✅          | X       |

## 相关链接

[SharePlugin](./index.md)


