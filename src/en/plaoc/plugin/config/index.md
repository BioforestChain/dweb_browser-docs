---
title: ConfigPlugin
category:
  - Plugin
tag:
  - ConfigPlugin
---

Configuration plugin.

```js
import { configPlugin } from "@plaoc/plugin";

configPlugin.getInternalUrl();
```

## Properties

- public_url

  Defines the public URL.
  Its value is a string or a Promise that resolves to a string.

## Methods  

- [ConfigPlugin.getInternalUrl()]()

  Gets the internal URL.

- [ConfigPlugin.setInternalUrl()]()

  Sets the internal URL.

- [ConfigPlugin.setPublicUrl()]()

  Sets the public URL.

## Events  

- None

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| public_url           | ✅      | ✅  | ✅          | X       |  
| getInternalUrl       | ✅      | ✅  | ✅          | X       |
| setInternalUrl       | ✅      | ✅  | ✅          | X       |
| setPublicUrl         | ✅      | ✅  | ✅          | X       |

## See Also

[Plaoc](../index.md)