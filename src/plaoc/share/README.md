---
title: Share
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

提供系统分享的能力。

> 具体查看示例代码： [Share](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Share.vue)

## Share WebComponent API

先挂载 DOM 节点，然后就能调用相应 API。

```html
<body>
  <dweb-share></dweb-share>
  <script type="module">
    import "@dweb-browser/plaoc";
    const share = document.querySelector("dweb-share")!
    // 分享
    const shareHandle = async () => {
      return await share.share({
        title: "分享标题🍉",
        text: "分享文字分享文字",
        url: "https://gpt.waterbang.top",
        files: undefined,
      });
    };
  </script>
</body>
```

### canShare（desktop Only）

判断是否能分享。

- 调用签名：

```ts
  async canShare(): Promise<boolean>
```

### share

提供分享功能，在分享文件的时候，可以不传递其他参数。

- 调用签名：

```ts
  async share(options: ShareOptions): Promise<ShareResult>
```

| Param         | Type                                                  | Description |
| ------------- | ----------------------------------------------------- | ----------- |
| **`options`** | <code><a href="#shareoptions">ShareOptions</a></code> | 分享参数    |

**Returns:** <code>Promise&lt;<a href="#shareresult">ShareResult</a>&gt;</code>

## Share Plugin API

WebComponent 的功能本质上由 Plugin 提供，因此 Plugin 的 API 同 WebComponent。

```ts
import { sharePlugin } from "@dweb-browser/plaoc";

// 直接调用分享
sharePlugin.share(shareData); // 假装有数据
```

## Interfaces

### ShareOptions

如果要分享文件，那么 url 的分享将不生效，也就是说，分享文件的权重更高。

| Prop        | Type                                           | Description                                           | Since |
| ----------- | ---------------------------------------------- | ----------------------------------------------------- | ----- |
| **`title`** | <code>boolean</code>                           | 为消息设置标题                                        | 1.0.0 |
| **`text`**  | <code>string</code>                            | 设置文字分享                                          | 1.0.0 |
| **`url`**   | <code>string</code>                            | 设置要分享的 URL，可以是 http、https 或 file:// URL   | 1.0.0 |
| **`files`** | <code><a href="#shareresult">File[]</a></code> | 要共享的文件的 file:// URL 数组 仅支持 iOS 和 Android | 1.0.0 |

### ShareResult

| Prop          | Type                 | Description                        | Since |
| ------------- | -------------------- | ---------------------------------- | ----- |
| **`success`** | <code>boolean</code> | 是否分享成功                       | 1.0.0 |
| **`message`** | <code>string</code>  | 分享完成的一些提示，可能是错误提示 | 1.0.0 |
