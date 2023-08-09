---
title: BluetoothRemoteGATTServer.getPrimaryService()
category:
  - Interface
tag:
  - BluetoothRemoteGATTServer
  - getPrimaryService 
---

Query a specific main service from the Bluetooth server

```js
 BluetoothRemoteGATTServer.getPrimaryService(uuid)
```

## 参数
  
  - uuid

    The main service identifier to be queried; the type of the parameter value is [BluetoothServiceUUID](../bluetooth-service-uuid/index.md);
  

## 返回值

  Returns a Promise object; resolve honors a [BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md) object

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
      bluetoothRemoteGATTServer
      .getPrimaryService("00003802-0000-1000-8000-00805f9b34fb")
    }
  })
  .catch(err => console.error(err))
```


## Platform Compatibility

| Property/Method/Event        | Android | IOS | Desktop-Dev | Desktop |
|:----------------------------:|:-------:|:---:|:-----------:|:-------:|
| getPrimaryService            | ✅      | ✅  | ✅          | X      |

## Related Links

[BluetoothRemoteGATTServer](./index.md)


