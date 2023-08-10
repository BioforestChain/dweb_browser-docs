---
title: HTMLBluetoothElement.open()
category:
  - WebComponent
tag:
  - HTMLBluetoothElement
  - open
---

Opens the bluetooth device; internally calls the [BluetoothPlugin.open()](../../plugin/bluetooth/open.md) method

```js
HTMLBluetoothElement.open()
```

## Parameters

  - None

## Return Value

  Returns a Promise that resolves to a [BluetoohOpenResponse](../../interface/bluetooth-open-response/index.md) object


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

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:----------:|:-------:|
| open         | ✅       | ✅   | ✅         | X       |

## Related Links
[HTMLBluetoothElement](./index.md)