---
title: StatusBarPlugin
category:
  - Plugin
---

StatusBarPlugin 接口实现了对系统状态栏的访问，提供了访问系统状态栏的属性和方法；





```typescript
setColor(color: string): Promise<null>
```

### 参数
- color 一个十六进制字符串的颜色表示。例如： `#FFFFFFFF`

### 返回值
- 一个promise对象，resolve 兑现 Null



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
| setColor()   | ✅      | ✅  | ✅          | X      |


## 相关链接
[HTMLDwebStatusBarElement](./README.md)
[StatusBarPlugin](./status-bar-plugin.md)