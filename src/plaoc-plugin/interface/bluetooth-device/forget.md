---
title: BluetoothDevice.forget()
category:
  - interface
tag:
  - BluetoothDevice
  - forget
---

BluetoothDevice.forget() 用来忽略当前蓝牙设备

```js
BluetoothDevice.forget()
```

## 参数

  - 无

## 返回值

  返回一个 Promise对象，resolve兑现一个[BluetoothForgetResponse](../bluetooth-forget-response/index.md)对象；


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
      const bluetoothDevice = res.data.device;
      return bluetoothDevice
    }
  })
  .then(bluetoothDevice => {
    BluetoothDevice.forget()
  })
  .catch(err => console.error(err))
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| forget       | ✅      | ✅  | ✅           | X       |

## 相关链接

[BluetoothDevice](./index.md)

[BluetoothPlugin](../../plugin/blutto/index.md);


