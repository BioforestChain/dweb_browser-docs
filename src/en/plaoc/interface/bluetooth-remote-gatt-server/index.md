---
title: BluetoothRemoteGATTServer
category:
  - Interface
tag:
  - BluetoothRemoteGATTServer
---

The BluetoothRemoteGATTServer interface is used to describe the server object provided by the connected Bluetooth device;


## Property

  - device

    The attribute value is an object of type [BluetoothDevice](../bluetooth-device/index.md);

  - connected

    Whether the server of the Bluetooth device is connected;
    The attribute value is boolean; the attribute value is true means that the service of the current Bluetooth device has been connected
    If the attribute value is false, it means that the service of the current Bluetooth device is not connected;


## Method

  - [BluetoothRemoteGATTServer.connect()](./connect.md)

    Connect to the bluetooth server

  - [BluetoothRemoteGATTServer.disconnect()](./disconnect.md)

    Disconnect from the Bluetooth server;

  - [BluetoothRemoteGATTServer.getPrimaryService()](./get-primary-service.md)

    Query the main service from the bluetooth server;;

## Event

  - none

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
    }
  })
  .catch(err => console.error(err))
```

## Platform Compatibility

| Property/Method/Event       | Android | IOS | Desktop-Dev | Desktop |
|:---------------------------:|:-------:|:---:|:-----------:|:-------:|
| device                      | ✅       | ✅  | ✅          | X       |
| connected                   | ✅       | ✅  | ✅          | X       |
| connect                     | ✅       | ✅  | ✅          | X       |
| disconnect                  | ✅       | ✅  | ✅          | X       |
| getPrimaryService           | ✅       | ✅  | ✅          | X       |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md)


