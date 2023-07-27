# Plaoc Plugin

一个在javascript范围内提供跨平台的访问系统功能的前端插件；

## 安装
```bash
npm install @plaoc/plugins
```

## 示例

```typescript
import { barcodeScannerPlugin } from "@plaoc/plugins";
// 调用扫码
const taskPshoto = async () => {
  await barcodeScannerPlugin.startScanning();
};
```

## 相关链接
[Plaoc](../)

[WebComponent](../web-component/index.md)