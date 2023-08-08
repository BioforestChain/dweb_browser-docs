---
title: BluetoothPlugin
category:
  - Plugin
tag:
  - BluetoothPlugin
---

BletoothPlugin is a plugin to access Bluetooth functionality

```javascript
import { bluetoothPlugin } from "@plaoc/bluetooth";

bluetooth.open()
```


## Property
  - none


## Method
  - [BluetoothPlugin.open()](./open.md)

    Turn on the Bluetooth device;

  - [BluetoothPlugin.close()](./close.md)

    turn off bluetooth device


  - [BluetoothPlugin.requestAndConnectDevice()](./request-and-connect-device.md)

    Query and connect Bluetooth devices;

## Event

  - none


## Example
```js 
import { bluetoothPlugin } from "@plaoc/plugin";
bluetooth.open();
```


## Platform Compatibility


| Property/Method/Event   | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| open                    | ✅       | ✅  | ✅          | X       |
| close                   | ✅       | ✅  | ✅          | X       |
| requestAndConnectDevice | ✅       | ✅  | ✅          | X       |
 


## Related Links

[Plaoc](../)

