---
title: DwebServiceWorkerPlugin.externalFetch()
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
  - externalFetch
---

同其他app通信的方法；

```js
DwebServiceWorkerPlugin.externalFetch(mmid, init)
```

## 参数

  - mmid

    其他app的标识符；
    参数值是一个[$MMID](../../interface/mmid/index.md)类型的对象；

  - init

    是初始化数据；
    参数值是一个[$ExterRequestWithBaseInit](../../interface/exter-request-with-base-init/index.md)对象；
    

## 返回值

  返回一个Promise,resolve兑现一个Response;

## 示例
```js
import  { dwebServiceWorkerPlugin } from "@plaoc/plugin";
dwebServiceWorkerPlugin
.externalFetch(
  `xxx.dweb`, 
  {
    pathname: "xxxx",
  }
)
```


## 平台兼容性

| 属性/方法/事件       | Android | IOS | Desktop-Dev | Desktop |
|:------------------:|:-------:|:---:|:-----------:|:-------:|
| externalFetch      | ✅       | ✅  | ✅          | X       |

## 相关链接
[DwebServiceWorkerPlugin](../index.md)


