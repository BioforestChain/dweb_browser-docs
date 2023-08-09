---
title: SplashScreenPlugin.show()
category:
  - Plugin
tag:
  - SplashScreenPlugin
  - show

---

Show splash screen  

```js
SplashScreenPlugin.show(options)
```

## Parameters

  - options

    Options for showing splash screen; 
    The value is a [SplashScreenShowOptions](../../interface/splash-screen-show-options/index.md) object


## Return Value

  Returns a Promise that resolves to a boolean;

## Example
```js
import { splashScreenPlugin } from "@plaoc/plugin";
splashScreenPlugin.show({})
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| show         | ✅      | ✅  | ✅          | X       |

## Related Links

[SplashScreenPlugin](../index.md)