---
title: BluetoothPlugin.open()
category:
  - Plugin
tag:
  - BluetoothPlugin
  - open
---

打开蓝牙设备；
打开蓝牙设备是访问蓝牙设备的前提；

```js
BluetoothPlugin.open()
```

## 参数

  - 无

## 返回值

  - 一个Promise对象，resolve兑现[BluetoohOpenResponse](../../interface/bluetooth-open-response/index.md)对象


## 示例
```js
import { bluetoothPlugin } from "@plaoc/plugins";
bluetoothPlugin.open()
.then(
  res => {
    if(res.success){
      // 打开蓝牙成功
    }else{
      // 打开蓝牙失败；
    }
  }
)
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| open         | ✅      | ✅   | ✅          | X       |

## 相关链接

[BluetoothPlugin](./index.md)
