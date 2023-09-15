---
title: MWebviewPlugin.closeApp()
category:
  - Plugin
tag:
  - MWebviewPlugin 
  - closeApp
---

Closes the entire app frontend but keeps services running.

```js
MWebviewPlugin.closeApp()  
```

## Parameters

- None

## Returns  

A Promise that resolves to a boolean.
Resolves to true if closed successfully, false if failed.

## Example

```js
import { mwebviewPlugin } from "@plaoc/plugins";

mwebviewPlugin.closeApp();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |  
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| closeApp              | ✅      | ✅  | ✅          | X       |

## See Also

[MWebviewPlugin](./index.md)