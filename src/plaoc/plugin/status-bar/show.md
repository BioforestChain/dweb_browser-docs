---
title: StatusBarPlugin.show()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - show 
---

显示系统状态栏

```js
StatusBarPlugin.show()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现Nnull

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.show()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| show     | ✅      | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


