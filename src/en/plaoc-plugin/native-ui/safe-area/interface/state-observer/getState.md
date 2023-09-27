---
title: StateObserver.getState()
category:
  - Plugin
tag:
  - StateObserver
  - getState 
---

Get the status value of the plugin

```js
StateObserver.getState([force_update])
```

## 参数

  - force_update

    The parameter accepts a boolean type of data; whether it is necessary to force the status to be updated;
    force_update === true will re-read status updates from the system;
    force_update === false will return the last cached state data;


## 返回值

  A Promise object, resolve fulfills an object that implements part of the [State](../state/index.md) interface;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
const value = statusBarPlugin.state.getState(true)
```


## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| getState               | ✅      | ✅  | ✅          | X       |

## Related Links

[StateObserver](../state-observer/index.md)


