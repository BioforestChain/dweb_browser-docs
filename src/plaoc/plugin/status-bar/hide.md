---
title: StatusBarPlugin.hide()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - hide 
---

隐藏系统状态栏

```js
StatusBarPlugin.hide()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现Nnull

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.hide()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| hide     | ✅      | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


