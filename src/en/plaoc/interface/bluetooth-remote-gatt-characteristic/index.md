---
title: BluetoothRemoteGATTCharacteristic
category:
  - Interface
tag:
  - BluetoothRemoteGATTCharacteristic 
---

BluetoothRemoteGATTCharacteristic describes the interface of a certain service of the Bluetooth device, which is a built-in object and can only be obtained through BluetoothRemoteGATTService.getCharacteristic();

```js
;(async () => {
  const bluetoothRemoteGATTCharacteristic 
    = await BluetoothRemoteGATTService.getCharacteristic(uuid)
})();
```

## Property

  - service

    The service to which the current characteristic described by the attribute belongs;
    The value of the attribute is of type [BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md);

  
  - uuid

    The identifier of the current feature; the type of the attribute value is a string;
 

## Method

  - [BluetoothRemoteGATTCharacteristic.readValue()](./read-value.md)

    read the value of the current characteristic;

  - [BluetoothRemoteGATTCharacteristic.writeValue()](./write-value.md)

    Write a value to the current feature;
  
  - [BluetoothRemoteGATTCharacteristic.getDescriptor()](./get-descriptor.md)

    Get the description of the current feature;;

## Event

  - [characteristicvaluechanged](./event-characteristic-value-changed.md)

    Whether to trigger when the value of the feature changes;

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
      const uuid = bluetoothRemoteGATTCharacteristic.service
    }
  })
  .catch(err => console.error(err))
```

## Platform Compatibility

| Property/Method/Event             | Android | IOS | Desktop-Dev | Desktop |
|:---------------------------------:|:-------:|:---:|:-----------:|:-------:|
| service                           | ✅      | ✅  | ✅          | X      |
| uuid                              | ✅      | ✅  | ✅          | X      |
| readValue                         | ✅      | ✅  | ✅          | X      |
| writeValue                        | ✅      | ✅  | ✅          | X      |
| getDescriptor                     | ✅      | ✅  | ✅          | X      |
| event characteristicvaluechanged  | ✅      | ✅  | ✅          | X      |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md)

[BluetoothRemoteGATTService](../bluetooth-remote-gatt-service/index.md)


