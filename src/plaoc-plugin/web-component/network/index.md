---
title: HTMLDwebNetworkElement
category:
  - WebComponent
tag:
  - HTMLDwebNetworkElement
---

访问网络相关功能的 WebComponent;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);


```html
<dweb-network></dweb-network>
```

## 属性

  - plugin

    属性值是 [NetworkPlugin](../../plugin/network/index.md) 对象；

  - getStatus

    获取网络的状态；
    属性值是 [NetworkPlugin.getStatus()](../../plugin/network/get-status.md) 方法；

  - onLine

    查询网路是否在线；
    属性值是 [NetworkPlugin.onLine()](../../plugin/network/on-line.md) 方法；

## 方法

  - 无

## 事件

  无预定义事件；

## 示例
  ```html
  <body>
    <dweb-network></dweb-network>
    <script type="text/javascript">
      const dwebNetwork = document.querySelector("dweb-network");
      dwebNetwork.onLine()
    </script>
  </body>
  ```

## 平台兼容性

  | 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
  |:------------:|:-------:|:---:|:-----------:|:-------:|
  | plugin       | ✅      | ✅  | ✅           | X       |
  | getStatus    | ✅      | ✅  | ✅          | X       |
  | onLine       | ✅      | ✅  | ✅          | X       |

## 相关链接

   [Plaoc WebComponent](../index.md)

  [NetworkPlugin](../../plugin/network/index.md)

