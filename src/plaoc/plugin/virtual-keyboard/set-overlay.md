---
title: VirtualKeyboardPlugin.setOverlay()
category:
  - Plugin
tag:
  - VirtualKeyboardPlugin
  - setOverlay 
---

设置遮盖状态；
如果设置为true;
表示虚拟键盘展开后会遮盖App的部分内容；

```js
VirtualKeyboardPlugin.setOverlay(b)
```

## 参数

  - b

    参数接受一个 boolean;


## 返回值

  - 一个Promise对象， resolve兑现Nnull

## 示例
```js
import { virtualKeyboardPlugin } from "@plaoc/plugins";
const value = virtualKeyboardPlugin.setOverlay(true)
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setOverlay   | ✅      | ✅  | ✅          | X       |

## 相关链接

[VirtualKeyboardPlugin](./index.md)


