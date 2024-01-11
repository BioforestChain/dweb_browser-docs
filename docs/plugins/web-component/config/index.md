---
title: HTMLDwebConfigElement
category:
  -  WebComponent
tag:
  - 标签列表项
---

是一个实现配置数据的 WebComponent;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);

```html
<dweb-config></dweb-config>
```

## 属性

  - plugin

    属性值是 [ConfigPlugin](../../plugin/config/index.md)对象；

  - public_url

    属性值是 [ConfigPlugin.public_url](../../plugin/config/index.md)属性值；

## 方法

  - 无

## 事件

  支持任意事件，无预定义事件；

## 示例
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

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅  | ✅           | X       |
| public_url   | ✅      | ✅  | ✅          | X       |

## 相关链接
[Plaoc WebComponent](../index.md)


