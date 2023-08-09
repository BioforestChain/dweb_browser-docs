---
title: BluetoothRemoteGATTCharacteristic.writeValue()
category:
  - Interface
tag:
  - BluetoothRemoteGATTCharacteristic
  - writeValue
---

write a value to the characteristic;

```js
BluetoothRemoteGATTCharacteristic.writeValue(data)
```

## parameters

  - data

    The parameter that needs to be written; the type of the parameter is a [DateView](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView);

## return value

  Retrun a Promise;

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
      const buffer = new ArrayBuffer(16);
      const data = new DataView(buffer);
      return bluetoothRemoteGATTCharacteristic.writeValue(data)
    }
  })
  .catch(err => console.error(err))
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| writeValue           | ✅      | ✅  | ✅          | X      |

## Related Links

[BluetoothRemoteGATTCharacteristic](./index.md)


