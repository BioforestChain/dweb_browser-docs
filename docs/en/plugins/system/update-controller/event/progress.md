---
title: progress
category:
  - Event
tag:
  - UpdateController
---

This event can monitor changes in the progress of app download. It is initially 0 and will be 100 when the download is completed.

## Example

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
