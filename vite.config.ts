import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync } from "node:fs";
import { join } from "node:path";

installGlobals();

export default defineConfig({
  // REF: https://github.com/brookslybrand/remix-gh-pages/blob/main/vite.config.ts
  base: "/zustand-pg/",
  plugins: [remix({
    ssr: false,
    basename: "/zustand-pg/",
    buildEnd(args) {
      if (!args.viteConfig.isProduction) return;
        // GitHub Pagesにデプロイする際に`/`から別のルートに移動してタブをリフレッシュすると404エラーが発生する。これを防ぐためにindex.htmlと同じ内容を404.htmlとして作成してるらしい
        // REF： https://github.com/brookslybrand/remix-gh-pages/blob/ce5981bbdf29fa0c4adbdb1634f8ae05c6af9609/vite.config.ts#L16-L23
        const buildPath = args.viteConfig.build.outDir;
        copyFileSync(
          join(buildPath, "index.html"),
          join(buildPath, "404.html"),
        );
    }
  }), tsconfigPaths()],
});
