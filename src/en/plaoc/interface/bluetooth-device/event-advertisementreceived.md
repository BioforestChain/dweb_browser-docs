---
title: advertisementreceived
category:
  - Interface
tag:
  - event
---

The advertisementreceived event is triggered when the advertisement sent by the Bluetooth device is received;

```js
BluetoothDevice.addEventListener(
  'advertisementreceived',
  listener
)

```


## Event Type

  `advertisementreceived`


## Listener 

  The [BluetoothAdvertisingEvent](../bluetooth-advertising-event/index.md) object will be passed to the listener as a parameter


## Platform Compatibility

| Property/Method/Event           | Android | IOS | Desktop-Dev | Desktop |
|:-------------------------------:|:-------:|:---:|:-----------:|:-------:|
| event advertisementreceived     | ✅      | ✅   | ✅          | X       |


## Related Links

[BluetoothDevice](./index.md)




