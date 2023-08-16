---
title: BluetoothRequestAndConnectDeviceResponse
category:
  - Interface
tag:
  - BluetoothRequestAndConnectDeviceResponse
---

BluetoothRequestAndConnectDeviceResponse 是一个Bluetooth.requestAndConnectDevice() 方法返回的Promise，resolve后兑现的数据对象；这个对象继承与[BluetoothResponse](../bluetooth-response/index.md)接口；

## 属性

  -  success

    属性值是一个 boolean;
    属性值是true；表示蓝牙连接成功；
    属性值是false;表示蓝牙拦截失败；

  
  - error

    属性值是一段字符串或undefined;
    属性值是一段字符串表示错误信息；
  
  - data

    属性值是 undefined 或者实现了[BluetoothRemoteGATTServer](../bluetooth-remote-gatt-server/index.md)接口的对象;


## 方法

  - 无

## 事件

  - 无

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| success      | ✅      | ✅   | ✅          | X       |
| error        | ✅      | ✅   | ✅          | X       |
| data         | ✅      | ✅   | ✅          | X       |

## 相关链接

[BluetoothPlugin](../../plugin/bluetooth/index.md)


