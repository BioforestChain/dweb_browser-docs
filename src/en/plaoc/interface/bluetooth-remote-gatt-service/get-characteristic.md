---
title: BluetoothRemoteGATTService.getCharacteristic()
category:
  - Interface
tag:
  - BluetoothRemoteGATTService
  - getCharacteristic
---

BluetoothRemoteGATTService.getCharacteristic() queries the characteristic object of a certain service in the Bluetooth device;

```js
BluetoothRemoteGATTService.getCharacteristic(uuid)
```

## 参数

  - uuid

    The identifier of the bluetooth characteristic that needs to be queried;
    The type of the parameter value is a string;    

## 返回值

  Returns a Promise, resolves to a [BluetoothRemoteGATTCharacteristic](../bluetooth-remote-gatt-characteristic/index.md) object

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
      const bluetoothRemoteGATTService = res.data;
      bluetoothRemoteGATTService.getCharacteristic("00004a02-0000-1000-8000-00805f9b34fb")
    }
  })
  .catch(err => console.error(err))


```

## Platform Compatibility

| Property/Method/Event         | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------------:|:-------:|:---:|:-----------:|:-------:|
| getCharacteristic             | ✅      | ✅  | ✅          | X      |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md);

[BluetoothRemoteGATTService](./index.md)




