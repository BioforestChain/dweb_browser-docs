---
title: BluetoothPlugin
category:
  - Plugin
tag:
  - BluetoothPlugin
---

Bletooth 是一个访问蓝牙功能的插件

```javascript
import { bluetoothPlugin } from "@plaoc/bluetooth";

bluetooth.open()
```


## 属性
  - 无


## 方法
  - [BluetoothPlugin.open()](./open.md)

    打开蓝牙设备；

  - [BluetoothPlugin.close()](./close.md)

    关闭蓝牙设备


  - [BluetoothPlugin.requestAndConnectDevice()](./request-and-connect-device.md)

    查询和连接蓝牙设备；

## 事件

  - 无


## 示例
```js 
import { bluetoothPlugin } from "@plaoc/plugin";
bluetoothPlugin.open();
```


## 平台兼容性


| 属性/方法/事件            | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| open                    | ✅      | ✅  | ✅          | X       |
| close                   | ✅      | ✅  | ✅          | X       |
| requestAndConnectDevice | ✅      | ✅  | ✅          | X       |
 


## 相关链接

[Plaoc](../)

