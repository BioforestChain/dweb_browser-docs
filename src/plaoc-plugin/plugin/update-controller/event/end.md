---
title: end
category:
  - Event
tag:
  - UpdateController
---

当下载结束的时候会触发这个事件。

## 示例

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
const updateContoller = updateControllerPlugin.listen;
updateContoller.addEventListener("end", (event) => {
  console.log("updateContoller end =>", event);
});
```
