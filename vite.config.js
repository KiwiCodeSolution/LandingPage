import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: "/kiwicode/",
  plugins: [handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    })],
});