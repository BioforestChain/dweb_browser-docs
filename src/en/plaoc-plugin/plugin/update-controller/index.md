---
title: UpdateControllerPlugin
category:
  - Plugin
tag:
  - UpdateControllerPlugin
---

The app's update control plug-in is responsible for monitoring app download progress and other events.

```ts
import { updateControllerPlugin } from "@plaoc/plugins";
```

## method

### [updateControllerPlugin.download()](./download.md)

Responsible for downloading the app. After calling, it will jump to the download interface.

### [updateControllerPlugin.pause()](./pause.md)

Pause app download.

### [updateControllerPlugin.resume()](./resume.md)

Resume/restart app download.

### [updateControllerPlugin.cancel()](./cancel.md)

Cancel app download.

<!-- ### [updateControllerPlugin.checkNewVersion()](./check-new-version.md)

Check if there is a new version. -->

## event

### [start](./event/start.md)

Listen for the start download event.

### [end](./event/end.md)

Listen for the download end event.

### [progress](./event/progress.md)

Monitor download progress updates and update the animation of the download progress bar through this event.

### [cancel](./event/cancel.md)

Listen for download cancellation events.
