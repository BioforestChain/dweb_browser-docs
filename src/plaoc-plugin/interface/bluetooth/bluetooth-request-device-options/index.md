---
title: BluetoothRequestDeviceOptions
category:
  - Interface
tag:
  - BluetoothRequestDeviceOptions 2 
---

BluetoothRequestDeviceOptions是一个选项对象，用来描述查询蓝牙设备的规则接口；

## 属性

  - BluetoothRequestDeviceOptions.filters

    可选属性，用来描述查询蓝牙设备的[过滤规则](https://github.com/WebBluetoothCG/web-bluetooth/blob/main/data-filters-explainer.md);

  - BluetoothRequestDeviceOptions.optionalServices

    可选属性，用来描述可以访问蓝牙设备的那些服务的规则；如果后续访问的服务没有在这里声明，访问的时候会收到错误的消息；
    属性的值是一个有字符串构成的数组；

  - BluetoothRequestDeviceOptions.acceptAllDevices

    可选属性；用来是否可以查询全部的蓝牙设备；
    属性值是一个boolean;

## 方法

  - 无


## 事件

  - 无

## 平台兼容性

| 属性/方法/事件       | Android | IOS | Desktop-Dev | Desktop |
|:------------------:|:-------:|:---:|:-----------:|:-------:|
| filters            | ✅      | ✅   | ✅          | X       |
| optionalServices   | ✅      | ✅   | ✅          | X       |
| acceptAllDevices   | ✅      | ✅   | ✅          | X       |

## 相关链接

[BluetoothPlugin](../../plugin/bluetooth/index.md)