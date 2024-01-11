---
title: StateObserver.jsonlines()
category:
  - Plugin
tag:
  - StateObserver
  - jsonlines
---

Implemented the Generator method that monitors the state changes of the plug-in;

```js
StateObserver.jsonlines()
```

## 参数
- none


## 返回值

  an iterator
  The return value of each iteration is an object that implements part of the [State](../state/index.md) interface;


## Example

```js
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.state.onChange(state => {
  // Executed when the state of the system status bar changes
})
(async () => {
  for await (const _info of StatusBarPlugin.state.jsonlines()) {
    // status data can be obtained here
    // You can also implement monitoring through the StateObserver.onChange(listener) method
    // console. log("stateChange", _info);
  }
})();
```

## Platform Compatibility
| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| jsonlines              | ✅      | ✅  | ✅          | X      |
 

## Related Links
[StateObserver](../state-observer/index.md)