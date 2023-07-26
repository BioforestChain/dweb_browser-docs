---
title: HTMLDwebStatusBarElement.setStyle()
category:
  - WebComponent
tag:
  - status-bar
---

HTMLDwebStatusBarElement 接口的 setStyle() 方法用来设置系统栏的样式\[文字和图标的颜色\]；


```javascript
setStyle(style)
```

## 参数
- style 表示样式名称的字符串；合法的值如下：
  - `"DARK"`  会设置 状态栏的前景色为浅色，用来适配深色背景的状态栏；
  - `"LIGHT"` 会设置 状态栏的前景色为深色，用来适配浅色背景的状态栏；
  - `"DEFAULT"` 会根据设备自动的设置状态栏的前景色; 
                如果设备采用深色模式，状态栏的前景色会设置为浅色；
                如果设备采用浅色模式，状态栏的前景色会设置为深色；

## 返回值
- 一个Promise对象，resolve 兑现 Null


## 示例
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


## 平台兼容性
| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setColor()   | ✅      | ✅  | ✅          | X       |


## 相关链接
[HTMLDwebStatusBarElement](./index.md)
 