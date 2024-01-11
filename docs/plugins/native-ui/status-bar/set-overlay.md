---
title: StatusBarPlugin.setOverlay()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setOverlay 
---

设置系统状态栏的是否遮盖App的内容

```js
StatusBarPlugin.setOverlay(b)
```

## 参数

  - b

    参数接受一个 boolean;


## 返回值

  - 一个Promise对象， resolve兑现null

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setOverlay(true)
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setOverlay   | ✅      | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


