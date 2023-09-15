---
title: ConfigPlugin.setInternalUrl()
category:
  - Plugin
tag:
  - ConfigPlugin
  - setInternalUrl
---

Sets the internal URL.

```js
configPlugin.setInternalUrl(url)
```

## Parameters

- url: The new URL as a string.

## Returns

The internal URL.  

## Example

```js
import { configPlugin } from "@plaoc/plugins";

configPlugin.setInternalUrl("http://xxx");
```

## Platform Compatibility

| Property/Method/Event | Android | iOS | Desktop-Dev | Desktop |
|:---------------------:|:-------:|:---:|:-----------:|:-------:|
| setInternalUrl        | ✅      | ✅  | ✅          | X       |  

## See Also

[ConfigPlugin](./index.md)