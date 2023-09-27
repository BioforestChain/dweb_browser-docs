---
title: NavigationBarPlugin.getState()
category:
  - Plugin
tag:
  - NavigationBarPlugin
  - getState
---

Get the plugin state value

```js  
NavigationBarPlugin.getState([force_update])
```

## Parameters

- force_update

  Accepts a boolean; whether to force update the state;
  force_update === true will re-read the state from the system; 
  force_update === false will return the cached state data;

## Return
  
  - A Promise object that resolves to an object implementing part of the [State](../state/index.md) interface; see [NavigationBarPlugin.state](./index.md) for details.

## Example

```js
import { NavigationBarPlugin } from "@plaoc/plugins";
const value = NavigationBarPlugin.getState(true)
```

## Platform Support

| API/Method/Event | Android | iOS | Desktop-Dev | Desktop |  
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getState     | ✅      | ✅  | ✅          | X       |

## Related Links  

[NavigationBarPlugin](./index.md)