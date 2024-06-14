# @plaoc/is-dweb

<Badges name="@plaoc/is-dweb" />

`@plaoc/is-dweb` 是一个简单的 `dweb-browser` 环境辅助函数库。

## 安装

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

用来判断是否是 dweb 环境。

```ts twoslash
import { isDweb } from "@plaoc/is-dweb";
console.log("isdweb=>", isDweb());
```

### dwebTarget

这个函数用来判断 dwebTarget 的大版本，当前的某些大版本升级可能导致一些破坏性变更，可以通过此函数进行限制。

```ts twoslash
import { dwebTarget } from "@plaoc/is-dweb";
console.log("dwebTarget=>", dwebTarget());
```

### isMobile

判断是否是移动端。

```ts twoslash
import { isMobile } from "@plaoc/is-dweb";
console.log("isMobile=>", isMobile());
```
