---
title: BluetoothRequestAndConnectDeviceResponse
category:
  - Interface
tag:
  - BluetoothRequestAndConnectDeviceResponse
---

BluetoothRequestAndConnectDeviceResponse is a Promise returned by the Bluetooth.requestAndConnectDevice() method, a data object that is cashed after resolve; this object inherits the [BluetoothResponse](../bluetooth-response/index.md) interface;

## Property

  -  success

    The attribute value is a boolean;
    The attribute value is true; it means the Bluetooth connection is successful;
    The attribute value is false; it means that the Bluetooth interception failed;

  
  - error

    The attribute value is a string or undefined;
    The attribute value is a string representing the error message
  
  - data

    The attribute value is undefined or an object that implements the [BluetoothRemoteGATTServer](../bluetooth-remote-gatt-server/index.md) interface;


## Method

  - none

## Event

  - none

## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| success                | ✅      | ✅   | ✅          | X       |
| error                  | ✅      | ✅   | ✅          | X       |
| data                   | ✅      | ✅   | ✅          | X       |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md)



