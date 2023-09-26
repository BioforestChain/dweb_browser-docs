---
title: progress
category:
  - Event
tag:
  - UpdateController
---

此事件能监听 app 下载的进度的变化，初始为 0，下载完成为 100。

## 示例

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
const updateContoller = updateControllerPlugin.listen;
updateContoller.addEventListener("progress", (event) => {
  const progressRate = event.detail.progress;
  console.log(
    "updateContoller progress =>",
    progressRate,
    parseFloat(progressRate)
  );
});
```


