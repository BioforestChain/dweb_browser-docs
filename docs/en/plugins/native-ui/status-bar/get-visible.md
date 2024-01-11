---
title: StatusBarPlugin.getVisible()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getVisible
---

Check if the system status bar is visible

```js
StatusBarPlugin.getVisible()
```

## Parameters

  - None

## Return Value

  - A Promise object that resolves to a boolean;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getVisible() 
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getVisible    | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)