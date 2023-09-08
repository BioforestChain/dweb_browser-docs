---
title: 重定向
category:
  - Plaoc
tag:
  - redirect
---

plaoc 提供了类似nginx的重定向功能,使用[URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)来解析匹配的路径。


### 创建`plaoc.json`

首选在您的项目根目录下创建`plaoc.json`,路径如下:

```bash
  plaoc-app
  ├── ......其他工程文件
  ├── mainifest.json
  └── plaoc.json
```


全部字段内容如下:

```json
{
  "defaultConfig": {
    "lang": "zh-Hans"
  },
  "redirect": [
    {
      "matchMethod": [
        "*"
      ],
      "matchUrl": {
        "pathname": "/"
      },
      "to": {
        "url": "/locales/{{lang}}{{pattern.pathname.input}}index.html",
        "appendHeaders": {},
        "removeHeaders": []
      }
    },
  ]
}
```
以上的配置的规则是：

允许所有类型的Method，并且当请求的pathname为`/`的时候，将会转发到配置的`to.url`。

可以看到以上配置的重点在`/locales/{{lang}}{{pattern.pathname.input}}index.html`。

`{{}}`里存放的是变量，包含的变量如下：

- lang 对应着 `defaultConfig.lang` 的配置内容

- pattern 是`URLPattern`解析的内容。
结构如下示例，也可以在浏览器环境执行测试，这是比较稳妥的方法。

![URLPattern](./URLPattern.png)


### appendHeaders

转发的时候添加内容到请求的Header。

### removeHeaders

转发的时候移除请求的header


### 一些示例解释

redirect的类型是数组，因此您可以定义多个redirect。

```json
 "redirect": [
    {
      "matchMethod": [
        "*"
      ],
      "matchUrl": {
        "pathname": "/"
      },
      "to": {
        "url": "/locales/{{lang}}{{pattern.pathname.input}}index.html",
        "appendHeaders": {},
        "removeHeaders": [
        ]
      }
    },
    {
      "matchMethod": [
        "*"
      ],
      "matchUrl": {
        "pathname": "{/}assets/*"
      },
      "to": {
        "url": "{{pattern.pathname.input}}",
        "appendHeaders": {},
        "removeHeaders": [
        ]
      }
    },
    {
      "matchMethod": [
        "*"
      ],
      "matchUrl": {
        "pathname": "/*"
      },
      "to": {
        "url": "/locales/{{lang}}{{pattern.pathname.input}}",
        "appendHeaders": {},
        "removeHeaders": [
        ]
      }
    }
  ]
```

上面的三个重定向，将匹配如下的url。

1. 规则为： `/`

`/    --〉  /locales/zh/index.html`

2. 规则为：`{/}assets/*`

`assets/xxxx/icon.png -> assets/xxxx/icon.png`

`/assets/xxxx/icon.png -> /assets/xxxx/icon.png`

3. 规则为：`/*`

`/1234124.index.js -> /locales/zh/1234124.index.js`


更多的转发规则可以查看[URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)的一些匹配规则。


### 隐藏用法

`{{}}`里可以写js表达式。

```js
{{pattern.pathname.groups.assets === 'assets' ? '/'+pattern.pathname.input : '/locales/'+lang+pattern.pathname.input}}
```
