# @plaoc/server/middlewares

<Badges name="@plaoc/server" />
<Platform supports="iOS,Android,MacOS,Windows" />

Utilize middleware services in the `Plaoc APP`. Currently, middleware management is provided for three services of the app:

- **`api`** data service interface.
- **`www`** all source file service interfaces within the application.
- **`external`** service interfaces sent to other modules.

## How to Use

Suppose you need to proxy some routes' interfaces and forward them to a QR code scanning module.

```ts
import { Router, jsProcess } from "@plaoc/server/middlewares";

const app = new Router();

app.use(async (event) => {
  console.log("api server:=>", event.request.url, jsProcess.mmid);
  if (event.url.pathname.includes("/barcode-scanning")) {
    const response = await jsProcess.nativeFetch(
      "file://barcode-scanning.sys.dweb/process",
      {
        method: event.method,
        body: event.body,
      }
    );
    if (response.ok) {
      return response;
    } else {
      return Response.json(`decode error:${await response.text()}`);
    }
  }
});

export default app;
```

## Packaging Middleware Services into the APP Internally

1. When using `plaoc cli`, specify `-s` parameter to point to the source code of the programmable backend, allowing you to bundle the backend within the App.

```bash
plaoc server ./dist -s ./serverDist
```

2. In your root directory's `plaoc.json` file (create it if it doesn't exist), under the `middlewares` field, specify the path to the middleware scripts in the programmable backend.

```json
{
  "defaultConfig": {
    "lang": "en"
  },
  "middlewares": {
    "www": "middlewares/index.plaoc-www.js",
    "api": "middlewares/index.plaoc-api.js",
    "external": "middlewares/index.plaoc-external.js"
  },
  "redirect": []
}
```

## Examples

For reference, check out the following projects:

- **[plaoc-App](https://github.com/BioforestChain/dweb_browser/tree/main/toolkit/plaoc/examples/plugin-demo)**
- **[middleware-server](https://github.com/BioforestChain/dweb_browser/tree/main/toolkit/plaoc/examples/plaoc-server)**
