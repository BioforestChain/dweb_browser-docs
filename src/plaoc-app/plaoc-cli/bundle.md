---
title: plaoc bundle
category:
  - Service 
tag:
  - Service 
---

打包 Plaoc App， 生成一个 发布文件；

```bash
plaoc bundle xxx
```


## 示例

  以如下的工程目录为例：
  - root            
    - dist          // 工程打包后目录
    - manifest.json // minifest 文件


  ```bash
  plaoc bundle ./root/dist --dir ./root
  ```

  会在root目录下生成一下文件
  - root
    - bundle
      - appId.version.zip      // app 压缩包
      - metadata.json          // metadata 文件

  之后就可以通过部署bundle文件[发布](../release/index.md)应用;
  

  
## 相关链接

  [@plaoc/cli](./index.md)

  [plaoc serve url](./serve-url.md)

  [plaoc serve](./serve.md)

  [release](../release/index.md)
