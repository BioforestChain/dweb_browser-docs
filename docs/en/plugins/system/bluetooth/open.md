---
title: BluetoothPlugin.open()
category:
  - Plugin
tag:
  - BluetoothPlugin
  - open
---

Opens the BluetoothPlugin adapter.
Opening the BluetoothPlugin adapter is required before accessing any Bluetooth devices.  

```js
BluetoothPlugin.open()
```

## Parameters

- None

## Returns

- A Promise that resolves to a [BluetoohOpenResponse](../../interface/bluetooth-open-response/index.md) object.

## Example

```js
import { bluetoothPlugin } from "@plaoc/plugins";

bluetoothPlugin.open()
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

[BluetoothPlugin](./index.md)