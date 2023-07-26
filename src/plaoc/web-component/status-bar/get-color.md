---
title: HTMLDwebStatusBarElement.getColor()
category:
  - WebComponent
tag:
  - status-bar
---

HTMLDwebStatusBarElement 接口的 getColor() 方法用来获取当前系统栏的颜色；

```javascript
getColor()
```

## 参数

- 无

## 返回值
- 一个Primise对象, resolve兑现一个 十六进制的颜色表示
- 例如： `#FFFFFFFF`


## 示例
```html
<body>
  <dweb-status-bar></dweb-status-bar>
  <script type="module">
    // 引入
    import "@plaoc/plugins";
    const el = document.querySelector("dweb-status-bar")!
    el.getColor()
    .then(
      res => {
      
      }
    )
  </script>
</body>
```

## 平台兼容性
| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| getColor()   | ✅      | ✅  | ✅          | X       |


## 相关链接
[HTMLDwebStatusBarElement](./index.md)
 