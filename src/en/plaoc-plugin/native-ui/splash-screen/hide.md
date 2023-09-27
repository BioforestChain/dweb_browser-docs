---
title: SplashScreenPlugin.hide()
category: 
  - Interface
tag:
  - SplashScreenPlugin
  - hide
---

Hide splash screen

```js
SplashScreenPlugin.hide(options)
```

## Parameters

  - options

    Option parameters; 
    The value is a [SplashScreenHideOptions]() object

## Return Value

  Returns a Promise that resolves to a boolean

## Example
```js
import { splashScreenPlugin } from "@plaoc/plugins";

(async () => {
  splashScreenPlugin.hide({})
})();
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| hide         | ✅      | ✅  | ✅          | X       |

## Related Links

[SplashScreenPlugin](./index.md)