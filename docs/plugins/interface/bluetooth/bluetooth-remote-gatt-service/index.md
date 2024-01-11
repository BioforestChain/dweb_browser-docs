---
title: BluetoothRemoteGATTService
category:
  - Interface
tag:
  - BluetoothRemoteGATTService
---

BluetoothRemoteGATTService是蓝牙设备的某个具体服务的接口；
这个是内置的接口，无法直接创建这个接口对象；只能够通过[BluetoothRemoteGATTServer.getPrimaryService()](../bluetooth-remote-gatt-server/get-primary-service.md)方法返回这个对象；

```js
  BluetoothRemoteGATTServer.getPrimaryService("00003802-0000-1000-8000-00805f9b34fb")
```

## 属性

  - device

    描述的当前所属蓝牙设备对象；属性值的类型是[BlutoothDevice](../bluetooth-device/index.md)

  
  - uuid

    当前服务的标识符；属性值的类型是 字符串；

  - isPrimary

    是否是主服务；属性值的类型是boolean;
   

## 方法

  - [BluetoothRemoteGATTService.getCharacteristic()](./get-characteristic.md)

    获取特征对象；

## 事件

  - 无

## 示例
```js
  import { bluetoothPlugin } from "@plaoc/plugins";

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
      // res.data 就是 BluetoothRemoteGATTService 对象；
    }
  })
  .catch(err => console.error(err))
```

## 平台兼容性

| 属性/方法/事件        | Android | IOS | Desktop-Dev | Desktop |
|:-------------------:|:-------:|:---:|:-----------:|:-------:|
| device              | ✅      | ✅  | ✅          | X      |
| uuid                | ✅      | ✅  | ✅          | X      |
| isPrimary           | ✅      | ✅  | ✅          | X      |
| getCharacteristic   | ✅      | ✅  | ✅          | X      |

## 相关链接
[BluetoothPlugin](../../plugin/bluetooth/index.md)

[BluetoothRemoteGATTServer](../bluetooth-remote-gatt-server/index.md)


