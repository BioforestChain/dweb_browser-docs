import { fileURLToPath } from "node:url";
import UnoCSS from "unocss/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import { groupIconVitePlugin } from "vitepress-plugin-group-icons";

export default defineConfig({
  plugins: [
    Components({
      dirs: [fileURLToPath(new URL("./components", import.meta.url))],
      dts: fileURLToPath(new URL("../components.d.ts", import.meta.url)),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx$/],
      extensions: ["vue", "md", "mdx"],
    }),
    UnoCSS(fileURLToPath(new URL("./uno.config.ts", import.meta.url))),
    groupIconVitePlugin(),
  ],
});
