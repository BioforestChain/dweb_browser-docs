---
title: BluetoothRemoteGATTDescriptor.readValue()
category:
  - Interface
tag:
  - BluetoothRemoteGATTDescriptor
  - readValue 
---

BluetoothRemoteGATTDescriptor. readValue();
Read the description value of a certain service of the Bluetooth device;

```js
BluetoothRemoteGATTDescriptor.readValue()
```

## 参数

  - none

## 返回值

  Return a Promise, resolve to fulfill a [BluetoothDataViewResponse](../bluetooth-dataview-response/index.md);
  

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
      // successfully query and connect the bluetooth device;
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
      return bluetoothRemoteGATTCharacteristic.getDescriptor()
    }
  })
  .then(async (res) => {
    if(res.success){
      const bluetoothRemoteGATTDescriptor = res.data;
      const value = await bluetoothRemoteGATTDescriptor.readValue()
    }
  })
  .catch(err => console.error(err))
```


## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| readValue              | ✅      | ✅  | ✅           | X       |

## Related Links
[BluetoothRemoteGATTDescriptor](./index.md)


