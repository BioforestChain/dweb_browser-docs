---
title: gattserverdisconnected
category:
  - Interface
tag:
  - event
---

The gattserverdisconnected event is triggered when the Bluetooth device server is disconnected;


```js
BluetoothDevice.addEventListener(
  'gattserverdisconnected',
  listener
)

```


## Event Type

  `gattserverdisconnected`


## Listener 

  The [GattServerDisconnectedEvent](../bluetooth-gett-server-disconnected-event/index.md) object will be passed to the listener as a parameter;
 


## Platform Compatibility

| Property/Method/Event         | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------------:|:-------:|:---:|:-----------:|:-------:|
| event gattserverdisconnected  | ✅      | ✅   | ✅          | X       |


## Related Links

[BluetoothDevice](./index.md)




