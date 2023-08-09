---
title: BluetoothRemoteGATTServer.connect()
category:
  - Interface
tag:
  - BluetoothRemoteGATTServer
  - connect 
---

BluetoothRemoteGATTServer.connect() connects to the current Bluetooth server;

```js
BluetoothRemoteGATTServer.connect()
```

## 参数

  - none

## 返回值

  Returns a Promise; resolve fulfills a current [BluetoothRemoteGATTServer](./index.md) object

## Example
```js
  import { bluetoothPlugin } from "@plaoc/plugin";

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
      bluetoothRemoteGATTServer.addEventListener(
        "gattserverdisconnected",
        () => {
          bluetoothRemoteGATTServer.connect();
        }
      )
    }
  })
  .catch(err => console.error(err))
```

## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| connect                | ✅       | ✅  | ✅          | X       |

## Related Links
[BluetoothRemoteGATTServer](./index.md)


