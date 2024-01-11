---
title: HTMLDwebSplashScreenElement
category:
  - WebComponent
tag:
  - HTMLDwebSplashScreenElement  
---

A WebComponent for accessing splash screen settings;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-splash-screen></dweb-splash-screen>
```

## Properties

  - plugin

    A [SplashScreenPlugin](../../plugin/splash-screen/index.md) object;

  - show

    The [SplashScreenPlugin.show()](../../plugin/splash-screen/show.md) method

  - hide

    The [SplashScreenPlugin.hide()](../../plugin/splash-screen/hide.md) method


## Methods

  - None

## Events

  No predefined events  

## Example

```html
<body>
  <dweb-splash-screen></dweb-splash-screen>

  <script type="text/javascript">
    const dwebSplashScreen = document.querySelector("dweb-splash-screen");
    dwebSplashScreen.show();
  </script>
</body>
```


## Cross-Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       |
| show         | ✅      | ✅   | ✅           | X       |
| hide         | ✅      | ✅   | ✅           | X       |

## Related Links

  [WebComponent](./index.md)


  [SplashScreenPlugin](../../plugin/splash-screen/index.md)