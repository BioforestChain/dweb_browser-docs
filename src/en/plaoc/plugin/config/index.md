---
title: ConfigPlugin
category:
  - Plugin
tag:
  - ConfigPlugin
---

configure plugin

```js
import { configPlugin } from "@plaoc/plugin";
configPlugin.getInternalUrl()
```

## Property

  - public_url

    The attribute defines the public url;
    The value of the property is a string or a promise that resolve fulfills a string;

## Method

  - [ConfigPlugin.getInternalUrl()]()

    Get the internal Url;

  - [ConfigPlugin.setInternalUrl()]()

    Set the internal Url;;

  - [ConfigPlugin.setPublicUrl()]()

    Set public Url;

## Event

  - none


## Platform Compatibility

| Property/Method/Event   | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| public_url              | ✅      | ✅   | ✅          | X       |
| getInternalUrl          | ✅      | ✅   | ✅          | X       |
| setInternalUrl          | ✅      | ✅   | ✅          | X       |
| setPublicUrl            | ✅      | ✅   | ✅          | X       |

## Related Links
[Plaoc](../index.md)


