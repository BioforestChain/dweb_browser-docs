---
title: StatusBarPlugin.getOverlay()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getOverlay
---

Check if the system status bar overlaps the APP content

```js 
StatusBarPlugin.getOverlay()
```

## Parameters

  - None

## Return Value

  - A Promise object that resolves to a boolean;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getOverlay()
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getOverlay     | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)