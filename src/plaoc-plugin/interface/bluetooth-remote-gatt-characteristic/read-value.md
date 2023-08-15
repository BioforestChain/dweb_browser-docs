---
title: BluetoothRemoteGATTCharacteristic.readValue()
category:
  - Interface
tag:
  - BluetoothRemoteGATTCharacteristic
  - readValue
---

读取特征值的方法

```js
BluetoothRemoteGATTCharacteristic.readValue()
```

## 参数

  - 无

## 返回值

  返回一个Promise, resolve对象一个DataView对象

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
      return bluetoothRemoteGATTCharacteristic.readValue()
    }
  })
  .then(res => {
    if(res.success){
      // value === res.data
    }
  })
  .catch(err => console.error(err))
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| readValue    | ✅      | ✅  | ✅          | X      |

## 相关链接
[BluetoothRemoteGATTCharacteristic](./index.md)


