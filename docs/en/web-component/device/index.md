---
title: HTMLDeviceElement
category:
  - WebComponent
tag:  
  - HTMLDeviceElement
---

An HTMLElement for accessing the device plugin;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-device></dweb-device>
```

## Properties

  - plugin

    A [DevicePlugin](../../plugin/device/index.md) object;

## Methods

  - HTMLDeviceElement.getUUID()

    Gets the device identifier;
    Essentially calls [DevicePlugin.getUUID()](../../plugin/device/get-uuid.md)
    Returns a Promise that resolves to a [ResponseUUIDData](../../interface/response-uuid-data/index.md) object

## Events

  - None

## Example

```html
<body>
  <dweb-device></dweb-device>
  
  <script type="text/javascript">
    const dwebDevice = document.querySelector("dweb-device")
    const uuid = dwebDevice.getUUID();
  </script>  
</body>
```

## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       |
| getUUID      | ✅      | ✅   | ✅           | X       |

## Related Links

 [Plaoc WebComponent](../index.md)

[DevicePlugin](../../plugin/device/index.md)