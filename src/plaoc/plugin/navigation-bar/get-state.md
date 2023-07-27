---
title: NavigationBarPlugin.getState()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getState 
---

获取插件的状态值

```js
NavigationBarPlugin.getState([force_update])
```

## 参数

  - force_update

    参数接受一个 boolean 类型的数据；是否需要强制更新状态；
    force_update === true 会从系统中重新读取状态更新；
    force_update === false 会返回上一次缓存的状态数据；


## 返回值

  - 一个Promise对象， resolve兑现一个实现了部分[State](../state/index.md)接口的对象；

## 示例
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getState(true)
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getState     | ✅      | ✅  | ✅          | X       |

## 相关链接

[NavigationBarPlugin](./index.md)


