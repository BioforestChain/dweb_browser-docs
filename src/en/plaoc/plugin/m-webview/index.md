---
title: MWebviewPlugin
category:
  - Plugin
tag:
  - MWebviewPlugin
---

Multiple webview plugins;

```js
import { mwebviewPlugin } from "@plaoc/plugin";
```

## Property

  - none

## Method

  - [MWebviewPlugin.open()](./open.md)

    Open a new webview


  - [MWebviewPlugin.close()](./close.md)

    Destroy the specified webview


  - [MWebviewPlugin.activate()](./activate.md)

    activate webview


  - [MWebviewPlugin.closeApp()](./close-app.md)

    Close the entire application, command to close the front end, and the service will not be closed

## Event

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| open                 | ✅      | ✅  | ✅          | X       |
| close                | ✅      | ✅  | ✅          | X       |
| activate             | ✅      | ✅  | ✅          | X       |
| closeApp             | ✅      | ✅  | ✅          | X       |

## Related Links

[Plaoc](../index.md)


