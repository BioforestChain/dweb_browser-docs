---
title: SafeAreaPlugin.setState()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - setState
---

Set safe area state

```js
SafeAreaPlugin.setState(state)
```

## Parameters

  - state

    An object implementing partial [State](../../interface/state/index.md) interface;
    Valid properties include: `[overlay]`

## Return Value

  - A Promise object that resolves to null

## Example
```js 
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.setState({overlay: true})
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setState     | ✅      | ✅  | ✅          | X       |

## Related Links

[SafeAreaPlugin](./index.md)