# Plaoc 前端开发文档

## 快速上手

### 前端(Vue/React/Angular)

在入口页面引用Plugin。
> 以vue3为例：

```typescript
import { createApp } from "vue";
import '@bfsx/plugin';   // +++++++++++
import "./style.css";
import App from "./App.vue";
createApp(App).mount("#app");
```

#### 按需引入

```typescript
import { BfcsKeyboard, Navigation, BfcsStatusBar } from '@bfsx/plugin';
```

### 组件类型安全提示
> 可以查看[bfsa-plugin-typed](https://github.com/BioforestChain/bfsa-plugin-typed)

## 配置参考
