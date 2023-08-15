---
title: BluetoothPlugin
category:
  - Plugin
tag:
  - BluetoothPlugin
---

BluetoothPlugin provides access to Bluetooth functionality.

```javascript
import { bluetoothPlugin } from "@plaoc/bluetooth";

bluetooth.open();
```

## Properties

- None

## Methods

  - [BluetoothPlugin.open()](./open.md)

    Opens the Bluetooth adapter.
  
  - [BluetoothPlugin.close()](./close.md)
  
    Closes the Bluetooth adapter.

  - [BluetoothPlugin.requestAndConnectDevice()](./request-and-connect-device.md)
  
    Requests and connects to a Bluetooth device.

## Events  

- None

## Example

```js
import { bluetoothPlugin } from "@plaoc/plugin";
bluetooth.open();
```

## Platform Compatibility

| Property/Method/Event            | Android | iOS | Desktop-Dev | Desktop |
|:-------------------------------:|:-------:|:---:|:-----------:|:-------:|  
| open                            | ✅      | ✅  | ✅          | X       |
| close                           | ✅      | ✅  | ✅          | X       |
| requestAndConnectDevice         | ✅      | ✅  | ✅          | X       |

## See Also

[Plaoc](../../)