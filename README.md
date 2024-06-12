# dweb_browser_docs

<img align="right" src="./docs/public/logo.svg" height="150px" alt="跨平台分布式应用浏览器">

DwebBrowser 应用开发文档,简单的调用即可使用系统能力，提供了分布式的应用通信方案，并且不必糟心于权限的管理。

DwebBrowser 支持所有主流操作系统平台，无论您是使用移动设备还是桌面设备，我们都能提供无缝的跨平台体验。通过使用统一的窗口视图标准，我们为用户带来了一致且方便的使用体验。

文档站点：[docs.dweb-browser.org](https://docs.dweb-browser.org)

## 快速启动

```bash
npm i

npm run dev
```

## 生成静态文件

```bash
npm run build
```

> 提交更新只需要推送到主分支

## 多语言翻译

多语言翻译基于[Auto-i18n](https://github.com/linyuxuanlin/Auto-i18n) 修改。

1. 安装依赖 `pip install -r requirements.txt`

2. 下载 ollama 并且保持运行。

3. 执行命令 `python auto-translater.py` 运行程序。

4. 它将会自动处理测试目录 `docs/zh` 下的所有 Markdown 文件，批量翻译为英语、西班牙语、阿拉伯语。

<!-- ::: warning
中文修改完，需要同步英文文档。
::: -->

<!--
::: tip
这是一个提示
:::



::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
::: -->

<!--
检查 README.md 的关键步骤

1：格式相关
  a: ```ts 代码部分 上下不要后空格
  b: ```ts 代码部分 左边空一格
  c: 方法 标题不要出现圆括号
    - getState() 这样是错误的
    - getState 这样是准确的
  d: 目录层级是否准确
    ## WebComponent
    ### WebComponent 具体的方法
    ## Plugin
    ### plugin 具体的fangfa
    ## Interfaces
    ### 具体的 interface

2: 内容标准
  a: WebComponent 只写第一个层级的方法
  b: Plugin 只写第一个层级的方法
  c: Interface 需要写全部层级的属性 包括 全部的祖先层级
  d: class type enum 等全部的类型说明都放在 Interface 里面
  e: class 只需要关键的属性不要写方法 例如 DOMInsets
 -->
