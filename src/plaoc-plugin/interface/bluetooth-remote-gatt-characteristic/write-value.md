---
title: BluetoothRemoteGATTCharacteristic.writeValue()
category:
  - Interface
tag:
  - BluetoothRemoteGATTCharacteristic
  - writeValue
---

向特征写入值；

```js
BluetoothRemoteGATTCharacteristic.writeValue(data)
```

## 参数

  - data

    需要写入的参数；参数的类型是一个[DateView](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView);

## 返回值

  返回一个Promise

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
      const buffer = new ArrayBuffer(16);
      const data = new DataView(buffer);
      return bluetoothRemoteGATTCharacteristic.writeValue(data)
    }
  })
  .catch(err => console.error(err))
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| writeValue   | ✅      | ✅  | ✅          | X      |

## 相关链接
[BluetoothRemoteGATTCharacteristic](./index.md)


