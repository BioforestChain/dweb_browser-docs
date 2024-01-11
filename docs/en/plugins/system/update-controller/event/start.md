---
title: start
category:
  - Event
tag:
  - UpdateController
---

This event is triggered when the download starts.

## Example

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
const updateContoller = updateControllerPlugin.listen;
updateContoller.addEventListener("start", (event) => {
  console.log("updateContoller start =>", event);
});
```
