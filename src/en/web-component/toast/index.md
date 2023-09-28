---
title: HTMLDwebToastElement
category:
  - WebComponent
tag:
  - HTMLDwebToastElement
---

A WebComponent for accessing system message functions;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-toast></dweb-toast>
```

## Properties

  - plugin

    A [ToastPlugin](../../plugin/toast/index.md) object;
  
  - show

    The [ToastPlugin.show()](../../plugin/toast/show.md) method

## Methods

  - None

## Events

  No predefined events  

## Example

```html
<body>
  <dweb-toast></dweb-toast>

  <script type="text/javascript">
    const dwebToast = document.querySelector("dweb-toast");
    dwebToast.show({text: "test"});
  </script>
</body>
```

## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       |
| show         | ✅      | ✅   | ✅           | X       |

## Related Links

[WebComponent](../index.md)

[ToastPlugin](../../plugin/toast/index.md)