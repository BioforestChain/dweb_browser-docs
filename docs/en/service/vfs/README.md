---
title: VFS
category:
  - service
tag:
  - Service
---

虚拟文件API。

可单独导出的API：`ls`,`list`,`mkdir`,`rm`,`read`,`write`,也可以直接导出`fs`,其挂载着上述的API。

## ls

获取文件列表。返回是String[]。

###  filter

#### `type`
导出文件类型`EFilterType`。

- `EFilterType.directroy`，只要文件夹。
- `EFilterType.file`，只需要文件。

####  `name`

- 传递 `*.ts`来获取某种类型的文件。
- 传递 `xxx`来获取某个文件名的文件。

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

## list

以迭代器形式获取文件列表。

```typescript
 for await (const entry of fs.list("./")) { 
    console.log(`vfs测试：获取${entry.type}的各项信息: `, entry.name, entry.extname, entry.basename,
      entry.path, entry.relativePath)
  }
```

## read

## write

## mkdir

## rm



