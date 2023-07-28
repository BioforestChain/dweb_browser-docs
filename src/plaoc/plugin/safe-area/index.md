---
title: SafeAreaPlugin
category:
  - Plugin
tag:
  - status-bar
---

SafeAreaPlugin 接口用来表示屏幕的安全区域;
安全区域同系统栏和硬件是强关联的；

```javascript
import { safeAreaPlugin } from "@plaoc/plugins";
safeAreaPlugin.setOverlay(true)
```

## 属性

- [SafeAreaPlugin.state](./state.md)

  安全区域的状态对象；
  属性值是一个实现了[StateObserver](../../interface/state-observer/index.md) 接口的对象;
   

## 方法 Method

  - [SafeAreaPlugin.getOverlay()](./get-overlay.md)

    查询遮盖状态；
    如果返回的Promise对象，resolve兑现的是true;
    表示安全区域中App的内容会被系统栏遮盖部分内容；

  - [SafeAreaPlugin.getState([force_update])](./get-state.md)

    查询安全区域的状态;

  - [SafeAreaPlugin.setOverlay()](./set-overlay.md)

    设置遮盖状态；
    如果设置为true;
    表示安全区域中App的内容会被系统栏遮盖部分内容；

  - [SafeAreaPlugin.setState()](./set-state.md)

    设置安全区域的状态；

  - [SafeAreaPlugin.setStateByKey()](./set-state-by-key.md)

    设置安全区域某一状态的值；


## 事件 Event
- 无


## 平台兼容性


| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| state        | ✅      | ✅  | ✅          | X       |
| getOverlay   | ✅      | ✅  | ✅          | X       |
| getState     | ✅      | ✅  | ✅          | X       |
| setOverlay   | ✅      | ✅  | ✅          | X       |
| setState     | ✅      | ✅  | ✅          | X       |
| setStateByKey| ✅      | ✅  | ✅          | X       |


## 相关链接

[Plaoc](../)


