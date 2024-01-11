---
title: BluetoothDevice
category:
  - Interface
tag:
  - BluetoothDevice 
---

Interface used to describe Bluetooth devices;


## Property

  - id

    Unique identifier; attribute value is a string;

  - name

    The name of the device; the property value is a string


  - watchingAdvertisements

    Whether to listen to advertisements; the attribute value is a boolean


## Method

  - [BluetoothDevice.forget()](./forget.md)

    ignore current bluetooth device

  - [BluetoothDevice.watchAdvertisements()](./watch-advertisements.md)

    Start listening to the advertising messages sent by the current Bluetooth device;

## Event

  - [gattserverdisconnected](./event-gattserverdisconnected.md)

    Triggered when the server of the Bluetooth device is disconnected;
     
  - [advertisementreceived](./event-advertisementreceived.md)

    Triggered when the service of the Bluetooth device receives an advertisement message;
    
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
      // 成功的查询和连接了蓝牙设备；
      const bluetoothDevice = res.data.device;
      return bluetoothDevice
    }
  })
  .then(bluetoothDevice => {
    BluetoothDevice.forget()
  })
  .catch(err => console.error(err))

```

## Platform Compatibility

| Property/Method/Event           | Android | IOS | Desktop-Dev | Desktop |
|:-------------------------------:|:-------:|:---:|:-----------:|:-------:|
| id                              | ✅      | ✅   | ✅          | X      |
| name                            | ✅      | ✅   | ✅          | X      |
| watchingAdvertisements          | ✅      | ✅   | ✅          | X      |
| forget                          | ✅      | ✅   | ✅          | X      |
| watchAdvertisements             | ✅      | ✅   | ✅          | X      |
| event gattserverdisconnected    | ✅      | ✅   | ✅          | X      |
| event advertisementreceived     | ✅      | ✅   | ✅          | X      |

## Related Links
[BluetoothPlugin](../../plugin/bluetooth/index.md)


