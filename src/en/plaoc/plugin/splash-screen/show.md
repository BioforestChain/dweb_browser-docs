---
title: SplashScreenPlugin.show()
category:
  - Plugin 
tag:
  - SplashScreenPlugin
  - show
 
---


show startup page;

```js
SplashScreenPlugin.show(options)
```

## parameters

  - options

    Display the optio parameters of the startup page;
    The value of the pareameter is a [SplashScreenShowOptions](../../interface/splash-screen-show-options/index.md) object;


## return value

  Return a Promise, resolve to fulfill a boolean;

## Example
```js
import { splashScreenPlugin } from "@plaoc/plugin";
splashScreenPlugin.show({})
```

## Platform Compatibility

| Property/Method/Event| Android | IOS | Desktop-Dev | Desktop |
|:--------------------:|:-------:|:---:|:-----------:|:-------:|
| show                 | ✅       | ✅  | ✅          | X       |

## Related Links

[SplashScreenPlugin](../index.md)



