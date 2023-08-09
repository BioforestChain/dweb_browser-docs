---
title: StatusBarPlugin.hide()
category:
  - Plugin  
tag:
  - StatusBarPlugin
  - hide
---

Hide the system status bar

```js
StatusBarPlugin.hide() 
```

## Parameters

  - None

## Return Value

  - A Promise object that resolves to null

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.hide()
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| hide     | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)