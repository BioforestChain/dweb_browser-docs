---
title: SafeAreaPlugin.getState()
category:
  - Plugin
tag:
  - SafeAreaPlugin
  - getState 
---

Get the status of the safe zone;;

```js
SafeAreaPlugin.getState([force_update])
```

## parameters

  - force_update

    The parameter accepts a boolean type of data; whether it is necessary to force the status to be updated;
    force_update === true will re-read status updates from the system;
    force_update === false wil


## return value

  A Promise object, resolve fulfills an object that implements part of the [State](../state/index.md) interface; for details, refer to the value of the [SafeAreaPlugin.state](./index.md) property;

  

## Example
```js
import { SafeAreaPlugin } from "@plaoc/plugins";
const value = SafeAreaPlugin.getState(true)
```


## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getState             | ✅      | ✅  | ✅          | X       |

## Related Links

[SafeAreaPlugin](./index.md)


