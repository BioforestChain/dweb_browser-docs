---
title: VirtualKeyboardPlugin.setStateByKey()
category:
  - Plugin
tag:
  - VirtualKeyboardPlugin
  - setStateByKey 
---

设置某一属性的值

```js
VirtualKeyboardPlugin.setStateByKey(key, value)
```

## 参数

  - key

    字符串，需要设置的状态属性名称
    合法的属性列表包括:`[overlay]`

  - value
    需要设置的状态属性的值；
    合法的属性值范围参考[VirtualKeyboardPlugin.state](./index.md)属性的值；

## 返回值

  - 一个Promise对象， resolve兑现Nnull

## 示例
```js
import { virtualKeyboardPlugin } from "@plaoc/plugins";
const value = virtualKeyboardPlugin.setStateByKey("overlay", true)
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setStateByKey | ✅      | ✅  | ✅          | X       |

## 相关链接

[VirtualKeyboardPlugin](./index.md)


