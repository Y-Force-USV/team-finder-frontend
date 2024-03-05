import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import ViteSvgPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [React(), ViteSvgPlugin()],
});
