---
title: NavigationBarPlugin.getState()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getState 
---

Get the status value of the plugin

```js
NavigationBarPlugin.getState([force_update])
```

## parameters

  - force_update

    The parameter accepts a boolean type of data; whether it is necessary to force the status to be updated;
    force_update === true will re-read status updates from the system;
    force_update === false will return the last cached state data;


## return value

  A Promise object, resolve fulfills an object that implements part of the [State](../state/index.md) interface; for details, refer to the value of the [NavigationBarPlugin.state](./index.md) property;

## Example
```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getState(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getState             | ✅      | ✅  | ✅          | X       |

## Related Links

[NavigationBarPlugin](./index.md)


