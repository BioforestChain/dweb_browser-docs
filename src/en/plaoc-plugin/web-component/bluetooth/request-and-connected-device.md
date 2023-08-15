---
title: HTMLBluetoothElement.requestAndConnectDevice()
category:
  - WebComponent
tag:
  - HTMLBluetoothElement
  - requestAndConnectDevice
---

Opens the bluetooth device; internally calls the [BluetoothPlugin.requestAndConnectDevice()](../../plugin/bluetooth/request-and-connect-device.md) method

```js
HTMLBluetoothElement.requestAndConnectDevice(options)
```

## Parameters  

  - options

    An options object; this object must implement the [BluetoothRequestDeviceOptions](../../interface/bluetooth-request-device-options/index.md) interface;

## Return Value

  Returns a Promise that resolves to an object implementing the [BluetoothRequestAndConnectDeviceResponse](../../interface/bluetooth-request-and-connect-device-response/index.md) interface;

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
    
      bluetooth
      .open()
      .then(res => {
        if(res.success){
        
          const options = {
            acceptAllDevices: true,
            optionalServices: ["00003802-0000-1000-8000-00805f9b34fb"],
          }
          
          return bluetoothPlugin.requestAndConnectDevice(options)
        }
      })
      .then(res => {
        if(res.success){
        
          // Successfully queried and connected bluetooth device;
          
        }
      })
    })
    
  </script>

</body>
```

## Platform Compatibility

| Properties/Methods/Events           | Android | iOS | Desktop-Dev | Desktop |  
|:--------------------------------:|:-------:|:---:|:----------:|:-------:|
| requestAndConnectDevice          | ✅       | ✅   | ✅         | X       |

## Related Links
[HTMLBluetoothElement](./index.md)