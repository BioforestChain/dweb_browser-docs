---
title: Bluetooth.close()
category:
  - Plugin
tag:
  - Bluetooth
  - open
---

Turn off the Bluetooth device;

```js
Bluetooth.close()
```


## parameters

  - none


## return value

  A Promise object, resolve fulfills a [BluetoothCloseResponse](../../interface/bluetooth-close-response.md) object;

## Example

```js
import { bluetooth } from "@plaoc/plugins";
bluetooth.close()
.then(
  res => {
    if(res. success){
       // turn off bluetooth successfully
     }else{
       // Failed to turn off Bluetooth;
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

