import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { crx } from "@crxjs/vite-plugin";
import preprocess from "svelte-preprocess";

import {manifest} from "./src/manifest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({preprocess: preprocess()}),
    crx({ manifest: manifest })
  ],
  build: {
    sourcemap: true
  }
})
