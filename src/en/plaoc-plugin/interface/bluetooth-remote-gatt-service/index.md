---
title: BluetoothRemoteGATTService
category:
  - Interface
tag:
  - BluetoothRemoteGATTService
---

BluetoothRemoteGATTService is the interface of a specific service of the Bluetooth device;
This is a built-in interface, and this interface object cannot be created directly; it can only be returned by [BluetoothRemoteGATTServer.getPrimaryService()](../bluetooth-remote-gatt-server/get-primary-service.md) method;

```js
  BluetoothRemoteGATTServer.getPrimaryService("00003802-0000-1000-8000-00805f9b34fb")
```

## Property

  - device

    Describes the current Bluetooth device object; the type of attribute value is [BlutoothDevice](../bluetooth-device/index.md)

  
  - uuid

    The identifier of the current service; the type of the attribute value is string;

  - isPrimary

    Whether it is the main service; the type of attribute value is boolean;
   

## Method

  - [BluetoothRemoteGATTService.getCharacteristic()](./get-characteristic.md)

    get feature object;

## Event

  - none

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
      const bluetoothRemoteGATTServer = res.data;
      return bluetoothRemoteGATTServer
      .getPrimaryService("00003802-0000-1000-8000-00805f9b34fb")
    }
  })
  .then(res => {
    if(res.success){
      // res.data === BluetoothRemoteGATTService 
    }
  })
  .catch(err => console.error(err))
```

## Platform Compatibility

| Property/Method/Event         | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------------:|:-------:|:---:|:-----------:|:-------:|
| device                        | ✅      | ✅  | ✅          | X      |
| uuid                          | ✅      | ✅  | ✅          | X      |
| isPrimary                     | ✅      | ✅  | ✅          | X      |
| getCharacteristic             | ✅      | ✅  | ✅          | X      |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md)

[BluetoothRemoteGATTServer](../bluetooth-remote-gatt-server/index.md)


