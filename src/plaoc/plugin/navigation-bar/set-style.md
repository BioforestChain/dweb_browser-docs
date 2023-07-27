---
title: NavigationBarPlugin.setStyle()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setStyle 
---

设置系统导航栏的风格\[前景色\]

```js
NavigationBarPlugin.setStyle(style)
```

## 参数

  - style

    参数接受一个字符串；字符串可能的值是：
    `"DARK"` `"LIGHT"` `"DEFAULT`
    查看[State.style](../../interface/state/index.md)的属性，了解详情；


## 返回值

  - 一个Promise对象， resolve兑现Nnull

## 示例
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setStyle("DEFAULT")
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setStyle     | ✅       | ✅  | ✅          | X       |

## 相关链接

[NavigationBarPlugin](./index.md)


