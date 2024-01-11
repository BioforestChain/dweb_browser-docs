---
title: BluetoothResponse
category:
  - Interface
tag:
  - BluetoothResponse
---

是一个Bluetooth相关的API返回的基础数据接口；


## 属性

  -  success

    属性值是一个 boolean;
    用来描述相关的API请求是否成功；

  
  - error

    属性值是一段字符串获undefined;
    属性值是一段字符串表示错误信息；
  
  - data

    属性值可能是任何值;


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

[Bluetooth](../../plugin/bluetooth/index.md)
