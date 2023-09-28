---
title: BluetoothRemoteGATTService.getCharacteristic()
category:
  - Interface
tag:
  - BluetoothRemoteGATTService
  - getCharacteristic
---

BluetoothRemoteGATTService.getCharacteristic()查询蓝牙设备中某一个服务的特征对象；

```js
BluetoothRemoteGATTService.getCharacteristic(uuid)
```

## 参数

  - uuid

    需要查询蓝牙特征的标识符；
    参数值的类型是一个字符串；    

## 返回值

  返回一个Promise,resolve兑现一个 [BluetoothRemoteGATTCharacteristic](../bluetooth-remote-gatt-characteristic/index.md)对象 

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
      const bluetoothRemoteGATTService = res.data;
      bluetoothRemoteGATTService.getCharacteristic("00004a02-0000-1000-8000-00805f9b34fb")
    }
  })
  .catch(err => console.error(err))


```

## 平台兼容性

| 属性/方法/事件        | Android | IOS | Desktop-Dev | Desktop |
|:-------------------:|:-------:|:---:|:-----------:|:-------:|
| getCharacteristic   | ✅      | ✅  | ✅          | X      |

## 相关链接

[BluetoothPlugin](../../plugin/bluetooth/index.md);

[BluetoothRemoteGATTService](./index.md)




