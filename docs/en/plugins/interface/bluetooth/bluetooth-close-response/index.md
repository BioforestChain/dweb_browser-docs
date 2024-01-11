---
title: BluetoothCloseResponse
category:
  - Interface
tag:
  - BluetoothCloseResponse
---

BluetoothCloseResponse is a promise returned by the Bluetooth.open() method, a data object that is cashed after resolve; this object inherits the interface of [BluetoothResponse](../bluetooth-response/index.md);


## Property

  -  success

    The attribute value is a boolean;
    The attribute value is true; it means that the Bluetooth is turned off successfully;
    The attribute value is false; it means that the bluetooth has failed to be turned off;

  
  - error

    The attribute value is a string and is undefined;
    The attribute value is a string representing the error message;
  
  - data

    The attribute value is undefined;


## Method

  - none

## Event

  - 

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| success              | ✅      | ✅   | ✅          | X       |
| error                | ✅      | ✅   | ✅          | X       |
| data                 | ✅      | ✅   | ✅          | X       |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md)



