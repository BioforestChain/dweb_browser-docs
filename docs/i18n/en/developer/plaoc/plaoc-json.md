---
outline: deep
---
# plaoc.json Configuration File

### Redirection Configuration

plaoc provides redirection functionality similar to nginx, using [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API) to parse and match paths.

### Creating `plaoc.json`

First, create `plaoc.json` in your project root directory, with the following path structure:

```bash
  dweb-app
  ├── ......other project files
  ├── manifest.json
  └── plaoc.json
```

The complete field content is as follows:

```json
{
  "defaultConfig": {
    "lang": "zh-Hans"
  },
  "redirect": [
    {
      "matchMethod": ["*"],
      "matchUrl": {
        "pathname": "/"
      },
      "to": {
        "url": "/locales/{{lang}}{{pattern.pathname.input}}index.html",
        "appendHeaders": {},
        "removeHeaders": []
      }
    }
  ]
}
```

The rule of the above configuration is:

Allow all types of Methods, and when the requested pathname is `/`, it will be forwarded to the configured `to.url`.

You can see that the key point of the above configuration is

```javascript
/locales/{{lang}}{{pattern.pathname.input}}index.html
```

`{{}}` contains variables, including the following variables:

- lang corresponds to the configuration content of `defaultConfig.lang`

- pattern is the content parsed by `URLPattern`.
  The structure is as shown in the following example, and you can also test it in the browser environment, which is a more reliable method.

![URLPattern](/URLPattern.png)

### appendHeaders

Add content to the request Header when forwarding.

### removeHeaders

Remove the request header when forwarding

### Some example explanations

The type of redirect is an array, so you can define multiple redirects.

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

The above three redirects will match the following URLs.

1. Rule: `/`

`/    --〉  /locales/zh/index.html`

2. Rule: `{/}assets/*`

`assets/xxxx/icon.png -> assets/xxxx/icon.png`

`/assets/xxxx/icon.png -> /assets/xxxx/icon.png`

3. Rule: `/*`

`/1234124.index.js -> /locales/zh/1234124.index.js`

For more forwarding rules, you can check some matching rules of [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API).

### Hidden Usage

` { { } }` can contain js expressions.

```js
{
  {
    pattern.pathname.groups.assets === "assets"
      ? "/" + pattern.pathname.input
      : "/locales/" + lang + pattern.pathname.input;
  }
}
```
