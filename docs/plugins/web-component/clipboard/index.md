---
title: HTMLDwebClipboardElement
category:
  - WebComponent
tag:
  - HTMLDwebClipboardElement
---

实现了访问剪切板的 WebComponent; 
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);

```html
<dweb-clipboard></dweb-clipboard>
```

## 属性

  - plugin

    属性值是 [ClipboardPlugin](../../plugin/clipboard/index.md)对象；

  - read

    属性值是 [ClipboardPlugin.read()](../../plugin/clipboard/read.md)方法;

  - write

    属性值是 [ClipboardPlugin.write()](../../plugin/clipboard/write.md)方法

## 方法

  - 无

## 事件

  支持任意事件，无预定义事件；

## 示例
```html
<body>
  <dweb-clipboard></dweb-clipboard>
  <button>read</button>
  <script type="module">
    import "@plaoc/plugins"
    const clipboard = document.querySelector("dweb-clipboard")!
    const btn = document.querySelector('button');
    btn.addEventListener('click', async () => {
      const url = await clipboard.read();
    })
  </script>
</body>
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅  | ✅           | X       |
| read         | ✅      | ✅  | ✅          | X       |
| write        | ✅      | ✅  | ✅          | X       |

## 相关链接

[Plaoc WebComponent](../index.md)


