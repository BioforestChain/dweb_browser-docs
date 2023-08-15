---
title: UpdateControllerPlugin
category: 
  - Plugin
tag:
  - UpdateControllerPlugin
---

The control plugin for updating the app; however, this plugin cannot be accessed directly. 
It is accessed through the [DwebServiceWorkerPlugin](../dweb-service-worker/index.md) plugin.

```js
import { dwebServiceWorkerPlugin } from "@plaoc/plugin";
const updateControllerPlugin = dwebServiceWorkerPlugin.updateController
```

## Properties

  - None

## Methods

  - [UpdateControllerPlugin.download()](./download.md)

    Download the app

  - [UpdateControllerPlugin.pause()](./pause.md)

    Pause the download


  - [UpdateControllerPlugin.resume()](./resume.md)

    Resume the download

  - [UpdateControllerPlugin.cancel()](./cancel.md)

    Cancel the download

  - [UpdateControllerPlugin.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

    Add an event listener

  - [UpdateControllerPlugin.removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

    Remove an event listener

## Events

  Any event

  Predefined events include:

  - `start`

    Download started
    Pass an Event object to the event listener

  - `end`  

    Download ended
    Pass an Event object to the event listener

  - `progress`

    Download progress updated
    Pass a progress ratio string to the event listener

  - `cancel`

    Download canceled
    Pass an Event object to the event listener

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

[Plaoc](../../)