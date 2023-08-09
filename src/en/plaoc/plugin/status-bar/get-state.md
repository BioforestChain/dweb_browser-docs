---
title: StatusBarPlugin.getState()
category:
  - Plugin
tag:
  - StatusBarPlugin 
  - getState
---

Get the plugin state value

```js
StatusBarPlugin.getState([force_update]) 
```

## Parameters

  - force_update

    Accepts a boolean data; whether to force update the state;
    force_update === true will read the state from the system again;
    force_update === false will return the cached state data last time;


## Return Value

  - A Promise object that resolves to an object implementing partial [State](../state/index.md) interface; see details in [StatusBarPlugin.state](./index.md) attribute value;  

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getState(true)
```


## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:| 
| getState     | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)