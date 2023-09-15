---
title: BluetoothRemoteGATTServer.disconnect()
category:
  - Interface
tag:
  - BluetoothRemoteGATTServer
  - disconnect 
---

BluetoothRemoteGATTServer.disconnect() disconnects the current Bluetooth server;

```js
BluetoothRemoteGATTServer.disconnect()
```

## 参数

  - none

## 返回值

  Returns a Promise; resolve fulfills a current [BluetoothRemoteGATTServer](./index.md) object

## Example
```js
  import { bluetoothPlugin } from "@plaoc/plugins";

  bluetoothPlugin
  .open()
  .then(res => {
    if(res.success){
      const options = {
        acceptAllDevices: true,
        optionalServices: ["00003802-0000-1000-8000-00805f9b34fb"],
      }
      return bluetoothPlugin.requestAndConnectDevice(options)
    }
  })
  .then(res => {
    if(res.success){
      const bluetoothRemoteGATTServer = res.data;
      bluetoothRemoteGATTServer.disconnect()
    }
  })
  .catch(err => console.error(err))
```

## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| disconnect             | ✅       | ✅  | ✅          | X       |

## Related Links
[BluetoothRemoteGATTServer](./index.md)


