---
title: StatusBarPlugin.setState()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - setState
---

Set system status bar state  

```js
StatusBarPlugin.setState(state)
```

## Parameters

  - state

    An object implementing partial [State](../../interface/state/index.md) interface;
    Valid properties include: `[overlay, visible, color, style]`

## Return Value

  - A Promise object that resolves to null

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.setState({overlay:true})
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setState     | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)