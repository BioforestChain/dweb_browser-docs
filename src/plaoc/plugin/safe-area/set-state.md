---
title: SafeAreaPlugin.setState()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - setState 
---

设置安全区域状态

```js
SafeAreaPlugin.setState(state)
```

## 参数

  - state

    实现了部分[State](../../interface/state/index.md)接口的对象；
    合法的属性列表包括:`[overlay]`

## 返回值

  - 一个Promise对象， resolve兑现Nnull

## 示例
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.setState({overlay: true})
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setState     | ✅       | ✅  | ✅          | X       |

## 相关链接

[SafeAreaPlugin](./index.md)

