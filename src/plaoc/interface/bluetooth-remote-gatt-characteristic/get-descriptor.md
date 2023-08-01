---
title: BluetoothRemoteGATTCharacteristic.getDescriptor()
category:
  - Interface
tag:
  - BluetoothRemoteGATTCharacteristic
  - getDescriptor
---

获取特征的描述对象

```js
BluetoothRemoteGATTCharacteristic.getDescriptor()
```

## 参数

  - 无

## 返回值

  返回一个ePromis, resolve兑现一个[BluetoothRemoteGATTDescriptor](../bluetooth-remote-gatt-descriptor/index.md)对象

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

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getDescriptor    | ✅      | ✅  | ✅          | X      |

## 相关链接
[BluetoothRemoteGATTCharacteristic](./index.md)


