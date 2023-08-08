---
title: Bluetooth.requestAndConnectDevice()
category:
  - Plugin
tag:
  - Bluetooth
  - requestAndConnectDevice
---

Bluetooth.requestAndConnectDevice() is an interface that realizes the query and connection of Bluetooth devices; this request must be [Bluetooth.close()](./close. md) executed before;

```js
Bluetooth.requestAndConnectDevice(options)

```

## parameters

  - options

    is an option object; this object must be an object that implements the [BluetoothRequestDeviceOptions](../../interface/bluetooth-request-device-options/index.md) interface;

## return value

  Return a Promise, and resolve fulfills an object that implements the [BluetoothRequestAndConnectDeviceResponse](../../interface/bluetooth-request-and-connect-device-response/index.md) interface;

## Example
```js
  import { bluetoothPlugin } from "@plaoc/plugin";

  bluetoothPlugin
  .open()
  .then(res => {
    if(res.success){
      const options = {
        acceptAllDevices: true,
        optionalServices: ["00003802-0000-1000-8000-00805f9b34fb"],
      }
      return bluetoothPlugin.requestAndConnectDevice(options)
    }
  })
  .then(res => {
    if(res.success){
      // successfully query and connect the bluetooth device;
    }
  })
```

## Platform Compatibility

| Property/Method/Event     | Android | IOS | Desktop-Dev | Desktop |
|:-------------------------:|:-------:|:---:|:-----------:|:-------:|
| requestAndConnectDevice   | ✅      | ✅  | ✅          | X      |

## Related Links

[BluetoothPlugin](./index.md)
