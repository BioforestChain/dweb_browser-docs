---
title: dwebServiceWorker
category:
  - Plugin
tag:
  - dwebServiceWorker
---

模拟 ServiceWorker 并且提供应用升级控制器和应用控制功能插件。

```ts
import { dwebServiceWorker } from "@plaoc/plugins";
```

## 方法

### [dwebServiceWorker.close()](./close.md)

关闭前端界面。

### [dwebServiceWorker.restart()](./restart.md)

重启前端和后端服务。这个会导致 app 重启，并且前端重新渲染。

### [dwebServiceWorker.externalFetch()](./external-fetch.md)

同其他 app 通信的方法。

<!-- ### [dwebServiceWorker.canOpenUrl()](./can-open-url.md)

查看应用是否已经安装，这一般在跟其他 app 通信的时候检测。 -->

## 事件

### [fetchEvent](./event-fetch.md)

负责接收和回复其他app的消息。