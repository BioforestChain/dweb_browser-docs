---
title: NavigationBarPlugin.getColor()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getColor 
---

查询系统导航栏的颜色\[背景色\]

```js
NavigationBarPlugin.getColor()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现一个表示十六进制颜色的字符串；例如： `#FFFFFFFF`

## 示例
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getColor("#FFFFFFFF")
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getColor     | ✅      | ✅  | ✅          | X       |

## 相关链接

[NavigationBarPlugin](./index.md)


