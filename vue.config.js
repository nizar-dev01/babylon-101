import { defineConfig } from "@vue/cli-service";
import path from "path";

import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  transpileDependencies: true,
  publicPath: "/babylon-101",
  configureWebpack: {
    resolve: {
      alias: {
        "@game": path.join(__dirname, "src/babylon/game"),
      },
    },
  },
});
