---
title: HTMLDwebSplashScreenElement
category:
  - WebComponent
tag:
  - HTMLDwebSplashScreenElement
---

访问启动屏设置的 WebComponent;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);


```html
<dweb-splash-screen></dweb-splash-screen>
```

## 属性

  - plugin

    属性值是一个 [SplashScreenPlugin](../../plugin/splash-screen/index.md) 对象；

  - show

    属性值是一个 [SplashScreenPlugin.show()](../../plugin/splash-screen/show.md) 方法

  - hide

    属性值是一个 [SplashScreenPlugin.hide()](../../plugin/splash-screen/hide.md) 方法


## 方法

  - 无

## 事件

  无预定义事件

## 示例
  ```html
  <body>
    <dweb-splash-screen></dweb-splash-screen>
    <script type="text/javascript">
      const dwebSplashScreen = document.querySelector("dweb-splash-screen");
      dwebSplashScreen.show()
    </script>
  </body>
  ```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅  | ✅           | X       |
| show         | ✅      | ✅  | ✅          | X       |
| hide         | ✅      | ✅  | ✅          | X       |

## 相关链接

  [Plaoc WebComponent](./index.md)


  [SplashScreenPlugin](../../plugin/splash-screen/index.md)

