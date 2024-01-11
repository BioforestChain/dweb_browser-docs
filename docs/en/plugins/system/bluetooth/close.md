---
title: BluetoothPlugin.close()
category:
  - Plugin
tag:
  - BluetoothPlugin
  - close
---

Closes the BluetoothPlugin adapter.

```js
BluetoothPlugin.close()  
```

## Parameters

- None

## Returns

- A Promise that resolves to a [BluetoothCloseResponse](../../interface/bluetooth-close-response/index.md) object.  

## Example

```js
import { bluetoothPlugin } from "@plaoc/plugins";

bluetoothPlugin.close()
.then(res => {
  if(res.success) {
    // Bluetooth closed successfully
  } else {
    // Failed to close Bluetooth
  }
})
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| close                 | ✅      | ✅  | ✅          | X       |  

## See Also

[BluetoothPlugin](./index.md)