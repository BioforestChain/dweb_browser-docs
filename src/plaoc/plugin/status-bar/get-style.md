---
title: StatusBarPlugin.getStyle()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getStyle 
---

查询系统状态栏的风格\[前景色\]

```js
StatusBarPlugin.getStyle()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现字符串；
  字符串可能的值是：
  `"DARK"` `"LIGHT"` `"DEFAULT"`

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getStyle()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getStyle     | ✅      | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


