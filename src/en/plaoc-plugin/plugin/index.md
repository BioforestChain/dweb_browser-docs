# Plaoc Plugin

A front-end plugin that provides cross-platform access to system functionality within javascript;

## 安装
```bash
npm install @plaoc/plugins
```

## Example

```typescript
import { barcodeScannerPlugin } from "@plaoc/plugins";
// 调用扫码
const taskPshoto = async () => {
  await barcodeScannerPlugin.startScanning();
};
```

## Related Links
[Plaoc](../)

 [Plaoc WebComponent](../web-component/index.md)