---
title: HTMLDwebToastElement
category:
  - WebComponent  
tag:
  - HTMLDwebToastElement
---

访问系统消息功能的 WebComponent;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);


```html
<dweb-toast></dweb-toast>
```

## 属性

  - plugin

    属性值是一个 [ToastPlugin](../../plugin/toast/index.md) 对象；
  
  - show

    属性值是一个 [ToastPlugin.show()](../../plugin/toast/show.md) 方法

## 方法

  - 无

## 事件

  无预定义事件

## 示例
  ```html
  <body>
    <dweb-toast></dweb-toast>
    <script type="text/javascript">
      const dwebToast = document.querySelector("dweb-toast");
      dwebToast.show({text: "test"})
    </script>
  </body>
  ```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅  | ✅           | X       |
| show         | ✅      | ✅  | ✅          | X       |

## 相关链接

  [Plaoc WebComponent](../index.md)

  [ToastPlugin](../../plugin/toast/index.md)


