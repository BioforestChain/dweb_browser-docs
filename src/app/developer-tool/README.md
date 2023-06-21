---
title: 开发者工具
category:
  - Service 
tag:
  - Service 
---

## 如何开始开发

### 首先需要生成 `metadata.json`

```bash
plaoc serve  http://172.30.90.207:5173/
```

### 运行

直接运行，并且把 --url 指定到 metadata.json 就可以进行开发。

```bash
dweb-browser-devtools.app --args install --url http://172.30.90.207:8096/metadata.json
```