// https://vitepress.dev/guide/custom-theme
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import "@shikijs/vitepress-twoslash/style.css";
import "uno.css";
import type { EnhanceAppContext } from "vitepress";
import { default as DefaultTheme, default as Theme } from "vitepress/theme";
import { h } from "vue";
import IndexBackground from "../components/IndexBackground.vue";
import "./style/var.css";

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-hero-before": () => h(IndexBackground),
    });
  },
};
