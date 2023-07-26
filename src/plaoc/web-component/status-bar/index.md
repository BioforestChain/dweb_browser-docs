---
title: HTMLDwebStatusBarElement
category:
  - WebComponent
tag:
  - status-bar
---

HTMLDwebStatusBarElement 接口用来表示系统状态栏元素, 并提供访问系统状态栏的属性和方法

```html
<body>
  <dweb-status-bar></dweb-status-bar>
  <script type="module">
    // 引入
    import "@plaoc/plugins";
    const el = document.querySelector("dweb-status-bar")!
    el.setColor("#FF0000FF")
    .then(
      res => {
        console.log("设置系统状态栏颜色成功")
      }
    )
  </script>
</body>
```

## 方法 Method
- [HTMLDwebStatusBarElement.setColor()](./set-color.md)

  设置系统状态栏的颜色;

- [HTMLDwebStatusBarElement.getColor()](./get-color.md)

  获取系统状态栏的颜色；

- [HTMLDwebStatusBarElement.setStyle()](./set-style.md)

  设置系统状态栏的风格;

<!-- - HTMLDwebStatusBarElement.getStyle()

  获取系统状态栏的风格; -->


## 事件 Event

使用 addEventlistener() 实现事件的添加

- statechange

  当系统状态栏的状态发生改变的时候触发


## 平台兼容性


| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setColor()   | ✅      | ✅  | ✅          | X      |
<!-- | getColor()   | ✅      | ✅  | ✅          | X      |
| setStyle()   | ✅      | ✅  | ✅          | X      |
| getStyle()   | ✅      | ✅  | ✅          | X      |
| statechange event   | ✅      | ✅  | ✅          | X      | -->



