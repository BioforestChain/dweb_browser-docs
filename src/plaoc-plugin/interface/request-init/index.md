---
title:  RequestInit
category:
  - Interface
tag:
  -  RequestInit
---

发起请求的初始化数据

## 属性

  - body

    可选的属性；
    请求的主体数据；
    属性值的合法类型是；

    [BodyInit](../body-init/index.md)

    null


  - cache

    可选的属性；
    请求的缓存模式；
    属性值的合法类型是 [RequestCache](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)
    


  - credentials

    可选的属性
    定义发送cookies 的规则
    属性值的合法类型是[RequestCredentials](https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials)


  - headers

    可选的属性；
    请求的头部数据；
    属性值的合法类型是[HeadersInit](../headers-init/index.md)


  - integrity

    可选的属性
    请求的子资源；
    属性值的合法类型是 string;


  - keepalive

    可选属性；
    是否保持活性；在同一个TCP连接上发起多个请求；
    属性值的合法类型是 boolean;


  - method

    可选属性；
    请求的方法；
    合法的值是：
    "GET"

    "POST"

    "PUT"

    "DELETE"

    "PATCH"

    "OPTIONS"

    "HEAD"

    "CONNECT"

    "TRACE"

  - mode

    可选属性；
    定义同源策略;
    属性值的的类型是 [RequestMode](../request-mode/index.md)


  - redirect

    可选属性；
    如何处理重新定向
    属性值的类型是 [RequestRedirect](https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect)
 

  - referrer

    可先属性
    谁发起了请求;
    属性指的类型是 string;


  - referrerPolicy

    可选属性；
    设置请求的referrer策略；
    属性值的类型是[ReferrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/Request/referrerPolicy)

  - signal

    可选属性；
    设置请求的终止信号；
    属性值的类型是[AbortSignal](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal) 
    或者是 null;

  - widow

    可选属性；
    用于接触关联的window;
    属性值只能够null;


## 方法

  - 无

 

## 事件

  -  无

## 平台兼容性

| 属性/方法/事件   | Android | IOS | Desktop-Dev | Desktop |
|:--------------:|:-------:|:---:|:-----------:|:-------:|
| body           | ✅      | ✅  | ✅           | X       |
| cache          | ✅      | ✅  | ✅           | X       |
| credentials    | ✅      | ✅  | ✅           | X       |
| headers        | ✅      | ✅  | ✅           | X       |
| integrity      | ✅      | ✅  | ✅           | X       |
| keepalive      | ✅      | ✅  | ✅           | X       |
| method         | ✅      | ✅  | ✅           | X       |
| mode           | ✅      | ✅  | ✅           | X       |
| referrer       | ✅      | ✅  | ✅           | X       |
| referrerPolicy | ✅      | ✅  | ✅           | X       |
| signal         | ✅      | ✅  | ✅           | X       |
| widow          | ✅      | ✅  | ✅           | X       |

## 相关链接

[]()


