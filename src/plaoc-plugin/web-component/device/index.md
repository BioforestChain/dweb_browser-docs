---
title: HTMLDeviceElement
category:
  - WebComponent
tag:
  - HTMLDeviceElement
---

是一个访问设备插件的HTMLElement;
继承与 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement);

```html
<dweb-device></dweb-device>
```

## 属性

  - plugin

    属性值一个 [DevicePlugin](../../plugin/device/index.md)对象；

## 方法


  - HTMLDeviceElement.getUUID()

    获取设备标识符；
    本质是调用的[DevicePlugin.getUUID()](../../plugin/device/get-uuid.md)方法
    返回一个Promise, resolve兑现一个[$ResponseUUIDData](../../interface/response-uuid-data/index.md)对象

## 事件

  - 无预定义事件

## 示例
```html
<body>
  <dweb-device></dweb-device>
  <script type="text/javascriipt">
    const dwebDevice = document.querySelector("dweb-device")
    const uuID = dwebDevice.getUUID();
  </script>
</body>
```


## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| plugin       | ✅      | ✅  | ✅           | X       |
| getUUID      | ✅      | ✅  | ✅           | X       |

## 相关链接

 [Plaoc WebComponent](../index.md)

[DevicePlugin](../../plugin/device/index.md)

