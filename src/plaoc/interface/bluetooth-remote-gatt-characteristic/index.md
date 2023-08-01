---
title: BluetoothRemoteGATTCharacteristic
category:
  - Interface
tag:
  - BluetoothRemoteGATTCharacteristic 
---

BluetoothRemoteGATTCharacteristic 描述的是蓝牙设备的某一服务的接口；
BluetoothRemoteGATTCharacteristic 是内置对象，只能够通过 BluetoothRemoteGATTService.getCharacteristic() 返回

```js
;(async () => {
  const bluetoothRemoteGATTCharacteristic = await BluetoothRemoteGATTService.getCharacteristic(uuid)
})();
```

## 属性

  - service

    属性描述的当前特征所属的服务；
    属性的值是类型是 [BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md);

  
  - uuid

    当前特征的标识符；属性值的类型是一个字符串；
 

## 方法

  - [BluetoothRemoteGATTCharacteristic.readValue()](./read-value.md)

    读取当前特征的值；

  - [BluetoothRemoteGATTCharacteristic.writeValue()](./write-value.md)

    向当前特征写入值；
  
  - [BluetoothRemoteGATTCharacteristic.getDescriptor()](./get-descriptor.md)

    获取当前特征的描述;

## 事件

  - characteristicvaluechanged

    当特征的值发生变化的是否触发；

## 示例
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

## 平台兼容性

| 属性/方法/事件   | Android | IOS | Desktop-Dev | Desktop |
|:--------------:|:-------:|:---:|:-----------:|:-------:|
| service        | ✅      | ✅  | ✅          | X      |
| uuid           | ✅      | ✅  | ✅          | X      |
| readValue      | ✅      | ✅  | ✅          | X      |
| writeValue     | ✅      | ✅  | ✅          | X      |
| getDescriptor  | ✅      | ✅  | ✅          | X      |

## 相关链接

[BluetoothPlugin](../../plugin/bluetooth/index.md)

[BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md)


