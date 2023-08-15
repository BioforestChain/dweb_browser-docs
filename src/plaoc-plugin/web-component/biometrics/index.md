---
title: HTMLDwebBiometricsElement
category:
  - WebComponent
tag:
  - HTMLDwebBiometricsElement
---

HTMLDwebBiometricsElement 是一个实现生物识别的 WebComponent；
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);

```html
<dweb-biometrics></dweb-biometrics>
```

## 属性

  - plugin

    属性值是 [BiometricsPlugin](../../plugin/biometrics/index.md)对象

  - check

    属性值是 [BiometricsPlugin.check()](../../plugin/biometrics/check.md) 方法；

  - biometrics

    属性只是 [BiometricsPlugin.biometrics()](../../plugin/biometrics/biometrics.md)方法

## 方法

  - 无

## 事件

  支持任意事件，无预定义事件；

## 示例
```html
<body>
  <dweb-biometrics></dweb-biometrics>
  <button>check</button>
  <script type="module">
    import "@plaoc/plugins"
    const biometrics = document.querySelector("dweb-biometrics")!
    const btn = document.querySelector('button');
    btn.addEventListener('click', async () => {
      const res = await biometrics.check();
    })
  </script>
</body>
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅  | ✅           | X       |
| check        | ✅      | ✅  | ✅           | X       |
| biometrics   | ✅      | ✅  | ✅           | X       |

## 相关链接

[Plaoc WebComponent](../index.md)


