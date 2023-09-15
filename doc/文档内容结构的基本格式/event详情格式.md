---
title: event fetch
category:
  - Shim Plugin WebComponent Interface 中的一个类目
tag:
  - event
  - fetch
---

事件说明概述 

```js
DwebServiceWorker.addEventListener('fetch', fetchEvent => {
  fetchEvent.responseWith(``)
})
```

## 监听器参数

  - fetchEvent

    参数值是一个

## 示例
```js
import { dwebServiceWorker } from "@plaoc/plugins";
dwebServiceWorker.addEventListener('fetch', async (fetchEvent) => {
  
}) 
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| event fetch  | ✅      | ✅  | ✅          | X       |

## 相关链接

[]()


