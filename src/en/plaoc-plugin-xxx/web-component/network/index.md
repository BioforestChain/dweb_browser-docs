---
title: HTMLDwebNetworkElement
category:
  - WebComponent
tag:
  - HTMLDwebNetworkElement  
---

A WebComponent for accessing network related functions;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-network></dweb-network>
```

## Properties

  - plugin

    A [NetworkPlugin](../../plugin/network/index.md) object;

  - getStatus

    Gets the network status;
    The [NetworkPlugin.getStatus()](../../plugin/network/get-status.md) method;

  - onLine  

    Checks if network is online;
    The [NetworkPlugin.onLine()](../../plugin/network/on-line.md) method;

## Methods

  - None

## Events

  No predefined events

## Example

```html  
<body>
  <dweb-network></dweb-network>
  
  <script type="text/javascript">
    const dwebNetwork = document.querySelector("dweb-network");
    dwebNetwork.onLine();
  </script>
</body>
```

## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       |
| getStatus    | ✅      | ✅   | ✅           | X       |
| onLine       | ✅      | ✅   | ✅           | X       |

## Related Links

 [Plaoc WebComponent](../index.md)

[NetworkPlugin](../../plugin/network/index.md)