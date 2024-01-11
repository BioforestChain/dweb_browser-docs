---
title: CloseWatcher
category:
  - Plugin
tag:
  - closeWatcher
---

This is a special plug-in that can `cancel out' the system's return signal once, and it is also `one-time'. Therefore, create a CloseWatcher object, which can offset a system return operation.

Therefore, we can use this plug-in to simulate some system-level operations with web technology. For example: when the video is played in full screen on the web, if the user clicks the system back button, we can only exit the full screen instead of exiting the entire page.

Generally speaking, it is to intercept the return of the system. In `android` and `ios`, it is a left swipe operation (it may also be the return button). On the left side, it is to offset the `esc` button once, and then you can do some of your own logic operate.

## method

### closeWatcher.close()

Take the initiative to cancel this retreat interception. That is to make this retreat interception invalid.

### Example

```ts
import { CloseWatcher } from "@plaoc/plugins";
const closeWatcher = new CloseWatcher();
// Cancel this back interception
closeWatcher.close();
```

## event

### closeEvent

When you create a `CloseWatcher`, if the user triggers a back operation, the system's back operation will be intercepted and the `close` event will be triggered.

### Example

```ts
import { CloseWatcher } from "@plaoc/plugins";
const closeWatcher = new CloseWatcher();
closeWatcher.addEventListener("close", (event) => {
  console.log(
    "Back event can be received here =>",
    event.isTrusted,
    event.timeStamp
  );
});
```

::: tip
Extended reading [close-watcher proposal](https://github.com/WICG/close-watcher/blob/main/README.md)
:::
