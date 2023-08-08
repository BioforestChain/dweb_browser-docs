---
title: SharePlugin.share()
category:
  - Plugin
tag:
  - SharePlugin
  - share
---

way to share;

```js
 SharePlugin.share(options)
```

## parameters

  - options

    Shared options object;
    The parameter value is the [ShareOptions](../../interface/share-options/index.md) object;

## return value

  Return a Promise,and resolve fulfills a [ShareResult](../../interface/share-result/index.md) object;

## Example
```js
import { sharePlugin } from "@plaoc/plugin";
;(async() => {
  const b = await sharePlugin.canShare()
  if(!b)return;
  const res = await sharePlugin.show({
    title: "title"，
    text: "content"
  })
})();
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| share                | ✅       | ✅  | ✅          | X       |

## Related Links

[SharePlugin](./index.md)


