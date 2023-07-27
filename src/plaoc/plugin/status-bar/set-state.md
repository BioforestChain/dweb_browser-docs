---
title: StatusBarPlugin.setState()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setState 
---

设置系统状态栏状态

```js
StatusBarPlugin.setState(state)
```

## 参数

  - state

    实现了部分[State](../../interface//state/index.md)接口的对象；
    合法的属性范围参考[StatusBarPlugin.state](./index.md)属性；
    可以包含全部的属性也可以包含部分部分属性

## 返回值

  - 一个Promise对象， resolve兑现Nnull

## 示例
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setState({color:"#FFFFFFFF"})
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setState     | ✅       | ✅  | ✅          | X       |

## 相关链接

[StatusBarPlugin](./index.md)


