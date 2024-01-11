---
title: HTMLDwebShareElement
category:
  - WebComponent 
tag:
  - HTMLDwebShareElement
---

实现分享的 WebComponent;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);


```html
<dweb-share></dweb-share>
```

## 属性

  - plugin

    属性值是 [SharePlugin](../../plugin/share/index.md) 对象；

  - canShare

    属性值是 [SharePlugin.canShare()](../../plugin/share/can-share.md) 方法；

  - share

    属性值是 [SharePlugin.share()](../../plugin/share/share.md) 方法

## 方法

  - 无

## 事件

  无预定义事件；

## 示例
  ```html
  <body>
    <dweb-share></dweb-share>
    <script type="text/javascript">
      const dwebShare = document.querySelector("dweb-share");
      dwebNetwork.canShare()
    </script>
  </body>
  ```

## 平台兼容性

  | 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
  |:------------:|:-------:|:---:|:-----------:|:-------:|
  | plugin       | ✅      | ✅  | ✅           | X       |
  | canShare     | ✅      | ✅  | ✅          | X       |
  | share        | ✅      | ✅  | ✅          | X       |

## 相关链接

   [Plaoc WebComponent](../index.md)

  [SharePlugin](../../plugin/share/index.md)


