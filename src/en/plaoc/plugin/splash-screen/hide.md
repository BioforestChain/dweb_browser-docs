---
title: SplashScreenPlugin.hide()
category:
  - Interface
tag:
  - SplashScreenPlugin
  - hide
---

hide startup page;

```js
SplashScreenPlugin.hide(options)
```

## parameters

  - options

    option parameter;
    The parameter value is a [SplashScreenHideOptions]() object;

## return value

  Return a Promise, resolve to fulfill a boolean;

## Example
```js
import { splashScreenPlugin } from "@plaoc/plugin";
;(async () => {
  splashScreenPlugin.hide({})
})();
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| hide         | ✅       | ✅  | ✅          | X       |

## Related Links

[SplashScreenPlugin](./index.md)


