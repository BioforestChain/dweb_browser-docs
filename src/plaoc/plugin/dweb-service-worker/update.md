---
title: DwebServiceWorkerPlugin.update()
category:
  - Plugin
tag:
  - DwebServiceWorkerPlugin
  - update
---

获取app更新控制器

```js
DwebServiceWorkerPlugin.update()
```

## 参数

  - 无

## 返回值

  返回一个 [UpdateControllerPlugin](../update-controller/index.md);  

## 示例
```js
import { DwebServiceWorkerPlugin } from "@plaoc/plugin";
const updateControllerPlugin = DwebServiceWorkerPlugin.update();
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| update     | ✅       | ✅  | ✅          | X       |

## 相关链接

[DwebServiceWorkerPlugin](../dweb-service-worker/index.md)


