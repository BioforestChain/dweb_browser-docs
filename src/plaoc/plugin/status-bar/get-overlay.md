---
title: StatusBarPlugin.getOverlay()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getOverlay 
---

查询系统状态栏是否遮盖APP的内容

```js
StatusBarPlugin.getOverlay()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现boolean;

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getOverlay("#FFFFFFFF")
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay     | ✅      | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


