// https://vitepress.dev/guide/custom-theme
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import "@shikijs/vitepress-twoslash/style.css";
import "uno.css";
import type { EnhanceAppContext } from "vitepress";
import Theme from "vitepress/theme";

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue);
  },
};
