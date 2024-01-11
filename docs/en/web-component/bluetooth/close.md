---
title: HTMLBluetoothElement.close()
category:
  - WebComponent
tag:
  - HTMLBluetoothElement
  - close
---

Closes the bluetooth device; internally calls the [BluetoothPlugin.close()](../../plugin/bluetooth/close.md) method

```js
HTMLBluetoothElement.close()
```

## Parameters

  - None

## Return Value

  Returns a Promise that resolves to a [BluetoothCloseResponse](../../interface/bluetooth-close-response/index.md) object


## Example

```html
<body>

  <dweb-bluetooth></dweb-bluetooth>

  <button>close</button>

  <script type="module">

    import "@plaoc/plugins"
    
    const bluetooth = document.querySelector("dweb-bluetooth")!
    
    const btn = document.querySelector('button');
    
    btn.addEventListener('click', async () => {
    
      const res = await bluetooth.close();
      
    })
    
  </script>

</body>
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:----------:|:-------:|
| close        | ✅       | ✅   | ✅         | X       |

## Related Links
[HTMLBluetoothElement](./index.md)