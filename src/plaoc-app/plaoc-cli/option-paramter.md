---
title: optionPararmter
category:
  - Service 
tag:
  - Service 
---

[@plaoc/cli](./index.md)的选项参数说明；

## --dir

  用来指定开发目录，即指定您创建manifest.json的根目录

  以如下的工程目录为例：
  - root            
    - dist          // 工程打包后目录
    - manifest.json // minifest 文件
  
  ```bash
  plaoc serve ./root/dist --dir ./root
  ```

## --port

  用来指定启动的服务端口

## --mode

  服务的处理模式，
  合法的值范围如下:
  
  - www
  
    将文件夹作为 usr/www 的只读文件进行启动。

  - live
  
    将本地文件夹使用动态服务器进行启, usr/www 会存在一个 index.html 中来进行跳转。

  - prod
  
    对将打包后的文件直接进行服务启动

## 相关链接

  [@plaoc/cli](./index.md)

  [plaoc serve url](./serve-url.md)

  [plaoc serve](./serve.md)
