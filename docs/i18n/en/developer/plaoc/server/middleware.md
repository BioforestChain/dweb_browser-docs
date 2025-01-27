# @plaoc/server/middlewares

<Badges name="@plaoc/server" />
<Platform supports="iOS,Android,MacOS,Windows" />

Using middleware services in `Dweb App`. Currently, middleware management is provided for three services of the APP.

- `api` Data service interface.
- `www` All source file service interfaces in the application.
- `external` Service interface sent to other modules.

## How to Use

For example, I now need to proxy some route interfaces to forward to the QR code recognition module.

```ts twoslash
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

## Packaging Middleware Services Inside the APP

1. When using `plaoc cli`, specify the `-s` parameter to point to the source code of the programmable backend, and you can package the backend into the App.

```bash
plaoc server ./dist  -s ./serverDist
```

2. First, specify the middleware path of the programmable backend in the `middlewares` field of the `plaoc.json` (create if it does not exist) in the root directory.

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

Example project addresses:

- [dweb-App](https://github.com/BioforestChain/dweb_browser/tree/main/toolkit/plaoc/examples/plugin-demo)
- [middleware-server](https://github.com/BioforestChain/dweb_browser/tree/main/toolkit/plaoc/examples/plaoc-server)
