---
title: HTMLMWebviewElement  
category:
  - WebComponent
tag:
  - HTMLMWebviewElement
---

A WebComponent for the multi-webview plugin; 
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-mwebview></dweb-mwebview> 
```

## Properties

  - plugin

    A [MWebviewPlugin](../../plugin/m-webview/index.md) object

## Methods

  - HTMLMWebviewElement.open()

    Essentially executes [MWebviewPlugin.open()](../../plugin/m-webview/open.md)

  - HTMLMWebviewElement.close()  

    Essentially executes [MWebviewPlugin.close()](../../plugin/m-webview/close.md)

  - HTMLMWebviewElement.activate()

    Essentially executes [MWebviewPlugin.activate()](../../plugin/m-webview/activate.md)

  - HTMLMWebviewElement.closeApp()

    Essentially executes [MWebviewPlugin.closeApp()](../../plugin/m-webview/close-app.md)

## Events

  - No predefined events  

## Example

```html
<body>
  <dweb-mwebview></dweb-mwebview>

  <script type="text/javascript">
    const dwebMWebview = document.querySelector("dweb-mwebview");
    dwebMWebview.open(`http://xxxx`) 
  </script>
</body>
```


## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       |
| open         | ✅      | ✅   | ✅           | X       |
| close        | ✅      | ✅   | ✅           | X       |
| activate     | ✅      | ✅   | ✅           | X       |
| closeApp     | ✅      | ✅   | ✅           | X       |

## Related Links

 [Plaoc WebComponent](../index.md)

[MWebviewPlugin](../../plugin/m-webview/index.md)