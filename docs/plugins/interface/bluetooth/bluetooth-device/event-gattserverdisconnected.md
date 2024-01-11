---
title: gattserverdisconnected
category:
  - Interface
tag:
  - event
---

当蓝牙设备服务器被断开连接后触发gattserverdisconnected事件；

```js
BluetoothDevice.addEventListener(
  'gattserverdisconnected',
  listener
)

```


## 事件类型

  `gattserverdisconnected`


## 监听器 

  会把 [GattServerDisconnectedEvent](../bluetooth-gett-server-disconnected-event/index.md)对象作为参数传递给监听器；
 


## 平台兼容性

| 属性/方法/事件                  | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------------:|:-------:|:---:|:-----------:|:-------:|
| event gattserverdisconnected  | ✅      | ✅   | ✅          | X       |


## 相关链接

[BluetoothDevice](./index.md)




