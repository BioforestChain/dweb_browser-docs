---
title: BluetoothDevice.removeEventLIstener()
category:
  - Interface
tag:
  - BluetoothDevice
  - removeEventLIstener
---

向 BluetoothDevice 添加事件监听器的方法；
removeEventListener 只能够移除通过 addEventListener 添加handler;

```js
BluetoothDevice.removeEventLIstener(eventType, handler)
```

## 参数
  
  - eventType

    监听的类型；参数值的数据类型是一个字符串；合法的值包括：\["gattserverdisconnected","advertisementreceived"\]

  - handler

    监听器函数；合法的函数类型包括: 
    [BluetoothDeviceGattserverdisconnectedListener](../bluetooth-device-gattserverdisconnected-listener/index.md);
    或
    [BluetoothDeviceAdvertisementreceivedListener](../bluetooth-device-advettisementtreceived-listener/index.md)

    

## 返回值

  - 无

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
    const listener = event => {
      // 蓝牙设备服务器已经断开了连接；
      bluetoothDevice.removeEventListener(
        "gattserverdisconnected",
        listener
      )

    }
    bluetoothDevice.addEventListener(
      "gattserverdisconnected", 
      listener
    )
  })
  .catch(err => console.error(err))

```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| eventType    | ✅      | ✅  | ✅           | X       |
| handler      | ✅      | ✅  | ✅           | X       |

## 相关链接
[BluetoothDevice](./index.md)




