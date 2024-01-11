---
title: BluetoothRemoteGATTServer.disconnect()
category:
  - Interface
tag:
  - BluetoothRemoteGATTServer
  - disconnect 
---

BluetoothRemoteGATTServer.disconnect() 断开当前蓝牙服务器的连接；

```js
BluetoothRemoteGATTServer.disconnect()
```

## 参数

  - 无

## 返回值

  返回一个 Promise; resolve兑现一个当前的[BluetoothRemoteGATTServer](./index.md)对象

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
      bluetoothRemoteGATTServer.disconnect()
    }
  })
  .catch(err => console.error(err))
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| disconnect   | ✅       | ✅  | ✅          | X       |

## 相关链接
[BluetoothRemoteGATTServer](./index.md)


