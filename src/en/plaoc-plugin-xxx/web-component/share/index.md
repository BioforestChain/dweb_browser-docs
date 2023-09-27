---
title: HTMLDwebShareElement
category:
  - WebComponent
tag:
  - HTMLDwebShareElement   
---

A WebComponent for implementing sharing;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-share></dweb-share>
```

## Properties

  - plugin

    A [SharePlugin](../../plugin/share/index.md) object;

  - canShare

    The [SharePlugin.canShare()](../../plugin/share/can-share.md) method;

  - share

    The [SharePlugin.share()](../../plugin/share/share.md) method

## Methods

  - None

## Events  

  - No predefined events

## Example

```html
<body>
  <dweb-share></dweb-share>

  <script type="text/javascript">
    const dwebShare = document.querySelector("dweb-share");
    dwebShare.canShare();
  </script>
</body>
```

## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       |
| canShare     | ✅      | ✅   | ✅           | X       |
| share        | ✅      | ✅   | ✅           | X       |  

## Related Links

 [Plaoc WebComponent](../index.md)

[SharePlugin](../../plugin/share/index.md)