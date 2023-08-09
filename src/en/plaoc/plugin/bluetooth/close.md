---
title: Bluetooth.close()
category:
  - Plugin
tag:
  - Bluetooth
  - close
---

Closes the Bluetooth adapter.

```js
Bluetooth.close()  
```

## Parameters

- None

## Returns

- A Promise that resolves to a [BluetoothCloseResponse](../../interface/bluetooth-close-response.md) object.  

## Example

```js
import { bluetooth } from "@plaoc/plugins";

bluetooth.close()
.then(res => {
  if(res.success) {
    // Bluetooth closed successfully
  } else {
    // Failed to close Bluetooth
  }
})
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| close                 | ✅      | ✅  | ✅          | X       |  

## See Also

[Bluetooth](./index.md)