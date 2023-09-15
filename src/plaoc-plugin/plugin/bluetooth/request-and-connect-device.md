---
title: BluetoothPlugin.requestAndConnectDevice()
category:
  - Plugin
tag:
  - BluetoothPlugin
  - requestAndConnectDevice
---

BluetoothPlugin.requestAndConnectDevice()是一个实现了对蓝牙设备的查询和连接的接口；这个请求必须在[Bluetooth.open()](./open.md)之后[Bluetooth.close()](./close.md)之前执行;

```js
BluetoothPlugin.requestAndConnectDevice(options)

```

## 参数

  - options

    是一个选项对象；这个对象必须是实现了[BluetoothRequestDeviceOptions](../../interface/bluetooth-request-device-options/index.md)接口的对象；

## 返回值

  - 返回一个Promise, resolve兑现一个实现了[BluetoothRequestAndConnectDeviceResponse](../../interface/bluetooth-request-and-connect-device-response/index.md)接口的对象；

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
    }
  })
```

## 平台兼容性

| 属性/方法/事件              | Android | IOS | Desktop-Dev | Desktop |
|:-------------------------:|:-------:|:---:|:-----------:|:-------:|
| requestAndConnectDevice   | ✅      | ✅  | ✅          | X      |

## 相关链接
[BluetoothPlugin](./index.md)
