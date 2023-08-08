---
title: BluetoothRemoteGATTCharacteristic
category:
  - Interface
tag:
  - BluetoothRemoteGATTCharacteristic 
---

BluetoothRemoteGATTCharacteristic 描述的是蓝牙设备的某一服务的接口，属于是内置对象，只能够通过 BluetoothRemoteGATTService.getCharacteristic()才能够获取到；

```js
;(async () => {
  const bluetoothRemoteGATTCharacteristic 
    = await BluetoothRemoteGATTService.getCharacteristic(uuid)
})();
```

## Property

  - service

    属性描述的当前特征所属的服务；
    属性的值是类型是 [BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md);

  
  - uuid

    当前特征的标识符；属性值的类型是一个字符串；
 

## Method

  - [BluetoothRemoteGATTCharacteristic.readValue()](./read-value.md)

    读取当前特征的值；

  - [BluetoothRemoteGATTCharacteristic.writeValue()](./write-value.md)

    向当前特征写入值；
  
  - [BluetoothRemoteGATTCharacteristic.getDescriptor()](./get-descriptor.md)

    获取当前特征的描述;

## Event

  - [characteristicvaluechanged](./event-characteristic-value-changed.md)

    当特征的值发生变化的是否触发；

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
      const uuid = bluetoothRemoteGATTCharacteristic.service
      // 获取了 特征的 标识符；
    }
  })
  .catch(err => console.error(err))
```

## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:--------------:|:-------:|:---:|:-----------:|:-------:|
| service        | ✅      | ✅  | ✅          | X      |
| uuid           | ✅      | ✅  | ✅          | X      |
| readValue      | ✅      | ✅  | ✅          | X      |
| writeValue     | ✅      | ✅  | ✅          | X      |
| getDescriptor  | ✅      | ✅  | ✅          | X      |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md)

[BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md)


