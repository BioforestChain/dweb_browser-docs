---
title: dwebServiceWorker.externalFetch()
category:
  - Plugin
tag:
  - dwebServiceWorker
  - externalFetch
---

Method for communicating with other apps. Pass the MMID as the first parameter to declare who to communicate with.

The second and third parameters are both used to construct the request.

`externalFetch` generally works in conjunction with the `fetch` event, with the former sending messages and the latter receiving messages. See [fetchEvent](./event-fetch.md) for details

## Example

```js
import { dwebServiceWorker } from "@plaoc/plugins";

const base = new URL(document.baseURI);
const url = new URL("/say/hi", base.origin);
url.searchParams.set("message", "hi");

const res = await dwebServiceWorker.externalFetch(
  `game.dweb.waterbang.top.dweb`, // Who to communicate with
  url
);

console.log("Received response message => ", await res.text());
```

## Function signature

```js
externalFetch(mmid: $MMID, input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>
```

## Parameters

- mmid

Identifier of other app; The parameter value is a [$MMID](../../interface/mmid/index.md) type object.

- [RequestInfo](https://developer.mozilla.org/en-US/docs/Web/API/Request) | [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)

Request object of Web API.

```ts
type RequestInfo = Request | string;
```

- [RequestInit](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch) | undefined: init object in `fetch` API.

## Return value

- [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)

## Platform compatibility

| Attribute/Method/Event | Android | IOS | Desktop |
| :--------------------: | :-----: | :-: | :-----: |
|     externalFetch      |   ✅    | ✅  |   ✅    |

## Related links

[dwebServiceWorker](../index.md)
