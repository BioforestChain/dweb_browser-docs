---
title: NetworkPlugin  
category:
  - Plugin
tag:
  - NetworkPlugin
---

Network related plugin;
The interface inherits from [BaseEvent](../../interface/base-event/index.md).

```js 
import { networkPlugin } from "@plaoc/plugin";
```

## Properties

  - app_kit

    Property used to store listener related objects; 
    The type of the value is a [Tkit](../../interface/tkit/index.md) object.

## Methods

  - [NetworkPlugin.onLine()](./on-line.md)

    Check if network is online;

  - [NetworkPlugin.getStatus()](./get-status.md)

    Get the network status;
  
## Events

  - onLine  

    Triggered when the browser can access the network;

  - offLine

    Triggered when the browser loses network;
  
  - change

    Triggered when the browser gains/loses network access; 

## Platform Support

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop | 
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| onLine               | ✅      | ✅  | ✅          | X       |  
| getStatus            | ✅      | ✅  | ✅          | X       |
| event onLine         | ✅      | ✅  | ✅          | X       |
| event offLine        | ✅      | ✅  | ✅          | X       |
| event change         | ✅      | ✅  | ✅          | X       |

## Related Links  

[Plaoc](../../)