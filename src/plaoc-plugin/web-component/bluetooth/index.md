---
title: HTMLBluetoothElement
category:
  - WebComponent
tag:
  - HTMLBluetoothElement
---

HTMLBluetoothElement 是蓝牙相关的 WebComponent;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);

```html
<dweb-bluetooth></dweb-bluetooth>
```

## 属性

  - plugin

    属性值是 [BluetoothPlugin](../../plugin/bluetooth/index.md)对象；

## 方法

  - [HTMLBluetoothElement.open()](./open.md)

    打开蓝牙设备；

  - [HTMLBluetoothElement.close()](./close.md)

    关闭蓝牙设备

  - [HTMLBluetoothElement.requestAndConnectDevice()](./request-and-connected-device.md)

    查询和连接蓝牙设备；

## 事件

  支持任意事件，无预定义事件；

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

| 属性/方法/事件            | Android | IOS | Desktop-Dev | Desktop |
|:-----------------------:|:-------:|:---:|:-----------:|:-------:|
| plugin                  | ✅      | ✅   | ✅          | X       |
| open                    | ✅      | ✅   | ✅          | X       |
| close                   | ✅      | ✅   | ✅          | X       |
| requestAndConnectDevice | ✅      | ✅   | ✅          | X       |

## 相关链接
[Plaoc Webcomponent](../index.md)


