# @plaoc/is-dweb

<Badges name="@plaoc/is-dweb" />

`@plaoc/is-dweb` serves as a simple auxiliary library for `dweb-browser` environment.

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

## Functions

### `isDweb`

Determines if the environment is a dweb one.

```ts twoslash
import { isDweb } from "@plaoc/is-dweb";
console.log("isdweb=>", isDweb());
```

### `dwebTarget`

This function checks the major version of `dwebTarget`. Certain upgrades to major versions might introduce breaking changes, and this function can be utilized to mitigate such scenarios.

```ts twoslash
import { dwebTarget } from "@plaoc/is-dweb";
console.log("dwebTarget=>", dwebTarget());
```

### `isMobile`

Checks if the environment is on a mobile device.

```ts twoslash
import { isMobile } from "@plaoc/is-dweb";
console.log("isMobile=>", isMobile());
```