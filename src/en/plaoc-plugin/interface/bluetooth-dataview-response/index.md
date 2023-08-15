---
title: BluetoothDataViewResponse
category:
  - Interface
tag:
  - BluetoothDataViewResponse
---

The BluetoothDataViewResponse interface inherits from the [BluetoothResponse](../bluetooth-response/index.md) interface;

## Property

  - success

    The attribute value is a boolean;
    The attribute value is true; it means that the execution operation is successful;
    The attribute value is false; it means that the operation failed;


  - error

    The attribute value is a string and is undefined;
    The attribute value is a string representing the error message;

  - data

    The attribute value is [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) or undefined;


## Method

  - none

## Event

  - none

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| success              | ✅      | ✅   | ✅          | X       |
| error                | ✅      | ✅   | ✅          | X       |
| data                 | ✅      | ✅   | ✅          | X       |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md)



