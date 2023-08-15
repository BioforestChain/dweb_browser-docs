---
title: HTMLBluetoothElement
category:
  - WebComponent
tag:
  - HTMLBluetoothElement  
---

HTMLBluetoothElement is a WebComponent related to bluetooth.
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-bluetooth></dweb-bluetooth>
```

## Properties

  - plugin

    The property value is the [BluetoothPlugin](../../plugin/bluetooth/index.md) object;

## Methods

  - [HTMLBluetoothElement.open()](./open.md)

    Opens the bluetooth device;

  - [HTMLBluetoothElement.close()](./close.md)

    Closes the bluetooth device;

  - [HTMLBluetoothElement.requestAndConnectDevice()](./request-and-connected-device.md)

    Queries and connects bluetooth devices;

## Events

  Supports any events, no predefined events;  

## Example

```html
<body>

  <dweb-bluetooth></dweb-bluetooth>

  <button>open</button>

  <script type="module">

    import "@plaoc/plugins"
    
    const bluetooth = document.querySelector("dweb-bluetooth")!
    
    const btn = document.querySelector('button');
    
    btn.addEventListener('click', async () => {
    
      const res = await bluetooth.open();
      
    })
    
  </script>

</body>
```

## Platform Compatibility

| Properties/Methods/Events       | Android | iOS | Desktop-Dev | Desktop |
|:-----------------------------:|:-------:|:---:|:----------:|:-------:|
| plugin                        | ✅      | ✅   | ✅         | X       |
| open                          | ✅      | ✅   | ✅         | X       |  
| close                         | ✅      | ✅   | ✅         | X       |
| requestAndConnectDevice       | ✅      | ✅   | ✅         | X       |

## Related Links  
[Plaoc Webcomponent](../index.md)