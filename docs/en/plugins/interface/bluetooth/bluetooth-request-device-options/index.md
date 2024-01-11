---
title: BluetoothRequestDeviceOptions
category:
  - Interface
tag:
  - BluetoothRequestDeviceOptions 2 
---

BluetoothRequestDeviceOptions is an option object used to describe the rule interface for querying Bluetooth devices;

## Property

  - BluetoothRequestDeviceOptions.filters

    Optional attribute, used to describe [filter rules](https://github.com/WebBluetoothCG/web-bluetooth/blob/main/data-filters-explainer.md) for querying Bluetooth devices;

  - BluetoothRequestDeviceOptions.optionalServices

    Optional attribute, used to describe the rules of those services that can access Bluetooth devices; if the subsequent access services are not declared here, you will receive an error message when accessing;
    The value of the property is an array of strings;

  - BluetoothRequestDeviceOptions.acceptAllDevices

    Optional attribute; used to query all Bluetooth devices;
    The attribute value is a boolean;

## Method

  - none


## Event

  - none

## Platform Compatibility

| Property/Method/Event        | Android | IOS | Desktop-Dev | Desktop |
|:----------------------------:|:-------:|:---:|:-----------:|:-------:|
| filters                      | ✅      | ✅   | ✅          | X       |
| optionalServices             | ✅      | ✅   | ✅          | X       |
| acceptAllDevices             | ✅      | ✅   | ✅          | X       |

## Related Links

[BluetoothPlugin](../../plugin/bluetooth/index.md)