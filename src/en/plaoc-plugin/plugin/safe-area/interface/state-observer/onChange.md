---
title: StateObserver.onChange()
category:
  - Plugin 
tag:
  - StateObserver
  - onChange
---

Through the StateObserver.onChange() method, a listener can be added, and when the state changes, the new state will be passed to trigger the listener;
The prerequisite is that the monitoring must be turned on


```js
通过StateObserver.onChange(listener)
```

## 参数

  - listener

    Listener, when the state changes, the listener will be triggered, and the new state will be passed to the listener as a parameter;

## 返回值

  A function to cancel listening; the function that executes this return can delete the listener that was added before;

## Example
```js
import { statusBarPlugin } from "@plaoc/plugins";
statusBarPlugin.state.onChange(state => {
  // Executed when the state of the system status bar changes
})

// start monitoring
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
| onChange               | ✅      | ✅  | ✅          | X      |


## Related Links

[StateObserver](../state-observer/index.md)

[StateObserver.*jsonlines()](./jsonlines.md)

