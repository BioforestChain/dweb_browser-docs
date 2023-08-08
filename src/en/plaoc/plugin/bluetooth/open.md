---
title: Bluetooth.open()
category:
  - Plugin
tag:
  - Bluetooth
  - open
---

Turn on the Bluetooth device;
Turning on the Bluetooth device is the prerequisite for accessing the Bluetooth device;

```js
Bluetooth.open()
```

## parameters

  - none

## return value

  A Promise object, resolve fulfills the [BluetoohOpenResponse](../../interface/bluetooth-open-response/index.md) object


## Example
```js
import { bluetooth } from "@plaoc/plugins";
bluetooth.open()
.then(
  res => {
    if(res. success){
       // turn on bluetooth successfully
     }else{
       // Failed to open bluetooth;
     }
  }
)
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| open                 | ✅      | ✅   | ✅          | X       |

## Related Links

[Bluetooth](./index.md)
