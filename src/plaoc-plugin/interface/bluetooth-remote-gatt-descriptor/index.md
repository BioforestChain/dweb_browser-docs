---
title: BluetoothRemoteGATTDescriptor
category:
  - Interface
tag:
  - BluetoothRemoteGATTDescriptor
---

蓝牙设备某一个服务特征的描述接口；这个接口的实例只能够通过；[BluetoothRemoteGATTCharacteristic.getDescriptor()](../bluetooth-remote-gatt-characteristic/index.md) 返回获取

## 属性

  - characteristic

    当前描述付所属的特征；属性值是一个 [BluetoothRemoteGATTCharacteristic](../bluetooth-remote-gatt-characteristic/index.md) 对象；

  
  - uuid

    当前特征描述对象所属的特征的描述符；
    属性值是一个字符串

## 方法

  - [BluetoothRemoteGATTDescriptor.readValue()](./read-value.md)

    读取描述对象的值

  - [BluetoothRemoteGATTDescriptor.writeValue()](./write-value.md)

    向描述对象写入值；

## 事件

  - 无

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
      return bluetoothRemoteGATTCharacteristic.getDescriptor()
      // 获取了 特征的 标识符；
    }
  })
  .catch(err => console.error(err))
```

## 平台兼容性

| 属性/方法/事件     | Android | IOS | Desktop-Dev | Desktop |
|:----------------:|:-------:|:---:|:-----------:|:-------:|
| characteristic   | ✅      | ✅  | ✅           | X       |
| uuid             | ✅      | ✅  | ✅           | X       |
| readValue        | ✅      | ✅  | ✅           | X       |
| writeValue       | ✅      | ✅  | ✅           | X       |

## 相关链接

[BluetoothPlugin](../../plugin/bluetooth/index.md)


[BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md);

