---
title: ShareResult
category:
  - Interface
tag:
  - ShareResult
---

分享后返回的结果；作为[SharePlugin.share()](../../plugin/share/share.md)方法返回后的Promise，resolve兑现的值；


## 属性

  - success

    分享是否成功；
    属性值是一个boolean;

  - message

    额外的消息；
    属性值是一个 string;

## 方法

  - 无

## 事件

  - 无

## 平台兼容性

| 属性/方法/事件 | Android | IOS | Desktop-Dev | Desktop |
|:------------:|:-------:|:---:|:-----------:|:-------:|
| success      | ✅      | ✅  | ✅           | X       |
| message      | ✅      | ✅  | ✅           | X       |

## 相关链接

[Interface](../index.md)

[SharePlugin.share()](../../plugin/share/share.md)

[SharePlugin](../../plugin/share/index.md)



