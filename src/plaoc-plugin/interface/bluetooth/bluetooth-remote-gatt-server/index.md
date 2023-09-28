---
title: BluetoothRemoteGATTServer
category:
  - Interface
tag:
  - BluetoothRemoteGATTServer
---

BluetoothRemoteGATTServer接口是用来描述，连接的蓝牙设备所提供的服务器对象；


## 属性

  - device

    属性值是[BluetoothDevice](../bluetooth-device/index.md)类型的对象；

  - connected

    蓝牙设备的服务器是否已经连接；
    属性值是 boolean; 属性值是true表示当前蓝牙设备的服务已经连接
    属性值是false表示当前蓝牙设备的服务没有连接；


## 方法

  - [BluetoothRemoteGATTServer.connect()](./connect.md)

    连接蓝牙服务器；

  - [BluetoothRemoteGATTServer.disconnect()](./disconnect.md)

    断开蓝牙服务器的连接；

  - [BluetoothRemoteGATTServer.getPrimaryService()](./get-primary-service.md)

    从蓝牙服务器中查询主服务;

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
    }
  })
  .catch(err => console.error(err))
```

## 平台兼容性

| 属性/方法/事件      | Android | IOS | Desktop-Dev | Desktop |
|:-----------------:|:-------:|:---:|:-----------:|:-------:|
| device            | ✅       | ✅  | ✅          | X       |
| connected         | ✅       | ✅  | ✅          | X       |
| connect           | ✅       | ✅  | ✅          | X       |
| disconnect        | ✅       | ✅  | ✅          | X       |
| getPrimaryService | ✅       | ✅  | ✅          | X       |

## 相关链接

[BluetoothPlugin](../../plugin/bluetooth/index.md)


