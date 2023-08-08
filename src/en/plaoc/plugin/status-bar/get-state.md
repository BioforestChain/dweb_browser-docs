---
title: StatusBarPlugin.getState()
category:
  - Plugin
tag:
  - StatusBarPlugin
  - getState 
---

Get the status value of the plugin;

```js
StatusBarPlugin.getState([force_update])
```

## parameters

  - force_update

    The parameter accepts a boolean type of data;
    whether it is necessary to force the status to be updated;
    force_update === true will re-read status updates from the system;
    force_update === false will return the last cached state data;


## return value

  Return a Promise object, resolve fulfills an object that implements part of the [State](../state/index.md) interface; for details, refer to the value of the [StatusBarPlugin.state](./index.md) property;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.getState(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getState             | ✅      | ✅  | ✅          | X       |

## Related Links

[StatusBarPlugin](./index.md)


