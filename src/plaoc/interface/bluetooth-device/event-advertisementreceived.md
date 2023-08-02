---
title: advertisementreceived
category:
  - Interface
tag:
  - event
---

当接受到蓝牙设备发送的广告后触发 advertisementreceived事件；

```js
BluetoothDevice.addEventListener(
  'advertisementreceived',
  listener
)

```


## 事件类型

  `advertisementreceived`


## 监听器 

  会把[BluetoothAdvertisingEvent](../bluetooth-advertising-event/index.md)对象作为参数传递给监听器


## 平台兼容性

| 属性/方法/事件            | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| advertisementreceived  | ✅      | ✅   | ✅          | X       |


## 相关链接

[BluetoothDevice](./index.md)




