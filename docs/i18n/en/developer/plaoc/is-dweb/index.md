# @plaoc/is-dweb

<Badges name="@plaoc/is-dweb" />

`@plaoc/is-dweb` is a simple helper library for the `dweb-browser` environment.

## Installation

::: code-group

```bash [PNPM]
  pnpm add -g @plaoc/is-dweb
```

```bash [YARN]
  yarn global add @plaoc/is-dweb
```

```bash [NPM]
  npm i -g @plaoc/is-dweb
```

:::

## Method

### isDweb

Used to determine if it is a dweb environment.

```ts twoslash
import { isDweb } from "@plaoc/is-dweb";
console.log("isdweb=>", isDweb());
```

### dwebTarget

This function is used to determine the major version of dwebTarget. Current major version upgrades may cause some breaking changes, which can be restricted using this function.

```ts twoslash
import { dwebTarget } from "@plaoc/is-dweb";
console.log("dwebTarget=>", dwebTarget());
```

### isMobile

Determine if it is a mobile device.

```ts twoslash
import { isMobile } from "@plaoc/is-dweb";
console.log("isMobile=>", isMobile());
```
