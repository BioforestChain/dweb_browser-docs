---
title: Bluetooth.requestAndConnectDevice()
category:
  - Plugin
tag:
  - Bluetooth
  - requestAndConnectDevice
---

Requests and connects to a Bluetooth device. This must be called after [Bluetooth.open()](./open.md) and before [Bluetooth.close()](./close.md).

```js
Bluetooth.requestAndConnectDevice(options)
```

## Parameters

- options: Options object that must implement the [BluetoothRequestDeviceOptions](../../interface/bluetooth-request-device-options/index.md) interface.

## Returns  

- A Promise that resolves to an object implementing the [BluetoothRequestAndConnectDeviceResponse](../../interface/bluetooth-request-and-connect-device-response/index.md) interface.

## Example

```js
import { bluetoothPlugin } from "@plaoc/plugin";

bluetoothPlugin  
.open()
.then(res => {
  if(res.success) {
    const options = {
      acceptAllDevices: true, 
      optionalServices: ["00003802-0000-1000-8000-00805f9b34fb"],
    };
    return bluetoothPlugin.requestAndConnectDevice(options);
  }
})
.then(res => {
  if(res.success) {
    // Successfully requested and connected to a Bluetooth device
  }
});
```

## Platform Compatibility  

| Property/Method/Event       | Android | iOS | Desktop-Dev | Desktop |
|:--------------------------:|:-------:|:---:|:-----------:|:-------:|
| requestAndConnectDevice    | ✅      | ✅  | ✅          | X       |  

## See Also
[BluetoothPlugin](./index.md)