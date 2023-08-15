---
title: HTMLDwebFileSystemElement
category:
  - WebComponent
tag:
  - HTMLDwebFileSystemElement  
---

An HTMLElement for accessing the file system;
Inherits from [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement);

```html
<dweb-file-system></dweb-file-system> 
```

## Properties
  
  - plugin 

    A [FileSystemPlugin](../../plugin/file-system/index.md) object;

  - writeFile

    The [FileSystemPlugin.writeFile()](../../plugin/file-system/write-file.md) method;

  - getUri 

    The [FileSystemPlugin.getUrl()](../../plugin/file-system/get-uri.md) method;

## Methods

  - None

## Events

  - No predefined events

## Example
```html
<body>
  <dweb-file-system></dweb-file-system>
  <script type="text/javascript">
    const dwebFileSystem = document.querySelector("dweb-file-system");
    dwebFileSystem.getUri({
      path: "/path",
      directory: "DOCUMENTS"
    })
  </script>
</body>
```

## Cross-Platform Compatibility 

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅   | ✅           | X       |  
| writeFile    | ✅      | ✅   | ✅           | X       |
| getUri       | ✅      | ✅   | ✅           | X       |

## Related Links

 [Plaoc WebComponent](../index.md)

[FileSystemPlugin](../../plugin/file-system/index.md)