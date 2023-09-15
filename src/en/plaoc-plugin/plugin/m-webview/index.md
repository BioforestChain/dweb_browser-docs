---
title: MWebviewPlugin
category:
  - Plugin
tag:
  - MWebviewPlugin 
---

Multi webview plugin.

```js
import { mwebviewPlugin } from "@plaoc/plugins";
```

## Properties

- None

## Methods

  - [MWebviewPlugin.open()](./open.md)

    Opens a new webview

  - [MWebviewPlugin.close()](./close.md)

    Destroys the specified webview

  - [MWebviewPlugin.activate()](./activate.md)
  
    Activates the webview

  - [MWebviewPlugin.closeApp()](./close-app.md)

    Closes the entire app frontend

## Events

- None

## Platform Compatibility  

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| open                  | ✅      | ✅  | ✅          | X       |
| close                 | ✅      | ✅  | ✅          | X       |  
| activate              | ✅      | ✅  | ✅          | X       |
| closeApp              | ✅      | ✅  | ✅          | X       |

## See Also

[Plaoc](../../)