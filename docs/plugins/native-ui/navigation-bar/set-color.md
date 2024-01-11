---
title: NavigationBarPlugin.setColor()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setColor 
---

设置系统导航栏的颜色\[背景色\]

```js
NavigationBarPlugin.setColor(color)
```

## 参数

  - color

    参数接受一个表示十六进制颜色的字符串；例如： `#FFFFFFFF`


## 返回值

  - 一个Promise对象， resolve兑现null

## 示例
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setColor("#FFFFFFFF")
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setColor     | ✅      | ✅  | ✅          | X       |

## 相关链接

[NavigationBarPlugin](./index.md)


