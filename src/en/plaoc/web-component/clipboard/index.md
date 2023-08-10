---
title: HTMLDwebClipboardElement
category:
  - WebComponent
tag:
  - HTMLDwebClipboardElement  
---

Implements a WebComponent for accessing the clipboard;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-clipboard></dweb-clipboard>
```

## Properties

  - plugin

    The property value is the [ClipboardPlugin](../../plugin/clipboard/index.md) object;

  - read

    The property value is the [ClipboardPlugin.read()](../../plugin/clipboard/read.md) method;

  - write

    The property value is the [ClipboardPlugin.write()](../../plugin/clipboard/write.md) method

## Methods

  - None

## Events

  Supports any events, no predefined events; 

## Example
```html
<body>
  <dweb-clipboard></dweb-clipboard>
  <button>read</button>
  <script type="module">
    import "@plaoc/plugins"
    const clipboard = document.querySelector("dweb-clipboard")!
    const btn = document.querySelector('button');
    btn.addEventListener('click', async () => {
      const url = await clipboard.read();
    })
  </script>
</body>
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:----------:|:-------:|
| plugin                  | ✅       | ✅   | ✅          | X       |
| read                    | ✅       | ✅   | ✅          | X       |
| write                   | ✅       | ✅   | ✅          | X       |

## Related Links

[Plaoc WebComponent](../index.md)