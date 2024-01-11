---
title: StatusBarPlugin.getColor()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getColor 
---

查询系统状态栏的颜色\[背景色\]

```js
StatusBarPlugin.getColor()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现一个表示十六进制颜色的字符串；例如： `#FFFFFFFF`

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getColor("#FFFFFFFF")
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getColor     | ✅      | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


