---
title: BluetoothRemoteGATTCharacteristic.getDescriptor()
category:
  - Interface
tag:
  - BluetoothRemoteGATTCharacteristic
  - getDescriptor
---

Get the description object of the feature

```js
BluetoothRemoteGATTCharacteristic.getDescriptor()
```

## parameters

  - none

## return value

  Return an ePromis, resolve to a [BluetoothRemoteGATTDescriptor](../bluetooth-remote-gatt-descriptor/index.md) object

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
      // 成功的查询和连接了蓝牙设备；
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
  .then(res => {
    if(res.success){
      const bluetoothRemoteGATTCharacteristic = res.data;
      return bluetoothRemoteGATTCharacteristic.getDescriptor()
      // 获取了 特征的 标识符；
    }
  })
  .catch(err => console.error(err))
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| getDescriptor        | ✅      | ✅  | ✅          | X      |

## Related Links
[BluetoothRemoteGATTCharacteristic](./index.md)


