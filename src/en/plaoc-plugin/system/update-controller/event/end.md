---
title: end
category:
  - Event
tag:
  - UpdateController
---

This event will be triggered when the download ends.

## Example

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
const updateContoller = updateControllerPlugin.listen;
updateContoller.addEventListener("end", (event) => {
  console.log("updateContoller end =>", event);
});
```
