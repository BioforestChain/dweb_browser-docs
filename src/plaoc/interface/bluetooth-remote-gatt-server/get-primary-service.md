---
title: BluetoothRemoteGATTServer.getPrimaryService()
category:
  - Interface
tag:
  - BluetoothRemoteGATTServer
  - getPrimaryService 
---

从蓝牙服务器中查询某一个具体的主服务

```js
 BluetoothRemoteGATTServer.getPrimaryService(uuid)
```

## 参数
  
  - uuid

    需要查询的主服务标识符；参数值的类型是[BluetoothServiceUUID](../bluetooth-service-uuid/index.md)；
  

## 返回值

  返回一个Promise对象；resolve兑现一个[BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md)对象

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
      bluetoothRemoteGATTServer
      .getPrimaryService("00003802-0000-1000-8000-00805f9b34fb")
    }
  })
  .catch(err => console.error(err))
```


## 平台兼容性

| 属性/方法/事件       | Android | IOS | Desktop-Dev | Desktop |
|:------------------:|:-------:|:---:|:-----------:|:-------:|
| getPrimaryService  | ✅      | ✅  | ✅          | X      |

## 相关链接

[BluetoothRemoteGATTServer](./index.md)


