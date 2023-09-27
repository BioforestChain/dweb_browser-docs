---
title: start
category:
  - Event
tag:
  - UpdateController
---

当下载开始的时候会触发这个事件。

## 示例

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
const updateContoller = updateControllerPlugin.listen;
updateContoller.addEventListener("start", (event) => {
  console.log("updateContoller start =>", event);
});
```
