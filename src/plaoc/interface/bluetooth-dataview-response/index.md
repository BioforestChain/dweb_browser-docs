---
title: BluetoothDataViewResponse
category:
  - Interface
tag:
  - BluetoothDataViewResponse
---

BluetoothDataViewResponse接口继承与[BluetoothResponse](../bluetooth-response/index.md)接口；

## 属性

  -  success

    属性值是一个 boolean;
    属性值是 true；表示执行操作是成功；
    属性值是 false; 表示执行操作失败;

  
  - error

    属性值是一段字符串获undefined;
    属性值是一段字符串表示错误信息；
  
  - data

    属性值是[DataView](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)或undefined;


## 方法

  - 无

## 事件

  - 

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| success      | ✅      | ✅   | ✅          | X       |
| error        | ✅      | ✅   | ✅          | X       |
| data         | ✅      | ✅   | ✅          | X       |

## 相关链接

[BluetoothPlugin](../../plugin/bluetooth/index.md)



