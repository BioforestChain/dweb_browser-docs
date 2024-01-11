---
title: HTMLDwebBiometricsElement
category:
  - WebComponent
tag:
  - HTMLDwebBiometricsElement
---

HTMLDwebBiometricsElement is a WebComponent that implements biometrics.
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-biometrics></dweb-biometrics>
```

## Properties

  - plugin

    The property value is the [BiometricsPlugin](../../plugin/biometrics/index.md) object

  - check

    The property value is the [BiometricsPlugin.check()](../../plugin/biometrics/check.md) method;

  - biometrics

    The property is just the [BiometricsPlugin.biometrics()](../../plugin/biometrics/biometrics.md) method

## Methods

  - None

## Events

  Supports any events, no predefined events;

## Example
```html
<body>
  <dweb-biometrics></dweb-biometrics>
  <button>check</button>
  <script type="module">
    import "@plaoc/plugins"
    const biometrics = document.querySelector("dweb-biometrics")!
    const btn = document.querySelector('button');
    btn.addEventListener('click', async () => {
      const res = await biometrics.check();
    })
  </script>
</body>
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:----------:|:-------:|
| plugin       | ✅      | ✅   | ✅          | X       |  
| check        | ✅      | ✅   | ✅          | X       |
| biometrics   | ✅      | ✅   | ✅          | X       |

## Related Links

[Plaoc WebComponent](../index.md)