---
title: BluetoothRemoteGATTDescriptor.readValue()
category:
  - Interface
tag:
  - BluetoothRemoteGATTDescriptor
  - readValue 
---

BluetoothRemoteGATTDescriptor.readValue()；
读取蓝牙设备某一服务的描述值；

```js
BluetoothRemoteGATTDescriptor.readValue()
```

## 参数

  - 无

## 返回值

  返回一个Promise, resolve兑现一个[BluetoothDataViewResponse](../bluetooth-dataview-response/index.md);
  

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
  .then(res => {
    if(res.success){
      const bluetoothRemoteGATTCharacteristic = res.data;
      return bluetoothRemoteGATTCharacteristic.getDescriptor()
      // 获取了 特征的 标识符；
    }
  })
  .then(async (res) => {
    if(res.success){
      const bluetoothRemoteGATTDescriptor = res.data;
      const value = await bluetoothRemoteGATTDescriptor.readValue()
    }
  })
  .catch(err => console.error(err))
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| readValue    | ✅      | ✅  | ✅           | X       |

## 相关链接
[BluetoothRemoteGATTDescriptor](./index.md)


