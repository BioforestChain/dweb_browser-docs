---
title: BluetoothWatchAdvertisementsResponse
category:
  - Interface
tag:
  - BluetoothWatchAdvertisementsResponse
---

BluetoothWatchAdvertisementsResponse is a Promise returned by the BluetoothDevice.watchAdvertisments() method, a data object that is cashed after resolve; this object inherits the [BluetoothResponse](../bluetooth-response/index.md) interface;

## Property

  -  success

    The attribute value is a boolean;
    The attribute value is true; indicating success;
    Attribute value is false; indicates failure;

  
  - error

    The attribute value is a string and is undefined;
    The attribute value is a string representing the error message;
  
  - data

    The attribute value is undefined or "ok";


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



