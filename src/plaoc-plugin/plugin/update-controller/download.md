---
title: UpdateControllerPlugin.download()
category:
  - Plugin
tag:
  - UpdateControllerPlugin
  - download
---

下载App

```js
UpdateControllerPlugin.download(metadataUrl)
```

## 参数

  - metadataUrl

    参数是访问app元数据的地址；
    参数的类型是string;

## 返回值

  返回一个Promise,resolve兑现[BFSMetaData](../../interface/bfs-meta-data/index.md)对象

## 示例
```js
import { dwebServiceWorker } from "@plaoc/plugins"
dwebServiceWorker.updateController.download("http://xxx")
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| download     | ✅       | ✅  | ✅          | X       |

## 相关链接

[UpdateControllerPlugin](./index.md)


