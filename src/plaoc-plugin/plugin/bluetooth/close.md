---
title: BluetoothPlugin.close()
category:
  - Plugin
tag:
  - BluetoothPlugin
  - open
---

关闭蓝牙设备；

```js
BluetoothPlugin.close()
```


## 参数

  - 无


## 返回值

  - 一个Promise对象，resolve兑现一个[BluetoothCloseResponse](../../interface/bluetooth-close-response/index.md)对象；

## 示例

```js
import { bluetoothPlugin } from "@plaoc/plugins";
bluetoothPlugin.close()
.then(
  res => {
    if(res.success){
      // 关闭蓝牙成功
    }else{
      // 关闭蓝牙失败；
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

