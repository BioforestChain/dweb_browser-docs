---
title: BluetoothResponse
category:
  - Interface
tag:
  - BluetoothResponse
---

It is the basic data interface returned by a Bluetooth-related API;


## Property

  -  success

    The attribute value is a boolean;
    Used to describe whether the related API request is successful;

  
  - error

    The attribute value is a string and is undefined;
     The attribute value is a string representing the error message;
  
  - data

    The attribute value may be any value;;


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

[Bluetooth](../../plugin/bluetooth/index.md)
