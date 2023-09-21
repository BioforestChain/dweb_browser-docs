---
title: cancel
category:
  - Event
tag:
  - UpdateController
---

This event is triggered when the download is canceled.

## Example

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
const updateContoller = updateControllerPlugin.listen;
updateContoller.addEventListener("cancel", (event) => {
  console.log("updateContoller cancel =>", event);
});
```
