---
title: VFS
category:
  - service
tag:
  - Service
---

虚拟文件API。

可单独导出的API：`ls`,`list`,`mkdir`,`rm`,`read`,`write`,也可以直接导出`fs`,其挂载着上述的API。

导出文件类型`EFilterType`。

包含：`EFilterType.file`,`EFilterType.directroy`。

## ls

获取文件列表。

### example

```typescript
import { ls, EFilterType } from "@bfsx/vfs"
const lsFileList = await ls("/", {
  filter: [
    {
      type: EFilterType.file,
      name: ["*.ts", "index"]
    },
    {
      type: EFilterType.directroy,
      name: ["core"]
    }],
  recursive: true
})
console.log("vfs测试：获取ls : ", lsFileList)
```
