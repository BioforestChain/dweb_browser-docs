---
title: NetworkPlugin
category:
  - Plugin
tag:
  - NetworkPlugin
---

Network-related plug-ins;
Interface inheritance and [BaseEvent]()

```js
import { networkPlugin } from "@plaoc/plugin";
```

## Property

  - app_kit

    Attributes are used to save listener-related objects;
    The type of attribute value is [Tkit](../../interface/tkit/index.md) object;

## Method

  - [NetworkPlugin.onLine()](./on-line.md)

    Query whether the network is online;


  - [NetworkPlugin.getStatus()](./get-status.md)

    
    Get the status of the network;

    

## Event

  - onLine

    Triggered when the browser can access the network;

  - offLine

    Triggered when the browser loses the network

  - change

    Triggered when the current browser can access the network and lose the network;

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| onLine               | ✅      | ✅  | ✅          | X       |
| getStatus            | ✅      | ✅  | ✅          | X       |
| event onLine         | ✅      | ✅  | ✅          | X       |
| event offLine        | ✅      | ✅  | ✅          | X       |
| event change         | ✅      | ✅  | ✅          | X       |

## Related Links

[Plaoc](../index.md)


