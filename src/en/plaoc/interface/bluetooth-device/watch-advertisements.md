---
title: BluetoothDevice.watchAdvertisements()
category:
  - interface
tag:
  - BluetoothDevice
  - watchAdvertisements
---

BluetoothDevice.watchAdvertisements() is used to ignore the current Bluetooth device

```js
BluetoothDevice.watchAdvertisements()
```

## parameters
  - none

## return value

  Return a Promise object, and resolve fulfills a [BluetoothWatchAdvertisementsResponse](../bluetooth-watch-advertisements-response/index.md) object;

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
      // successfully query and connect the bluetooth device;
      const bluetoothDevice = res.data.device;
      return bluetoothDevice
    }
  })
  .then(bluetoothDevice => {
    BluetoothDevice.watchAdvertisements()
  })
  .catch(err => console.error(err))

```

## Platform Compatibility

| Property/Method/Event     | Android | IOS | Desktop-Dev | Desktop |
|:-------------------------:|:-------:|:---:|:-----------:|:-------:|
| watchAdvertisements       | ✅      | ✅  | ✅           | X       |

## Related Links

[BluetoothDevice](./index.md)


