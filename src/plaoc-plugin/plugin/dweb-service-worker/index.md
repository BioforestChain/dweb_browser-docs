---
title: DwebServiceWorkerPlugin
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
---

模拟 ServiceWorker 并且提供应用升级控制器和应用控制功能插件。

```js
import  { dwebServiceWorkerPlugin } from "@plaoc/plugin";
```

## 属性

  - updateController

    访问 [UpdateControllerPlugin](../update-controller/index.md)的属性；
    属性值是一个 [UpdateControllerPlugin](../update-controller/index.md)对象；

## 方法

  - [DwebServiceWorkerPlugin.update()](./update.md)

    获取app更新控制器

  - [DwebServiceWorkerPlugin.close()](./close.md)

    关闭前端UI

  - [DwebServiceWorkerPlugin.restart()](./restart.md)

    重启前端和后端服务；

  - [DwebServiceWorkerPlugin.externalFetch()](./external-fetch.md)

    同其他app通信的方法；
 

## 事件

  - 无

## 平台兼容性

| 属性/方法/事件      | Android | IOS | Desktop-Dev | Desktop |
|:-----------------:|:-------:|:---:|:-----------:|:-------:|
| updateController  | ✅      | ✅  | ✅           | X       |
| update            | ✅      | ✅  | ✅           | X       |
| close             | ✅      | ✅  | ✅           | X       |
| restart           | ✅      | ✅  | ✅           | X       |
| externalFetch     | ✅      | ✅  | ✅           | X       |

## 相关链接

[Plaoc](../../)


