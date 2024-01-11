---
title: StatusBarPlugin.setOverlay()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setOverlay
---

Set whether the system status bar overlaps the APP content  

```js
StatusBarPlugin.setOverlay(b)
```

## Parameters

  - b

    Accepts a boolean;


## Return Value

  - A Promise object that resolves to null

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setOverlay(true) 
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setOverlay   | ✅      | ✅  | ✅          | X       |

## Related Links  

[StatusBarPlugin](./index.md)