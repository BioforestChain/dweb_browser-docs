---
title:  $BuildRequestInit
category:
  - Interface
tag:
  -  $BuildRequestInit
---

Inherit and [RequestInit](../request-init/index.md) interface;


## Property
  - base

    Optional attribute; the base path of the request; the attribute value is string;


  - search

    optional attributes;
    the requested search criteria;
    Legal types for parameters are:
  
    [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

    string

    object

    Two-dimensional array


  - body

    optional attributes;
    the subject data of the request;
    Legal types for attribute values are;

    [BodyInit](../body-init/index.md)

    null



  - cache

    optional attributes;
    the requested cache mode;
    Legal types for attribute values are [RequestCache](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)
  


  - credentials

    optional attributes
    Define rules for sending cookies
    The legal type of attribute value is [RequestCredentials](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)


  - headers

    optional attributes;
    The header data of the request;
    Legal types for attribute values are [HeadersInit](../headers-init/index.md)


  - integrity

    optional attributes
    the requested subresource;
    The legal type of attribute value is string;


  - keepalive

    optional attributes;
    Whether to keep alive; initiate multiple requests on the same TCP connection;
    The legal type of attribute value is boolean;


  - method

    optional attributes;
    the requested method;
    Legal values are:
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

    optional attributes;
    Define the same-origin policy;
    The type of attribute value is [RequestMode](../request-mode/index.md)


  - redirect

    optional attributes;
    How to handle redirects
    The attribute value is of type [RequestRedirect](https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect)


  - referrer

    Priority
    who initiated the request;
    The type that the attribute refers to is string;


  - referrerPolicy

    optional attributes;
    Set the referrer policy of the request;
    The type of attribute value is [ReferrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/Request/referrerPolicy)

  - signal

    optional attributes;
    Set the termination signal of the request;
    The type of attribute value is [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)
    or null;

  - widow

    optional attributes;
    The window used to contact the association;
    The attribute value can only be null;


## Method

  - none

 

## Event

  - none

## Platform Compatibility

| Property/Method/Event    | Android | IOS | Desktop-Dev | Desktop |
|:------------------------:|:-------:|:---:|:-----------:|:-------:|
| base                     | ✅      | ✅  | ✅           | X       |
| search                   | ✅      | ✅  | ✅           | X       |
| body                     | ✅      | ✅  | ✅           | X       |
| cache                    | ✅      | ✅  | ✅           | X       |
| credentials              | ✅      | ✅  | ✅           | X       |
| headers                  | ✅      | ✅  | ✅           | X       |
| integrity                | ✅      | ✅  | ✅           | X       |
| keepalive                | ✅      | ✅  | ✅           | X       |
| method                   | ✅      | ✅  | ✅           | X       |
| mode                     | ✅      | ✅  | ✅           | X       |
| referrer                 | ✅      | ✅  | ✅           | X       |
| referrerPolicy           | ✅      | ✅  | ✅           | X       |
| signal                   | ✅      | ✅  | ✅           | X       |
| widow                    | ✅      | ✅  | ✅           | X       |

## Related Links

[]()


