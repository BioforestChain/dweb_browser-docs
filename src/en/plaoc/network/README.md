---
title: Network
category:
  - Plugin
tag:
  - WebComponent
  - Plugin
---

This plugin provides the ability to access device network status.

> For specific example code, see: [Network](https://github.com/BioforestChain/dweb_browser/blob/main/plaoc/demo/src/pages/Network.vue)

## Network WebComponent API

To use the WebComponent, you need to mount the DOM node and then call the corresponding API.
Using Vue 3 as an example:

```html
<body>
  <dweb-network></dweb-network>
  <script type="module">
    import "@dweb-browser/plaoc";
    const network = document.querySelector("dweb-network")!
    // Check network status
    const getStatus = async () => {
      await network.getStatus()
    }
    // Check if network is online
    const onLine = async () => {
      await network.onLine()
    }
  </script>
</body>
```

### onLine

Check if the network is online.

- Method signature:

```ts
  async onLine(): Promise<boolean>
```

### getStatus

Get the network status.

- Method signature:

```ts
  async getStatus(): Promise<ConnectionStatus>
```

**Returns:** <code>Promise&lt;<a href="#connectionstatus">ConnectionStatus</a>&gt;</code>

## Network Plugin API

The functionality of the WebComponent is essentially provided by the Plugin. Therefore, the Plugin includes the same API as the WebComponent.

```ts
import { networkPlugin } from "@dweb-browser/plaoc";

// Get the network status
networkPlugin.getStatus();
// Check if the network is online
networkPlugin.onLine();
```

## Interfaces

### ConnectionStatus

| Prop                 | Type                                                      | Description                                     | Since |
| -------------------- | --------------------------------------------------------- | ----------------------------------------------- | ----- |
| **`connected`**      | <code>boolean</code>                                      | Indicates network connectivity                  | 1.0.0 |
| **`connectionType`** | <code><a href="#connectiontype">ConnectionType</a></code> | The type of network connection currently in use | 1.0.0 |

#### ConnectionType

| Prop           | Type                | Description                                               |
| -------------- | ------------------- | --------------------------------------------------------- |
| **`wifi`**     | <code>string</code> |                                                           |
| **`cellular`** | <code>string</code> | Cellular network                                          |
| **`2g`**       | <code>string</code> |                                                           |
| **`3g`**       | <code>string</code> |                                                           |
| **`4g`**       | <code>string</code> |                                                           |
| **`5g`**       | <code>string</code> |                                                           |
| **`6g`**       | <code>string</code> |                                                           |
| **`none`**     | <code>string</code> | Network status when there is no active network connection |
| **`unknown`**  | <code>string</code> |                                                           |
