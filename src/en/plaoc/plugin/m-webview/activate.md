---
title: MWebviewPlugin.activate()
category:
  - Plugin 
tag:
  - MWebviewPlugin
  - activate
---
  
Activates the mwebview.

```js  
MWebviewPlugin.activate()
```

## Parameters

- None

## Returns

A Promise that resolves to a boolean.
Resolves to true if activated successfully, false if failed.

## Example

```js
import { mwebviewPlugin } from "@plaoc/plugin";

mwebviewPlugin.activate();
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| activate              | ✅      | ✅  | ✅          | X       |

## See Also

[MWebviewPlugin](./index.md)