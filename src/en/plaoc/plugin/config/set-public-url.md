---
title: ConfigPlugin.setPublicUrl()
category:
  - Plugin
tag:
  - ConfigPlugin
  - setPublicUrl  
---

Sets the public URL.

```js
configPlugin.setPublicUrl(url)
```

## Parameters

  - url: 

    The new URL as a string.

## Returns

The public URL.

## Example

```js
import { configPlugin } from "@plaoc/plugin";

configPlugin.setPublicUrl("http://xxx");
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop | 
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| setPublicUrl         | ✅      | ✅  | ✅          | X       |

## See Also

[ConfigPlugin](./index.md)