---
title: cancel
category:
  - Event
tag:
  - UpdateController
---

当下载被取消的时候会触发这个事件。

## 示例

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
const updateContoller = updateControllerPlugin.listen;
updateContoller.addEventListener("cancel", (event) => {
  console.log("updateContoller cancel =>", event);
});
```
