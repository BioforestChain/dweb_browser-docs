---
title: UpdateControllerPlugin
category:
  - Plugin
tag:
  - UpdateControllerPlugin
---

app 的更新控制插件，负责监听 app 下载进度和其他一些事件。

```js
import { updateControllerPlugin } from "@plaoc/plugins";
```

## 方法

### [updateControllerPlugin.download()](./download.md)

负责下载 app,调用后会跳转到下载界面。

### [updateControllerPlugin.pause()](./pause.md)

暂停 app 下载。

### [updateControllerPlugin.resume()](./resume.md)

恢复/重启 app 下载。

### [updateControllerPlugin.cancel()](./cancel.md)

取消 app 下载。

<!-- ### [updateControllerPlugin.checkNewVersion()](./check-new-version.md)

检测是否有新版本。 -->

## 事件

### [start](./event/start.md)

监听开始下载事件。

### [end](./event/end.md)

监听下载结束事件。

### [progress](./event/progress.md)

监听下载进度的更新，可以通过这个事件更新下载进度条的动画。

### [cancel](./event/cancel.md)

监听取消下载事件。
