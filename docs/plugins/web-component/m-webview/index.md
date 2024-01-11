---
title: HTMLMWebviewElement
category:
  -  WebComponent
tag:
  - HTMLMWebviewElement
---

多webview插件的 WebComponent;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);


```html
<dweb-mwebview></dweb-mwebview>
```

## 属性

  - plugin

    属性值是 [MWebviewPlugin](../../plugin/m-webview/index.md)对象

## 方法

  - HTMLMWebviewElement.open()

    本质执行的是 [MWebviewPlugin.open()](../../plugin/m-webview/open.md)方法

  - HTMLMWebviewElement.close()()

    本质上执行的是 [MWebviewPlugin.close()](../../plugin/m-webview/close.md)方法

  - HTMLMWebviewElement.activate()()

    本质上执行的是 [MWebviewPlugin.activate()](../../plugin/m-webview/activate.md)方法

  - HTMLMWebviewElement.closeApp()()

    本质上执行的是 [MWebviewPlugin.closeApp()](../../plugin/m-webview/close-app.md)方法

## 事件

  - 无预定义事件

## 示例
  ```html
  <body>
    <dweb-mwebview></dweb-mwebview>
    <script type="text/javascript">
      const dwebMWebview = document.querySelector("dweb-mwebview");
      dwebMWebview.open(`http://xxxx`)
    </script>
  </body>
  ```


## 平台兼容性

  | 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
  |:------------:|:-------:|:---:|:-----------:|:-------:|
  | plugin       | ✅      | ✅  | ✅           | X       |
  | open         | ✅      | ✅  | ✅          | X       |
  | close        | ✅      | ✅  | ✅          | X       |
  | activate     | ✅      | ✅  | ✅          | X       |
  | closeApp     | ✅      | ✅  | ✅          | X       |

## 相关链接

   [Plaoc WebComponent](../index.md)

  [MWebviewPlugin](../../plugin/m-webview/index.md)


