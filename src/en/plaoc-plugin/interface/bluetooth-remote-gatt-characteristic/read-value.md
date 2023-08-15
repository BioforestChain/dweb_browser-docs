---
title: BluetoothRemoteGATTCharacteristic.readValue()
category:
  - Interface
tag:
  - BluetoothRemoteGATTCharacteristic
  - readValue
---

Methods to read characteristic values

```js
BluetoothRemoteGATTCharacteristic.readValue()
```

## parameters

  - none

## return value

  Return a Promise, resolve object a DataView object

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
      return bluetoothRemoteGATTServer
      .getPrimaryService("00003802-0000-1000-8000-00805f9b34fb")
    }
  })
  .then(res => {
    if(res.success){
      const bluetoothRemoteGATTService = res.data;
      bluetoothRemoteGATTService.getCharacteristic("00004a02-0000-1000-8000-00805f9b34fb")
    }
  })
  .then(res => {
    if(res.success){
      const bluetoothRemoteGATTCharacteristic = res.data;
      return bluetoothRemoteGATTCharacteristic.readValue()
    }
  })
  .then(res => {
    if(res.success){
      // value === res.data
    }
  })
  .catch(err => console.error(err))
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| readValue            | ✅      | ✅  | ✅          | X      |

## Related Links
[BluetoothRemoteGATTCharacteristic](./index.md)


