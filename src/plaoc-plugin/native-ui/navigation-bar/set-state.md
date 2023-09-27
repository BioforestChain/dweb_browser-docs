---
title: NavigationBarPlugin.setState()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - setState 
---

设置系统导航栏状态

```js
NavigationBarPlugin.setState(state)
```

## 参数

  - state

    实现了部分[State](../../interface/state/index.md)接口的对象；
    合法的属性列表包括:`[overlay, visible, color, style]`

## 返回值

  - 一个Promise对象， resolve兑现null

## 示例
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.setState({color:"#FFFFFFFF"})
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setState     | ✅       | ✅  | ✅          | X       |

## 相关链接

[NavigationBarPlugin](./index.md)


