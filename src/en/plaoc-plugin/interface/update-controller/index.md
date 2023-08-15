Here is an English translation:

---
title: UpdateController
category:
  - Interface
tag:
  - UpdateController
---

The control interface for updating the app; inherits from [BaseEvent](../../interface/base-event/index.md). However, this interface cannot be directly accessed. 
It is accessed through the [DwebServiceWorker.updateController](../../shim/dweb-service-worker/index.md) property.


```js
import { dwebServiceWorker } from "@plaoc/plugin"
const updateController = dwebServiceWorker.updateController
```

## Properties

  - download

    Download the app
    Property value is [UpdateControllerPlugin.download()](../../plugin/update-controller/download.md) method

  - pause

    Pause the download
    Property value is [UpdateControllerPlugin.pause()](../../plugin/update-controller/pause.md) method

  - resume

    Resume the download
    Property value is [UpdateControllerPlugin.resume()](../../plugin/update-controller/resume.md) method

  - cancel

    Cancel the download
    Property value is [UpdateControllerPlugin.cancel()](../../plugin/update-controller/cancel.md) method

## Methods

  - [UpdateController.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

    Add an event listener

  - [UpdateController.removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

    Remove an event listener

## Events

  Any event

  Predefined events include:

  - `start`

    Download started
    Pass Event object to listener

  - `end`

    Download ended
    Pass Event object to listener

  - `progress`

    Download progress updated
    Pass progress ratio string to listener

  - `cancel`

    Download canceled  
    Pass Event object to listener

## Example

```js
import { dwebServiceWorker as sw } from "../plugin";

sw.updateController.addEventListener("progress", progress => {
  console.log(parseFloat(progressRate)) 
})
```

## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| download              | ✅      | ✅   | ✅           | X       |
| pause                 | ✅      | ✅   | ✅           | X       |
| resume                | ✅      | ✅   | ✅           | X       |
| cancel                | ✅      | ✅   | ✅           | X       |  
| addEventListener      | ✅      | ✅   | ✅           | X       |
| removeEventListener   | ✅      | ✅   | ✅           | X       |
| event start           | ✅      | ✅   | ✅           | X       |
| event end             | ✅      | ✅   | ✅           | X       |
| event progress        | ✅      | ✅   | ✅           | X       |
| event cancel          | ✅      | ✅   | ✅           | X       |

## Related Links

[Interface](../index.md)