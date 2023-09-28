---
title: BluetoothRemoteGATTDescriptor.writeValue()
category:
  - Interface
tag:
  - BluetoothRemoteGATTDescriptor
  - writeValue 
---

BluetoothRemoteGATTDescriptor.writeValue();
Write the value described by a certain service to the Bluetooth device;

```js
BluetoothRemoteGATTDescriptor.writeValue(data)
```

## 参数

  - data

    The data to be written; the data type of the parameter is [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

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
      // 成功的查询和连接了蓝牙设备；
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
      // 获取了 特征的 标识符；
    }
  })
  .then(async (res) => {
    if(res.success){
      const bluetoothRemoteGATTDescriptor = res.data;
      const value = await bluetoothRemoteGATTDescriptor.writeValue(new ArrayBuffer(8))
    }
  })
  .catch(err => console.error(err))
```


## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| writeValue             | ✅      | ✅  | ✅           | X       |

## Related Links

[BluetoothRemoteGATTDescriptor](./index.md)


