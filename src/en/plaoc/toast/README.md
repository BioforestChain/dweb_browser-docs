---
title: Toast
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

Toast, a small pop-up message that disappears after a certain duration.

> For specific example code, see: [Toast](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Toast.vue)

## Toast WebComponent API

To use the Toast WebComponent, you need to mount the DOM node and then call the corresponding API.

```html
<body>
  <dweb-toast></dweb-toast>
  <script type="module">
    import "@dweb-browser/plaoc";
    const toast = document.querySelector("dweb-toast")!
    // Show the toast
    const showToast = async () => {
      await toast.show({ text: "I'm a toast🍓", duration: "short" })
    }
  </script>
</body>
```

### show

Displays the toast.

- Method signature:

```ts
  async show(options: ToastShowOptions): Promise<void>
```

| Param         | Type                                                          | Description                                        |
| ------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| **`options`** | <code><a href="#toastshowoptions">ToastShowOptions</a></code> | Controls the toast position, content, and duration |

## Toast Plugin API

The functionality of the Toast WebComponent is essentially provided by the Plugin. Therefore, the Plugin includes the same API as the WebComponent.

```ts
import { toastPlugin } from "@dweb-browser/plaoc";

toastPlugin.show({ text: "I'm a toast🍉", duration: "short", position: "top" });
```

## Interfaces

### ToastShowOptions

| Prop           | Type                                                    | Description                                                                                  | Since |
| -------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----- |
| **`text`**     | <code>string</code>                                     | The text to be displayed on the toast                                                        | 1.0.0 |
| **`duration`** | <code><a href="#toastduration">ToastDuration</a></code> | The duration of the toast, "short" (2000 milliseconds) or "long" (3500 milliseconds)         | 1.0.0 |
| **`position`** | <code><a href="#toastposition">ToastPosition</a></code> | The position of the toast. On Android 12 and higher, all toasts are displayed at the bottom. | 1.0.0 |

#### ToastDuration

| Prop        | Type               | Description        | Since |
| ----------- | ------------------ | ------------------ | ----- |
| **`short`** | <code>short</code> | Display for 2000ms | 1.0.0 |
| **`long`**  | <code>long</code>  | Display for 3500ms | 1.0.0 |

#### ToastPosition

| Prop         | Type                | Description           | Since |
| ------------ | ------------------- | --------------------- | ----- |
| **`top`**    | <code>top</code>    | Display at the top    | 1.0.0 |
| **`center`** | <code>center</code> | Display at the center | 1.0.0 |
| **`bottom`** | <code>bottom</code> | Display at the bottom | 1.0.0 |
