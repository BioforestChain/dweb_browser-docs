---
title: BluetoothOpenResponse
category:
  - Interface
tag:
  - BluetoothOpenResponse
---

BluetoothOpenResponse 是一个Bluetooth.open() 方法返回的promise，resolve后兑现的数据对象；这个对象继承与[BluetoothResponse](../bluetooth-response/index.md)接口；

## 属性

  -  success

    属性值是一个 boolean;
    属性值是 true；表示打开蓝牙是成功；
    属性值是 false; 表示打开蓝牙失败;

  
  - error

    属性值是一段字符串获undefined;
    属性值是一段字符串表示错误信息；
  
  - data

    属性值是 undefined;


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


