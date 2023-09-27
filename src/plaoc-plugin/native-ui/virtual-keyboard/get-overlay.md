---
title: VirtualKeyboardPlugin.getOverlay()
category:
  - Plugin
tag:
  - VirtualKeyboardPlugin
  - getOverlay 
---

查询虚拟键盘展开后是否会遮盖App的内容;

```js
VirtualKeyboardPlugin.getOverlay()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象， resolve兑现boolean;
  如果兑现的值是true，表示虚拟键盘展开后会这个App的内容；
  如果兑现的值是false, 表示虚拟键盘展开后不会这个App的内容；

## 示例
```js
import { virtualKeyboardPlugin } from "@plaoc/plugins";
const value = virtualKeyboardPlugin.getOverlay()
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay     | ✅      | ✅  | ✅          | X       |

## 相关链接

[VirtualKeyboardPlugin](./index.md)


