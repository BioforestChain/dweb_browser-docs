---
title: StatusBarPlugin.state
category:
  - Plugin
tag:
  - status-bar
---

StatusBarPlugin 接口的 state 属性值是一个 [StateObserver](../state-observer/index.md) 对象; 
这个属性是一个只读属性，请不要设置这个属性的值


```javascript
import { statusBarPlugin } from "@plaoc/plugins";

statusBarPlugin.state.onChange((info) => {
  // 当 state 发生变化的时候调用
})

```


## 平台兼容性


| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| state        | ✅      | ✅  | ✅          | X      |
 

## 相关链接
[StateObserver](../state-observer/index.md)