---
title: BluetoothRemoteGATTDescriptor
category:
  - Interface
tag:
  - BluetoothRemoteGATTDescriptor
---

The description interface of a certain service characteristic of the Bluetooth device; the instance of this interface can only be obtained through [BluetoothRemoteGATTCharacteristic.getDescriptor()](../bluetooth-remote-gatt-characteristic/index.md)

## Property

  - characteristic

    The current description belongs to the characteristic; the attribute value is a [BluetoothRemoteGATTCharacteristic](../bluetooth-remote-gatt-characteristic/index.md) object;

  
  - uuid

    The current feature describes the descriptor of the feature to which the object belongs;
    The attribute value is a string

## Method

  - [BluetoothRemoteGATTDescriptor.readValue()](./read-value.md)

    Read the value of the description object

  - [BluetoothRemoteGATTDescriptor.writeValue()](./write-value.md)

    Write a value to the description object;

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

| Property/Method/Event      | Android | IOS | Desktop-Dev | Desktop |
|:--------------------------:|:-------:|:---:|:-----------:|:-------:|
| characteristic             | ✅      | ✅  | ✅           | X       |
| uuid                       | ✅      | ✅  | ✅           | X       |
| readValue                  | ✅      | ✅  | ✅           | X       |
| writeValue                 | ✅      | ✅  | ✅           | X       |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md)


[BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md);

