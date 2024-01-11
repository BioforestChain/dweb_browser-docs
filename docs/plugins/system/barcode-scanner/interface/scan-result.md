---
title: ScanResult
category:
  - Interface
tag:
  - barcode-scanner
---

扫码的返回值定义。

## 接口

```ts
export type ScanResult = {
  //  是否有返回值
  hasContent: boolean;
  // 是否有内容
  content: string[];
  // 权限相关
  permission: BarcodeScannerPermission;
};

export enum BarcodeScannerPermission {
  UserReject = "UserReject", //用户拒绝
  UserAgree = "UserAgree", // 用户同意
  UserError = "UserError", // 用户手机版本太低，不支持扫码
}
```