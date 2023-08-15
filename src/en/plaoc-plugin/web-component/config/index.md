---
title: HTMLDwebConfigElement
category:
  - WebComponent
tag:
  - Config
---

A WebComponent that implements configuration data;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-config></dweb-config> 
```

## Properties

  - plugin

    The property value is the [ConfigPlugin](../../plugin/config/index.md) object;

  - public_url  

    The property value is the [ConfigPlugin.public_url](../../plugin/config/index.md) property value;

## Methods

  - None

## Events

  Supports any events, no predefined events;

## Example

```html
<body>

  <dweb-config></dweb-config>
  
  <button>check</button>

  <script type="module">

    import "@plaoc/plugins"
    
    const config = document.querySelector("dweb-config")!
    
    const btn = document.querySelector('button');
    
    btn.addEventListener('click', async () => {
    
      const url = await config.public_url;
      
    })
    
  </script>

</body>
```

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:----------:|:-------:|
| plugin                  | ✅       | ✅   | ✅          | X       |
| public_url              | ✅       | ✅   | ✅          | X       |

## Related Links
[Plaoc WebComponent](../index.md)