---
title: HTMLBluetoothElement.requestAndConnectDevice()
category:
  - WebComponent 
tag:
  - HTMLBluetoothElement
  - requestAndConnectDevice 
---

打开蓝牙设备；内部实际调用的是 [BluetoothPlugin.requestAndConnectDevice()](../../plugin/bluetooth/request-and-connect-device.md)方法

```js
HTMLBluetoothElement.requestAndConnectDevice(options)
```

## 参数

  - options

    是一个选项对象；这个对象必须是实现了[BluetoothRequestDeviceOptions](../../interface/bluetooth-request-device-options/index.md)接口的对象；

## 返回值

  返回一个Promise, resolve兑现一个实现了[BluetoothRequestAndConnectDeviceResponse](../../interface/bluetooth-request-and-connect-device-response/index.md)接口的对象；

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
      bluetooth
      .open()
      .then(res => {
        if(res.success){
          const options = {
            acceptAllDevices: true,
            optionalServices: ["00003802-0000-1000-8000-00805f9b34fb"],
          }
          return bluetoothPlugin.requestAndConnectDevice(options)
        }
      })
      .then(res => {
        if(res.success){
          // 成功的查询和连接了蓝牙设备；
        }
      })
    })
  </script>
</body>
```

## 平台兼容性

| 属性/方法/事件                | Android | IOS | Desktop-Dev | Desktop |
|:---------------------------:|:-------:|:---:|:-----------:|:-------:|
| requestAndConnectDevice     | ✅       | ✅  | ✅          | X       |

## 相关链接
[HTMLBluetoothElement](./index.md)


