---
title: Share
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

Provides the ability to share content through the system.

> For specific example code, see: [Share](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Share.vue)

## Share WebComponent API

To use the WebComponent, you need to mount the DOM node and then call the corresponding API.

```html
<body>
  <dweb-share></dweb-share>
  <script type="module">
    import "@dweb-browser/plaoc";
    const share = document.querySelector("dweb-share")!
    // Share content
    const shareHandle = async () => {
      return await share.share({
        title: "Share Title🍉",
        text: "Share text",
        url: "https://gpt.waterbang.top",
        files: undefined,
      });
    };
  </script>
</body>
```

### canShare (Desktop Only)

Checks if sharing is supported.

- Method signature:

```ts
  async canShare(): Promise<boolean>
```

### share

Shares content. When sharing files, other parameters can be omitted.

- Method signature:

```ts
  async share(options: ShareOptions): Promise<ShareResult>
```

| Param         | Type                                                  | Description   |
| ------------- | ----------------------------------------------------- | ------------- |
| **`options`** | <code><a href="#shareoptions">ShareOptions</a></code> | Share options |

**Returns:** <code>Promise&lt;<a href="#shareresult">ShareResult</a>&gt;</code>

## Share Plugin API

The functionality of the WebComponent is essentially provided by the Plugin. Therefore, the Plugin includes the same API as the WebComponent.

```ts
import { sharePlugin } from "@dweb-browser/plaoc";

// Directly call the share function
sharePlugin.share(shareData); // Pretend there is data
```

## Interfaces

### ShareOptions

If sharing files, the URL sharing will not take effect, which means sharing files has a higher priority.

| Prop        | Type                                           | Description                                         | Since |
| ----------- | ---------------------------------------------- | --------------------------------------------------- | ----- |
| **`title`** | <code>boolean</code>                           | Sets the title of the message                       | 1.0.0 |
| **`text`**  | <code>string</code>                            | Sets the text to be shared                          | 1.0.0 |
| **`url`**   | <code>string</code>                            | Sets the URL to be shared (http, https, or file://) | 1.0.0 |
| **`files`** | <code><a href="#shareresult">File[]</a></code> | Array of file:// URLs of files to be shared         | 1.0.0 |

### ShareResult

| Prop          | Type                 | Description                                                   | Since |
| ------------- | -------------------- | ------------------------------------------------------------- | ----- |
| **`success`** | <code>boolean</code> | Indicates whether the sharing was successful                  | 1.0.0 |
| **`message`** | <code>string</code>  | Additional message upon completion, possibly an error message | 1.0.0 |
