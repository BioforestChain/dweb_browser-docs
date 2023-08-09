---
title: Bluetooth.open()
category:
  - Plugin
tag:
  - Bluetooth
  - open
---

Opens the Bluetooth adapter.
Opening the Bluetooth adapter is required before accessing any Bluetooth devices.  

```js
Bluetooth.open()
```

## Parameters

- None

## Returns

- A Promise that resolves to a [BluetoohOpenResponse](../../interface/bluetooth-open-response/index.md) object.

## Example

```js
import { bluetooth } from "@plaoc/plugins";

bluetooth.open()
.then(res => {
  if(res.success) {
    // Bluetooth opened successfully
  } else {
    // Failed to open Bluetooth
  }  
})
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| open                  | ✅      | ✅  | ✅          | X       |

## See Also

[Bluetooth](./index.md)