---
title: HTMLDwebFileSystemElement
category:
  - WebComponent
tag:
  - HTMLDwebFileSystemElement
---

访问文件系统的 HTMLElement;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);
 

```html
<dweb-file-system></dweb-file-system>
```

## 属性

  - plugin

    属性值是一个 [FileSystemPlugin](../../plugin/file-system/index.md)对象；

  - writeFile

    属性值[FileSystemPlugin.writeFile()](../../plugin/file-system/write-file.md) 方法；

  - getUri

    属性值是[FileSystemPlugin.getUrl()](../../plugin/file-system/get-uri.md)方法

## 方法

  - 无

## 事件

  - 无预定义事件；

## 示例
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


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅  | ✅           | X       |
| writeFile    | ✅      | ✅  | ✅          | X       |
| getUri       | ✅      | ✅  | ✅          | X       |

## 相关链接

 [Plaoc WebComponent](../index.md)

[FileSystemPlugin](../../plugin/file-system/index.md)


