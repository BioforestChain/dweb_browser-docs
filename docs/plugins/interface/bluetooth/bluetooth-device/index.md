---
title: BluetoothDevice
category:
  - Interface
tag:
  - BluetoothDevice 
---

用来描述蓝牙设备的接口;


## 属性

  - id

    唯一标识符；属性值是一个字符串；

  - name

    设备的名称；属性值是一个字符串


  - watchingAdvertisements

    是否监听广告；属性值是一个boolean

  

## 方法

  - [BluetoothDevice.forget()](./forget.md)

    忽略当前蓝牙设备

  - [BluetoothDevice.watchAdvertisements()](./watch-advertisements.md)

    开始监听当前蓝牙设备发出的广告消息；

## 事件

  - [gattserverdisconnected](./event-gattserverdisconnected.md)

    当蓝牙设备的服务器断开连接的时候触发；
     
  - [advertisementreceived](./event-advertisementreceived.md)

    当蓝牙设备的服务接受到广告消息的时候触发；
    
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

| 属性/方法/事件            | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| id                      | ✅      | ✅   | ✅          | X      |
| name                    | ✅      | ✅   | ✅          | X      |
| watchingAdvertisements  | ✅      | ✅   | ✅          | X      |
| forget                  | ✅      | ✅   | ✅          | X      |
| watchAdvertisements     | ✅      | ✅   | ✅          | X      |
| event gattserverdisconnected  | ✅      | ✅   | ✅          | X      |
| event advertisementreceived   | ✅      | ✅   | ✅          | X      |

## 相关链接
[BluetoothPlugin](../../plugin/bluetooth/index.md)

