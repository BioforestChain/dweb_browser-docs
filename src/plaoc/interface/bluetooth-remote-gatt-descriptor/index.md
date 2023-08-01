---
title: BluetoothRemoteGATTDescriptor
category:
  - Interface
tag:
  - BluetoothRemoteGATTDescriptor
---

蓝牙设备某一个服务特征的描述接口；这个接口的实例只能够通过；[BluetoothRemoteGATTCharacteristic.getDescriptor()](../bluetooth-remote-gatt-characteristic/index.md) 返回获取

## 属性

  - characteristic

    当前描述付所属的特征；属性值是一个 [BluetoothRemoteGATTCharacteristic](../bluetooth-remote-gatt-characteristic/index.md) 对象；

    属性值是一个什么数据；概述

  
  - uuid

    当前特征描述对象所属的特征的描述符；
    属性值是一个字符串

## 方法

  - [BluetoothRemoteGATTDescriptor.readValue()](./read-value.md)

    读取描述对象的值

  - [BluetoothRemoteGATTDescriptor.writeValue()](./write-value.md)

    向描述对象写入值；

## 事件

  - 无

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setColor()   | ✅      | ✅  | ✅          | X      |

## 相关链接
[]()


