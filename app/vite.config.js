import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
export default defineConfig({ build: { rollupOptions: { input: Object.fromEntries(
  ['index.html', 'menu/index.html', 'catering/index.html', 'visit/index.html']
    .map(path => [path, fileURLToPath(new URL(path, import.meta.url))])) } } });
