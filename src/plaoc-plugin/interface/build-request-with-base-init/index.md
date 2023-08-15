---
title:  $BuildRequestWithBaseInit
category:
  - Interface
tag:
  -  $BuildRequestWithBaseInit
---

继承与[$BuildRequestInit](../build-request-init/index.md)接口; 
 

## 属性

  - base

    可选属性；请求的基础路径；属性值是string;

  - search

    可选属性；
    请求的搜索条件；
    参数的合法类型是：
    
    [URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)

    string

    Object

    二维数组


  - body

    可选的属性；
    请求的主体数据；
    属性值的合法类型是；

    [BodyInit]()

    null



  - cache

    可选的属性；
    请求的缓存模式；
    属性值的合法类型是 [RequestCache]()
    


  - credentials

    可选的属性
    请求的凭据；
    属性值的合法类型是[RequestCredentials]()



  - headers

    可选的属性；
    请求的头部数据；
    属性值的合法类型是[HeadersInit]()


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
    属性值的的类型是 [RequestMode]()

  - redirect

    可选属性；
    如何处理重新定向
    属性值的类型是 [RequestRedirect]()


  - referrer

    可先属性
    谁发起了请求;
    属性指的类型是 string;


  - referrerPolicy

    可选属性；
    设置请求的referrer策略；
    属性值的类型是[ReferrerPolicy]()

  - signal

    可选属性；
    设置请求的终止信号；
    属性值的类型是[AbortSignal]() 
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
| base           | ✅      | ✅  | ✅           | X       |
| search         | ✅      | ✅  | ✅           | X       |
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


