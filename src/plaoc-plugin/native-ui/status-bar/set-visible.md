---
title: StatusBarPlugin.setVisible()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setVisible 
---

设置系统状态栏是否可见

```js
StatusBarPlugin.setVisible(b)
```

## 参数

  - b

    参数接受一个 boolean;


## 返回值

  - 一个Promise对象， resolve兑现null

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setVisible(true)
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setVisible   | ✅      | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


