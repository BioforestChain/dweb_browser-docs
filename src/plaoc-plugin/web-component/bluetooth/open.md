---
title: HTMLBluetoothElement.open()
category:
  - WebComponent 
tag:
  - HTMLBluetoothElement
  - open 
---

打开蓝牙设备；内部实际调用的是 [BluetoothPlugin.open()](../../plugin/bluetooth/open.md)方法

```js
HTMLBluetoothElement.open()
```

## 参数

  - 无

## 返回值

  返回一个Promise对象，resolve兑现[BluetoohOpenResponse](../../interface/bluetooth-open-response/index.md)对象


## 示例
```html
<body>
  <dweb-bluetooth></dweb-bluetooth>
  <button>open</button>
  <script type="module">
    import "@plaoc/plugins"
    const bluetooth = document.querySelector("dweb-bluetooth")!
    const btn = document.querySelector('button');
    btn.addEventListener('click', async () => {
      const res = await bluetooth.open();
    })
  </script>
</body>
```

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| setColor     | ✅       | ✅  | ✅          | X       |

## 相关链接
[HTMLBluetoothElement](./index.md)


