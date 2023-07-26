---
title: HTMLDwebStatusBarElement.setColor()
category:
  - WebComponent
tag:
  - status-bar
---

HTMLDwebStatusBarElement 接口的 setColor() 方法用来设置系统栏的颜色；


```javascript
setColor(color)
```

## 参数
- color 一个十六进制字符串的颜色表示。例如： `#FFFFFFFF`

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
 