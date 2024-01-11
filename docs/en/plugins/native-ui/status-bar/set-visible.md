---
title: StatusBarPlugin.setVisible()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setVisible
---

Set whether the system status bar is visible

```js
StatusBarPlugin.setVisible(b)
```

## Parameters

  - b

    Accepts a boolean;


## Return Value

  - A Promise object that resolves to null

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setVisible(true)
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setVisible   | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)